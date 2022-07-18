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
                backgroundColor: "transparent",
                borderColor: Var("main9"),
                borderWidth: "1px",
                borderStyle: "solid",
                color: Var("invert"),
                borderRadius: Var("tiny"),
                fontWeight: 400,
                cursor: "pointer",
                transitionDuration: "100ms",
            },
            hover: {
                backgroundColor: Var("main1"),
            },
            disabled: {
                color: Var("invert2"),
                borderColor: Var("invert7"),
                backgroundColor: "transparent",
            },
        },
    });
};
