import { Fragment, Row, Spacer } from "@riadh-adrani/recursive-web/html";
import DrawerButton from "./Drawer.Button";
import DrawerDivider from "../../components/divider/Drawer.divider";
import TitleSub from "../../components/text/Title.sub";
import LeftCenteredColumn from "../../components/utils/LeftCenteredColumn";
import LeftColumn from "../../components/utils/LeftColumn";
import Icons from "../../icons/Icons";
import AppManager from "../../state-managers/AppManager";
import { Var } from "../../util/Style";
import TopBarLeft from "../top-bar/TopBar.Left";
import { getRoute } from "@riadh-adrani/recursive-web";
import DrawerSubscriptionItem from "./Drawer.SubscriptionItem";

export default () => {
    const app = AppManager();

    const show = app.drawer.show;

    const menu = [{ icon: Icons.Home, text: "Home", route: "/" }];

    const sub = app.user.sub || [];

    return Row({
        style: {
            inline: {
                position: "fixed",
                top: "0px",
                transitionDuration: "300ms",
                width: "100%",
                zIndex: show ? 20 : -1,
                opacity: show ? 1 : 0,
            },
        },
        children: [
            Row({
                style: {
                    inline: {
                        position: "absolute",
                        backgroundColor: "#00000055",
                        height: "100%",
                        width: "100%",
                        transitionDuration: "inherit",
                    },
                },
                onClick: () => app.drawer.toggle(),
            }),
            LeftCenteredColumn({
                style: {
                    className: "drawer-menu",
                    normal: {
                        width: "250px",
                        height: "100vh",
                        overflowY: "auto",
                        zIndex: 5,
                        transform: `translate(${show ? "0px" : "-300px"})`,
                        backgroundColor: Var("main2"),
                        transitionDuration: "inherit",
                    },
                },
                children: [
                    Row({
                        style: {
                            inline: {
                                alignSelf: "flex-start",
                                minHeight: "60px",
                                paddingLeft: "25px",
                                position: "sticky",
                                width: "calc(100% - 25px)",
                                top: "0px",
                                backgroundColor: Var("main2"),
                            },
                        },
                        children: TopBarLeft(),
                    }),
                    LeftColumn({
                        style: {
                            normal: { width: "100%", marginTop: "20px", marginBottom: "10px" },
                        },
                        children: Fragment({
                            children: menu.map((item) =>
                                DrawerButton({
                                    selected: item.route === getRoute(),
                                    icon: item.icon,
                                    text: item.text,
                                    to: item.route,
                                })
                            ),
                        }),
                    }),
                    DrawerDivider,
                    LeftColumn({
                        children: TitleSub({ text: "Subscriptions", color: Var("invert5") }),
                        style: {
                            inline: {
                                alignSelf: "flex-start",
                                paddingLeft: "25px",
                                marginTop: "10px",
                            },
                        },
                    }),
                    LeftColumn({
                        style: {
                            normal: { width: "100%", marginTop: "5px", marginBottom: "10px" },
                        },
                        children: [
                            Spacer({ height: "10px" }),
                            Fragment({
                                children: sub.map((item) => DrawerSubscriptionItem(item.target)),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
