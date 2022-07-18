import MenuButton from "../../components/button/Menu.Button";
import CenteredColumn from "../../components/utils/CenteredColumn";
import { Var } from "../../util/Style";
import { getVar } from "@riadh-adrani/recursive-web/style/methods";

export default ({ show = false, menu = [], hide = () => {} }) => {
    return CenteredColumn({
        style: {
            normal: {
                display: show ? "flex" : "none",
                position: "absolute",
                right: "0px",
                top: "60px",
                width: "300px",
                margin: ["5px", "5px", "0px", "0px"],
                backgroundColor: getVar("main2"),
                padding: ["10px", "0px"],
            },
        },
        children: menu.map((item) =>
            MenuButton({ icon: item.icon, text: item.text, onClick: (e) => item.onClick(e, hide) })
        ),
    });
};
