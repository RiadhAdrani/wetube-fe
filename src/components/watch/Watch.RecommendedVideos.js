import { Column, Fragment, Hr, Spacer } from "@riadh-adrani/recursive-web/html";
import { getVar } from "@riadh-adrani/recursive-web/style/methods";
import WatchManager from "../../state-managers/Watch.Manager";
import TitleSub from "../text/Title.sub";
import Padding from "../utils/Padding";
import VideoCard from "../video-card/Video.Card";

export default () => {
    const watcher = WatchManager();

    return Column({
        style: { scoped: true, normal: { minWidth: "300px" } },
        children: [
            Padding({
                padding: "5px",
                children: TitleSub({
                    text: "Recommended",
                    color: getVar("invert1"),
                }),
            }),
            Spacer({ height: "5px" }),
            Hr({ width: "100%", size: "1px", color: "#757575" }),
            Spacer({ height: "5px" }),
            Fragment({
                children: watcher.recommended.map((item) => VideoCard(item, item.user, true)),
            }),
        ],
    });
};
