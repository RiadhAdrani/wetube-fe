import { Column, Fragment, Source, Video } from "@riadh-adrani/recursive-web/html";
import { getVar } from "@riadh-adrani/recursive-web/style/methods";
import WatchManager from "../../state-managers/Watch.Manager";
import CircularSpinner from "../spinners/CircularSpinner";
import WatchPlayerOverlay from "./Watch.Player.Overlay";
import WatchPlayerTogglePlayAnimation from "./Watch.Player.TogglePlayAnimation";
import WatchPlayerVideoElement from "./Watch.Player.VideoElement";

export default () => {
    const watch = WatchManager();

    return Column({
        style: {
            className: "video-player",
            normal: {
                position: "relative",
                height: watch.isLoading ? "500px" : "auto",
                maxHeight: watch.isLoading ? "500px" : "75vh",
                backgroundColor: getVar("main1"),
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                alignItems: "center",
                justifyContent: "center",
            },
        },
        children: [
            watch.isLoading
                ? CircularSpinner({ size: "100px", thickness: "10px" })
                : Fragment({
                      children: [
                          WatchPlayerVideoElement(),
                          WatchPlayerOverlay(),
                          WatchPlayerTogglePlayAnimation(),
                      ],
                  }),
        ],
    });
};
