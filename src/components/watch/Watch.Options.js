import { Row, Spacer } from "@riadh-adrani/recursive-web/html";
import Icons from "../../icons/Icons";
import WatchManager from "../../state-managers/Watch.Manager";
import colorCss from "../../style/color.css";
import WatchButton from "./Watch.Button";
import WatchDate from "./Watch.Date";
import WatchViews from "./Watch.Views";

export default () => {
    const watch = WatchManager();

    return Row({
        style: {
            inline: {
                alignItems: "center",
                justifyContent: "space-between",
            },
        },
        children: [
            Row({
                children: [WatchViews(), Spacer({ width: "10px" }), WatchDate()],
            }),
            Row({
                children: [
                    WatchButton({
                        icon: watch.isLiked ? Icons.LikeFill : Icons.Like,
                        text: watch.likeCount,
                        color: watch.isLiked ? colorCss.logo : "white",
                        onClick: () => watch.onVoteClicked(watch.isLiked ? 0 : 1),
                    }),
                    WatchButton({
                        icon: watch.isDisliked ? Icons.DislikeFill : Icons.Dislike,
                        text: watch.dislikeCount,
                        color: watch.isDisliked ? colorCss.logo : "white",
                        onClick: () => watch.onVoteClicked(watch.isDisliked ? 0 : -1),
                    }),
                    WatchButton({ icon: Icons.AddToPlaylist, text: "Add" }),
                ],
            }),
        ],
    });
};
