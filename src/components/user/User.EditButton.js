import { Span } from "@riadh-adrani/recursive-web/html";
import { getVar } from "@riadh-adrani/recursive-web/style/methods";
import AppManager from "../../state-managers/AppManager";
import UserManager from "../../state-managers/User.Manager";

export default () => {
    const user = UserManager();
    const app = AppManager();

    const isTheUser = user.user && app.user.value && user.user.id === app.user.value.id;

    if (!isTheUser) return;

    return Span({
        style: {
            scoped: true,
            normal: {
                fontSize: "small",
                backgroundColor: getVar("main5"),
                padding: ["5px", "10px"],
                borderRadius: getVar("tiny"),
                cursor: "pointer",
            },
            hover: {
                backgroundColor: getVar("main7"),
            },
        },
        onClick: () => {
            user.toggleShowEdit();
        },
        children: "Edit",
    });
};
