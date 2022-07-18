import { Link } from "@riadh-adrani/recursive-web";
import WatchManager from "../../state-managers/Watch.Manager";
import { userRoute } from "../../util/Routing";
import UserPicture from "../user/User.Picture";

export default () => {
    const manager = WatchManager();
    const user = manager.user;

    return Link({
        href: manager.isLoading ? undefined : userRoute(manager.user_id),
        children: UserPicture({ img: user ? user.img : false, size: "40px" }),
    });
};
