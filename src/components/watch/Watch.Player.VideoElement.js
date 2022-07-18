import { Source, Video } from "@riadh-adrani/recursive-web/html";
import WatchManager from "../../state-managers/Watch.Manager";

export default () => {
    const watch = WatchManager();

    return Video({
        children: Source({ src: watch.url, type: "video/mp4" }),
        style: { scoped: true, normal: { height: "100%", width: "100%" } },
        dataSet: { playing: !watch.isPaused },
        loop: false,
        muted: watch.muted,
        onTimeUpdate: (event) => watch.setTime(event.target.currentTime),
        onEnded: () => watch.whenVideoEnds(),
        onPlay: () => watch.play(),
        onPause: () => watch.pause(),
        hooks: {
            onRef: (ref) => {
                if (watch.firstTime) {
                    console.log("first time");

                    watch.removeFirstTime();

                    ref.play().catch(() => {
                        ref.pause();
                    });
                }

                return "video-player";
            },
        },
    });
};
