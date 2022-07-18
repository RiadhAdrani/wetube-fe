import UserHeader from "../components/user/User.Header";
import UserNavigation from "../components/user/User.Navigation";
import UserNotFound from "../components/user/User.NotFound";
import UserManager from "../state-managers/User.Manager";
import { getParams, getRoute, renderRoute } from "@riadh-adrani/recursive-web";
import { Column, Spacer } from "@riadh-adrani/recursive-web/html";
import { Var } from "../util/Style";
import UserEditDialog from "../components/user/User.EditDialog";
import { getVar } from "@riadh-adrani/recursive-web/style/methods";
import UserVideosRoute from "./User.Videos.route";

export default () => {
    const manager = UserManager();

    if (manager.failed) {
        return UserNotFound();
    }

    const isHome = getRoute() === `/user=:${getParams().id};`;

    return Column({
        children: [
            UserEditDialog(),
            Column({
                style: {
                    scoped: true,
                    normal: {
                        padding: [getVar("giant2"), "200px", "0px", "200px"],
                        backgroundColor: Var("main1"),
                    },
                },
                children: [UserHeader(), Spacer({ height: "24px" }), UserNavigation()],
            }),
            Column({
                style: {
                    scoped: true,
                    normal: {
                        padding: [getVar("giant3"), "200px"],
                    },
                },
                children: isHome ? UserVideosRoute() : renderRoute(),
            }),
        ],
    });
};
