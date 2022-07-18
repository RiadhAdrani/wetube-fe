import { Spacer, Span } from "@riadh-adrani/recursive-web/html";
import Icon from "../../icons/Icon";
import { Var } from "../../util/Style";
import LeftCenteredRow from "../../components/utils/LeftCenteredRow";
import { Link } from "@riadh-adrani/recursive-web";
import AppManager from "../../state-managers/AppManager";

export default ({ icon, size = "25px", text, selected = false, to }) => {
    const app = AppManager();

    return Link({
        href: to,
        children: [
            LeftCenteredRow({
                children: [
                    Icon({ icon, size }),
                    Spacer({ width: "20px" }),
                    Span({ children: text }),
                ],
            }),
        ],
        onClick: () => app.drawer.toggle(false),
        style: {
            scoped: true,
            normal: {
                padding: "10px 10px 10px 25px",
                width: "100%",
                boxSizing: "border-box",
                backgroundColor: selected ? Var("main9") : "transparent",
                color: Var("invert"),
                fontWeight: 400,
                cursor: "pointer",
                border: "none",
                fontSize: Var("bSize1"),
            },
            hover: {
                backgroundColor: Var("main7"),
            },
        },
    });
};
