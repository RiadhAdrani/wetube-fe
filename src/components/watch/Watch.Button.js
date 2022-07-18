import { Spacer, Span } from "@riadh-adrani/recursive-web/html";
import { getVar } from "@riadh-adrani/recursive-web/style/methods";
import Icon from "../../icons/Icon";
import WatchManager from "../../state-managers/Watch.Manager";
import { checkUser } from "../../util/Check";
import CenteredRow from "../utils/CenteredRow";

export default ({ icon, text = "", onClick = () => {}, color = "white" }) => {
    const manager = WatchManager();

    return CenteredRow({
        onClick: () => {
            checkUser(onClick);
        },
        title: text,
        children: [
            Icon({ icon, size: "20px", colors: [manager.isLoading ? "transparent" : color] }),
            Spacer({ width: "5px" }),
            Span({ children: text }),
        ],
        style: {
            className: "watch-button",
            normal: {
                background: manager.isLoading ? getVar("main2") : "transparent",
                color: manager.isLoading ? "transparent" : color,
                border: "none",
                cursor: manager.isLoading ? "initial" : "pointer",
                borderRadius: getVar("small"),
                padding: "7.5px 10px",
                fontSize: getVar("bSize3"),
                fontWeight: 600,
                marginLeft: "5px",
                position: "relative",
            },
            hover: {
                background: getVar("main2"),
            },
        },
    });
};
