import { getParams, getRef, setCache, setState } from "@riadh-adrani/recursive-web";
import { addComments, getComments, getRandom, getVideo } from "../services/videos.service";
import { addView, addVote, start } from "../services/watch.service";
import { checkUser } from "../util/Check";
import AppManager from "./AppManager";
import NotificationManager from "./Notification.Manager";

export default () => {
    const id = getParams().id;
    const app = AppManager();
    const notification = NotificationManager();

    const player = () => getRef("video-player", undefined);

    const [recommended, setRecommended] = setState("recommended-videos-" + id, [], async () => {
        const data = await getRandom();
        setRecommended(data.data.items.filter((video) => video.id != id));
    });

    const [comments, setComments] = setState("comments-video" + id, [], async () => {
        const data = await getComments(id);
        setComments(data.data.comments);
    });

    const [controls, setControls] = setCache("watch-controls", {
        muted: false,
        fullscreen: false,
        loop: false,
    });

    const [video, setVideo] = setState("watch-" + id, { loading: true }, async () => {
        const data = (await getVideo(id)).data;

        if (data.failed) {
            setVideo({ failed: true });
            return;
        }

        const res = await start(id);
        const url = res.request.responseURL;

        setVideo({
            ...data,
            url,
            isPaused: true,
            time: 0,
            showControls: true,
            firstTime: true,
            watchTime: 0,
            viewCounted: false,
        });
    });

    if (video.failed) return { failed: true };

    const [comment, setComment] = setState("comment-video-" + id, "");

    function minimumTimeForView() {
        if (video.isLoading) return Infinity;

        if (video.length > 60) return 60;

        return video.length * 0.9;
    }

    function whenPlayerIsReady(callback) {
        if (typeof callback == "function" && player() && player().tagName == "VIDEO") {
            callback(player());
        }
    }

    const isPaused = () => player().paused;

    const play = () =>
        whenPlayerIsReady((player) => {
            player.play();
            setVideo({ ...video, isPaused: false });
        });

    const pause = () =>
        whenPlayerIsReady((player) => {
            player.pause();
            setVideo({ ...video, isPaused: true });
        });

    const togglePlay = () =>
        whenPlayerIsReady(() => {
            if (isPaused()) play();
            else pause();
        });

    const toggleControls = (value) => {
        whenPlayerIsReady(() => {
            setVideo({ ...video, showControls: value });
        });
    };

    const setTime = (value) => {
        whenPlayerIsReady(() => {
            if (value > video.time + 0.5) {
                const watchTime = video.watchTime + 0.5;
                let viewCounted = video.viewCounted;

                if (watchTime > minimumTimeForView() && !video.viewCounted) {
                    const watcher = app.user.is ? app.user.value.id : "anonymous";

                    notification.make("View counted !");

                    addView(video.id, watcher);
                    viewCounted = true;
                }

                setVideo({ ...video, time: value, watchTime, viewCounted });
            }
        });
    };

    const changeTime = (value, isPaused = video.isPaused) => {
        whenPlayerIsReady((player) => {
            if (value > video.length) return;

            player.currentTime = value;
            setVideo({ ...video, time: value, isPaused });
        });
    };

    const toggleMuted = () =>
        whenPlayerIsReady((player) => {
            const value = !player.muted;
            player.muted = value;

            setControls({ ...controls, muted: value });
        });

    const toggleFullScreen = () =>
        whenPlayerIsReady((player) => {
            player.requestFullscreen();
        });

    const whenVideoEnds = () => {
        whenPlayerIsReady((player) => {
            changeTime(0);

            if (controls.loop) player.play();
        });
    };

    const toggleLoop = () => {
        whenPlayerIsReady(() => {
            setControls({ ...controls, loop: !controls.loop });
        });
    };

    const removeFirstTime = () => {
        setVideo({ ...video, firstTime: false });
    };

    const onVoteClicked = (vote) => {
        const user_id = app.user.value.id;
        const video_id = video.id;

        addVote(video_id, user_id, vote).then(() => {
            let msg = "Vote added.";

            switch (vote) {
                case 0:
                    msg = "Vote removed.";
                    break;
                case 1:
                    msg = "Video liked.";
                    break;
                case -1:
                    msg = "Video disliked";
                    break;
            }

            notification.make(msg);
        });

        const newList = [
            ...video.votes.filter((item) => item.user_id != user_id),
            { user_id, video_id, vote },
        ];

        setVideo({ ...video, votes: newList });
    };

    const updateComment = (value) => {
        setComment(value);
    };

    const addNewComment = () =>
        checkUser(() => {
            if (!comment.trim()) return;

            addComments(app.user.value.id, id, comment).then((res) => {
                if (res.data.comments) {
                    setComment("");
                    setComments(res.data.comments);
                } else {
                    notification.make("Couldn't save your comment !");
                }
            });
        });

    const isLoading = video.loading === true;

    const timeUntilView = minimumTimeForView() - video.watchTime;

    const viewCounted = video.viewCounted;

    const isLiked = (() => {
        if (video.loading || !app.user.is) return false;

        return (
            video.votes.find((item) => item.user_id == app.user.value.id && item.vote == 1) != null
        );
    })();

    const isDisliked = (() => {
        if (video.loading || !app.user.is) return false;

        return (
            video.votes.find((item) => item.user_id == app.user.value.id && item.vote == -1) != null
        );
    })();

    const dislikeCount = (() => {
        if (video.loading) return 0;

        return video.votes.filter((item) => item.vote == -1).length;
    })();

    const likeCount = (() => {
        if (video.loading) return 0;

        return video.votes.filter((item) => item.vote == 1).length;
    })();

    return {
        ...video,
        ...controls,
        comment,
        comments,
        isLoading,
        timeUntilView,
        viewCounted,
        isLiked,
        isDisliked,
        dislikeCount,
        likeCount,
        recommended,
        play,
        pause,
        setTime,
        changeTime,
        removeFirstTime,
        whenVideoEnds,
        onVoteClicked,
        togglePlay,
        toggleMuted,
        toggleControls,
        toggleFullScreen,
        toggleLoop,
        addNewComment,
        updateComment,
    };
};
