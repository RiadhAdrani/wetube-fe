import { Button, Spacer, Span } from "@riadh-adrani/recursive-web/html";
import Icon from "../../icons/Icon";
import { Var } from "../../util/Style";
import LeftCenteredRow from "../utils/LeftCenteredRow";

export default ({ icon, size = "30px", text, onClick = () => {} }) => {
    return Button({
        type: "button",
        children: [
            LeftCenteredRow({
                children: [
                    Icon({ icon, size }),
                    Spacer({ width: "10px" }),
                    Span({ children: text }),
                ],
            }),
        ],
        onClick,
        style: {
            scoped: true,
            normal: {
                padding: "10px",
                width: "100%",
                backgroundColor: "transparent",
                color: Var("invert"),
                fontWeight: 400,
                cursor: "pointer",
                border: "none",
            },
            hover: {
                backgroundColor: Var("main7"),
            },
        },
    });
};
