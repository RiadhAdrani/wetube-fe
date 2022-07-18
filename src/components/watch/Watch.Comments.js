import { Fragment, LazyColumn, Spacer } from "@riadh-adrani/recursive-web/html";
import { getVar } from "@riadh-adrani/recursive-web/style/methods";
import WatchManager from "../../state-managers/Watch.Manager";
import TitleSub from "../text/Title.sub";
import WatchCommentsComment from "./Watch.Comments.Comment";
import WatchCommentsWrite from "./Watch.Comments.Write";

export default () => {
    const manager = WatchManager();

    return LazyColumn({
        children: [
            TitleSub({
                text: ["Comments", " ", `(${manager.comments.length})`],
                color: getVar("invert5"),
            }),
            Spacer({ height: "10px" }),
            WatchCommentsWrite(),
            Spacer({ height: "10px" }),
            Fragment({
                children: manager.comments.map((comment) => {
                    return WatchCommentsComment(comment);
                }),
            }),
        ],
    });
};
