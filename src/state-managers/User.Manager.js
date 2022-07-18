import { getParams, setState, updateOn } from "@riadh-adrani/recursive-web";
import { doSubscribe, getSubscribers, unSubscribe, update } from "../services/user.service";
import { getUserVideos } from "../services/videos.service";
import { checkUser } from "../util/Check";
import { setUserCache, setVideoCache } from "../util/States";
import AppManager from "./AppManager";
import NotificationManager from "./Notification.Manager";

export default () => {
    const app = AppManager();
    const notification = NotificationManager();

    const id = getParams().id;

    const [user, setUser] = setUserCache(id);
    const [videos, setVideos] = setState("user-" + id + "-videos", [], async () => {
        const data = await getUserVideos(id);

        updateOn(() => {
            setVideos(data.data.items);
        });
    });

    const [subscribers, setSubscribers] = setState(
        "user-subs-" + id,
        { loading: true },
        async () => {
            const _subs = await getSubscribers(id);

            setSubscribers(_subs);
        }
    );

    const [show, setShow] = setState("show-edit-user-" + id, false);

    const subscribed = () => {
        if (user.loading || user.failed) return false;

        return app.user.isSubscribedTo(id);
    };

    const isLoading = () => {
        return user.loading == true || subscribers.loading == true;
    };

    const hasFailed = () => {
        return user.failed == true || subscribers.failed == true;
    };

    const subscribersCount = () => {
        if (!subscribers.items) return 0;

        return subscribers.items.length;
    };

    const isCurrent = () => {
        if (!app.user.is) return false;

        return app.user.value.id == id;
    };

    const toggleShowEdit = () => {
        if (!app.user.is) return;

        setShow(!show);
    };

    const updateUser = (data) => {
        const _data = new FormData();

        _data.append("description", data.about);
        _data.append("img", data.file);

        toggleShowEdit();

        update(user.id, _data)
            .then((res) => {
                setUser(res.data);
                notification.make("Profile updated !");
            })
            .catch(() => {
                notification.make("Something went wrong ...");
            });
    };

    return {
        user,
        show,
        videos,
        subscribed: subscribed(),
        loading: isLoading(),
        failed: hasFailed(),
        isCurrent: isCurrent(),
        button: {},
        updateUser,
        toggleShowEdit,
        subscribersCount,
        subscribe: () => {
            checkUser(async () => {
                if (isLoading()) return;

                if (subscribed()) {
                    const res = await unSubscribe(app.user.value.id, id);

                    if (res.done) {
                        updateOn(() => {
                            setSubscribers({
                                items: subscribers.items.filter(
                                    (item) => item.source != app.user.value.id
                                ),
                            });
                            app.user.removeSubscription(id);

                            notification.make("Subscription Removed");
                        });
                    }
                } else {
                    const res = await doSubscribe(app.user.value.id, id);

                    if (res.done) {
                        updateOn(() => {
                            const newItem = { target: id, source: app.user.value.id };

                            app.user.addSubscription(newItem);

                            setSubscribers({
                                items: [...subscribers.items, newItem],
                            });

                            notification.make("Subscription Added");
                        });
                    }
                }
            });
        },
    };
};
