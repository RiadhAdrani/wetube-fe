import { setState } from "@riadh-adrani/recursive-web";
import { Column } from "@riadh-adrani/recursive-web/html";
import Icon from "../../icons/Icon";
import TopBarDropDownMenu from "./TopBar.DropDownMenu";

export default ({ icon, title = "Use", state = "show-top-bar-clickable-icon", menu = [] }) => {
    const [show, setShow] = setState(state, false);

    const hide = () => setShow(false);

    return Column({
        style: { inline: { padding: "5px" } },
        title,
        onClick: () => {
            setShow(true);
        },
        onClickGlobal: () => {
            setShow(false);
        },
        children: [
            Icon({ icon, size: "25px", style: { scoped: true, normal: { cursor: "pointer" } } }),
            TopBarDropDownMenu({ show, menu, hide }),
        ],
    });
};
