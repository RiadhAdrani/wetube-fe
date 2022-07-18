import { Column, Spacer } from "@riadh-adrani/recursive-web/html";
import { linearGradient, rgba } from "@riadh-adrani/recursive-web/style/methods";
import WatchManager from "../../state-managers/Watch.Manager";
import WatchPlayerOverlayControls from "./Watch.Player.Overlay.Controls";
import WatchPlayerOverlayProgressBar from "./Watch.Player.Overlay.ProgressBar";

export default () => {
    const watch = WatchManager();

    return Column({
        onClick: () => watch.togglePlay(),
        onMouseEnter: () => watch.toggleControls(true),
        onMouseLeave: () => watch.toggleControls(false),
        style: {
            className: "watch-player-overlay",
            scoped: true,
            normal: {
                position: "absolute",
                inset: "0px",
                height: "100%",
                width: "100%",
                transitionDuration: "300ms",
                opacity: watch.showControls ? "1" : "0",
            },
        },
        children: [
            Column({
                onClick: (e) => {
                    e.stopPropagation();
                    onclickglobal.notify();
                },
                style: {
                    className: "watch-player-controller",
                    scoped: true,
                    normal: {
                        marginTop: "auto",
                        padding: ["10px", "20px"],
                        backgroundImage: linearGradient(
                            "180deg",
                            [rgba(0, 0, 0, 0), "0%"],
                            [rgba(0, 0, 0, 0.5), "50%"],
                            [rgba(0, 0, 0, 0.75), "100%"]
                        ),
                    },
                },
                children: [
                    WatchPlayerOverlayProgressBar(),
                    Spacer({ height: "5px" }),
                    WatchPlayerOverlayControls(),
                ],
            }),
        ],
    });
};
