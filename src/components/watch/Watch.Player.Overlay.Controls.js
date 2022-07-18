import { Div, P, Row, Spacer } from "@riadh-adrani/recursive-web/html";
import { getVar } from "@riadh-adrani/recursive-web/style/methods";
import Icons from "../../icons/Icons";
import WatchManager from "../../state-managers/Watch.Manager";
import colorCss from "../../style/color.css";
import { formatTime } from "../../util/Video";
import WatchPlayerOverlayButton from "./Watch.Player.Overlay.Button";

export default () => {
    const watch = WatchManager();

    return Row({
        style: { inline: { alignItems: "center" } },
        children: [
            WatchPlayerOverlayButton({
                icon: watch.isPaused ? Icons.Play : Icons.Pause,
                onClick: watch.togglePlay,
                title: watch.isPaused ? "Play (space)" : "Pause (space)",
                shortcut: " ",
            }),
            Spacer({ width: "20px" }),
            P({
                style: { inline: { fontSize: getVar("bSize1") } },
                children: [formatTime(watch.time), " / ", formatTime(watch.length)],
            }),
            Spacer({ width: "20px" }),
            WatchPlayerOverlayButton({
                icon: watch.muted ? Icons.VolumeMuted : Icons.Volume,
                onClick: watch.toggleMuted,
                title: "Toggle mute (m)",
                shortcut: "m",
                color: watch.muted ? colorCss.white : colorCss.logo,
            }),
            P({
                style: {
                    inline: {
                        fontSize: getVar("bSize1"),
                        color: !watch.muted ? colorCss.logo : colorCss.white,
                    },
                },
                children: [watch.muted ? "off" : "on"],
            }),
            Spacer({ width: "20px" }),
            WatchPlayerOverlayButton({
                icon: Icons.Loop,
                title: "Loop (l)",
                size: "25px",
                shortcut: "l",
                onClick: watch.toggleLoop,
                color: watch.loop ? colorCss.logo : colorCss.white,
            }),
            P({
                style: {
                    inline: {
                        fontSize: getVar("bSize1"),
                        color: watch.loop ? colorCss.logo : colorCss.white,
                    },
                },
                children: [watch.loop ? "on" : "off"],
            }),
            Spacer({ width: "20px" }),
            Div({ style: { inline: { marginLeft: "auto" } } }),
            WatchPlayerOverlayButton({
                icon: Icons.Later,
                title: "Time until view counted",
                size: "25px",
                color: watch.viewCounted ? colorCss.logo : colorCss.white,
            }),
            P({
                style: {
                    inline: {
                        fontSize: getVar("bSize1"),
                        color: watch.viewCounted ? colorCss.logo : colorCss.white,
                    },
                },
                children: watch.viewCounted ? "done" : formatTime(watch.timeUntilView),
            }),
            WatchPlayerOverlayButton({
                icon: Icons.FullScreen,
                onClick: watch.toggleFullScreen,
                title: "Toggle fullscreen (f)",
                shortcut: "f",
            }),
        ],
    });
};
