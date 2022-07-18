import { H3 } from "@riadh-adrani/recursive-web/html";
import { getVar } from "@riadh-adrani/recursive-web/style/methods";
import WatchManager from "../../state-managers/Watch.Manager";
import { Var } from "../../util/Style";

export default () => {
    const manager = WatchManager();

    return H3({
        children: manager.title || "Video Title Placeholder",
        style: {
            className: "watch-video-title",
            normal: {
                fontSize: Var("bSize5"),
                letterSpacing: "0.5px",
                margin: "0px",
                color: manager.isLoading ? "transparent" : "inherit",
                backgroundColor: manager.isLoading ? getVar("main2") : "transparent",
                width: manager.isLoading ? "300px" : "auto",
                borderRadius: getVar("smallest"),
            },
        },
    });
};
