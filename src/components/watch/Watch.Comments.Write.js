import { Div, Input, Row, Spacer } from "@riadh-adrani/recursive-web/html";
import { getVar } from "@riadh-adrani/recursive-web/style/methods";
import WatchManager from "../../state-managers/Watch.Manager";
import OutlinedButton from "../button/Outlined.Button";
import SimpleTextField from "../form/SimpleTextField";

export default () => {
    const manager = WatchManager();

    return Row({
        style: {
            scoped: true,
            normal: {
                padding: ["10px"],
                border: ["1px", "solid", getVar("invert9")],
                borderRadius: getVar("small"),
            },
        },
        children: [
            SimpleTextField({
                normalStyle: { flex: 1 },
                value: manager.comment,
                onInput: (e) => {
                    manager.updateComment(e.target.value);
                },
            }),
            Spacer({ width: "10px" }),
            Div({ children: OutlinedButton({ text: "Comment", onClick: manager.addNewComment }) }),
        ],
    });
};
