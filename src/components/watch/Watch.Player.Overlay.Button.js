import { Row } from "@riadh-adrani/recursive-web/html";
import { edges } from "@riadh-adrani/recursive-web/style/methods";
import Icon from "../../icons/Icon";
import { customTitle } from "../../util/Style";

export default ({ icon, title, onClick = () => {}, size = "35px", shortcut, color = "white" }) => {
    return Row({
        onKeyDownGlobal: (e) => {
            if (shortcut && e.key === shortcut) {
                onClick();
            }
        },
        children: Icon({
            icon,
            size,
            colors: [color],
            style: {
                scoped: true,
                normal: { margin: "auto" },
            },
        }),
        title,
        dataSet: { title },
        onClick,
        style: {
            scoped: true,
            className: "watch-overlay-button",
            normal: {
                margin: edges({ horizontal: "2.5px", vertical: "0px" }),
                borderRadius: "50%",
                transitionDuration: "200ms",
                cursor: "pointer",
                height: "37px",
                width: "37px",
                alignContent: "center",
                alignItems: "center",
                position: "relative",
            },
            hover: {
                backgroundColor: "#ffffff22",
            },
            ...customTitle(),
        },
    });
};
