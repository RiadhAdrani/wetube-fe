import { Column } from "@riadh-adrani/recursive-web/html";
import AppManager from "./state-managers/AppManager";
import NotificationManager from "./state-managers/Notification.Manager";
import globalCss from "./style/global.css";
import BottomRightWidgetsWrapper from "./widgets/BottomRightWidgetsWrapper";
import Drawer from "./widgets/drawer/Drawer";
import RouteWrapper from "./widgets/RouteWrapper";
import Signin from "./widgets/signin/Signin";
import Signup from "./widgets/signup/Signup";
import TopBar from "./widgets/top-bar/TopBar";

export default () => {
    globalCss();
    AppManager();
    NotificationManager();

    return Column({
        style: {
            inline: {
                minHeight: "100vh",
                maxWidth: "100vw",
                overflowX: "hidden",
            },
        },
        children: [
            RouteWrapper(),
            TopBar(),
            Drawer(),
            Signup(),
            Signin(),
            BottomRightWidgetsWrapper(),
        ],
    });
};
