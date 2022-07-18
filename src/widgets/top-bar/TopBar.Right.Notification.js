import Icons from "../../icons/Icons";
import { checkUser } from "../../util/Check";
import TopBarClickableIcon from "./TopBar.ClickableIcon";

export default () => {
    return TopBarClickableIcon({
        state: "show-notification-menu",
        icon: Icons.Notification,
        title: "Create",
        menu: [
            { text: "Notification", icon: Icons.UploadVideo, onClick: () => checkUser(() => {}) },
        ],
    });
};
