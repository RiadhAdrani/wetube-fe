import { Link } from "@riadh-adrani/recursive-web";
import { userRoute } from "../../util/Routing";
import UserPicture from "../user/User.Picture";

export default (user, show) => {
    if (!show) return;

    return Link({
        children: UserPicture({
            img: user.img,
        }),
        href: userRoute(user.id),
        onClick: (e) => {
            e.stopPropagation();
            onclickglobal.notify();
        },
    });
};
