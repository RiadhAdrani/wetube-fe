import { H4 } from "@riadh-adrani/recursive-web/html";
import { getVar } from "@riadh-adrani/recursive-web/style/methods";
import WatchManager from "../../state-managers/Watch.Manager";
import { Var } from "../../util/Style";
import { viewsText } from "../../util/Video";

export default () => {
    const manager = WatchManager();

    return H4({
        children: viewsText(manager.views),
        style: {
            className: "watch-video-views",
            normal: {
                fontSize: Var("bSize3"),
                letterSpacing: "0.75px",
                margin: "0px",
                fontWeight: 500,
                color: manager.isLoading ? "transparent" : Var("invert6"),
                backgroundColor: manager.isLoading ? getVar("main2") : "transparent",
                borderRadius: getVar("smallest"),
            },
        },
    });
};
