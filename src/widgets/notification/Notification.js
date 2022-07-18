import { Fragment, Spacer } from "@riadh-adrani/recursive-web/html";
import ToastButton from "../../components/button/Toast.Button";
import NotificationManager from "../../state-managers/Notification.Manager";

export default () => {
    const manager = NotificationManager();

    return Fragment({
        children: manager.items.map((item) =>
            Fragment({
                children: [
                    ToastButton(item.text, () => manager.remove(item.id)),
                    Spacer({ height: "10px" }),
                ],
            })
        ),
    });
};
