import { Button, Span } from "@riadh-adrani/recursive-web/html";
import { Var } from "../../util/Style";
import CenteredRow from "../utils/CenteredRow";

export default ({ text, onClick = () => {}, disabled = false }) => {
    return Button({
        type: "button",
        disabled,
        children: [
            CenteredRow({
                children: [Span({ children: text })],
            }),
        ],
        onClick,
        style: {
            scoped: true,
            normal: {
                padding: "10px",
                width: "100%",
                backgroundColor: Var("logo"),
                color: Var("white"),
                fontWeight: 600,
                cursor: "pointer",
                borderRadius: Var("tiny"),
                borderColor: Var("logo"),
                borderWidth: "1px",
                borderStyle: "solid",
                transitionDuration: "100ms",
            },
            hover: {
                backgroundColor: Var("main"),
                borderColor: Var("main"),
                color: Var("white"),
            },
            disabled: {
                backgroundColor: Var("invert7"),
                borderColor: Var("invert7"),
                color: Var("invert2"),
            },
        },
    });
};
