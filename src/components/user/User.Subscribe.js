import { Button } from "@riadh-adrani/recursive-web/html";
import { Var } from "../../util/Style";
import UserManager from "../../state-managers/User.Manager";

export default () => {
    const manager = UserManager();

    if (manager.isCurrent) return;

    return Button({
        children: manager.subscribed ? "Subscribed" : "Subscribe",
        style: {
            className: "user-subscribe-button",
            normal: {
                padding: `${Var("large")} ${Var("giant")}`,
                fontSize: Var("bSize1"),
                letterSpacing: "1px",
                fontWeight: 500,
                textTransform: "uppercase",
                border: "none",
                backgroundColor: Var(manager.subscribed ? "main7" : "logo"),
                color: Var(manager.subscribed ? "invert" : "white"),
                cursor: "pointer",
                borderRadius: Var("tiny"),
            },
        },
        onClick: () => manager.subscribe(),
    });
};
