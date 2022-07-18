import { updateOn } from "@riadh-adrani/recursive-web";
import { Button } from "@riadh-adrani/recursive-web/html";
import { getVar } from "@riadh-adrani/recursive-web/style/methods";
import { doSubscribe, unSubscribe } from "../../services/user.service";
import AppManager from "../../state-managers/AppManager";
import NotificationManager from "../../state-managers/Notification.Manager";
import WatchManager from "../../state-managers/Watch.Manager";
import { checkUser } from "../../util/Check";

export default () => {
    const manager = WatchManager();
    const app = AppManager();
    const notification = NotificationManager();

    const isUser = (() => {
        if (!app.user.is || !manager.user) return false;

        return app.user.value.id === manager.user.id;
    })();

    if (isUser) return;

    const isSubscribed = (() => {
        if (!app.user.is || !manager.user) return false;

        return app.user.isSubscribedTo(manager.user.id);
    })();

    const buttonColor = manager.isLoading
        ? getVar("main2")
        : isSubscribed
        ? getVar("main2")
        : getVar("logo");

    const onSubscribeClicked = async () => {
        const source = app.user.value.id;
        const target = manager.user_id;

        if (isSubscribed) {
            await unSubscribe(source, target);

            updateOn(() => {
                app.user.removeSubscription(target);
                notification.make("Subscription removed");
            });
        } else {
            await doSubscribe(source, target);

            updateOn(() => {
                app.user.addSubscription({ target, source });
                notification.make("Subscription added");
            });
        }
    };

    return Button({
        children: isSubscribed ? "Subscribed" : "Subscribe",
        style: {
            inline: {
                padding: "0px " + getVar("giant"),
                fontWeight: 600,
                textTransform: "uppercase",
                background: buttonColor,
                color: manager.isLoading ? "transparent" : getVar("white"),
                cursor: "pointer",
                borderColor: buttonColor,
                borderWidth: "1px",
                borderStyle: "solid",
                borderRadius: getVar("smallest"),
            },
        },
        onClick: () => checkUser(onSubscribeClicked),
    });
};
