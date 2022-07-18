import { setState } from "@riadh-adrani/recursive-web";

export default () => {
    const makeNotification = (text) => {
        return { text, id: Date.now() * Math.random() };
    };

    const [value, setValue, live] = setState("app-notification", []);
    const TIME = 5000;

    const remove = (id) => {
        const item = live().find((i) => i.id == id);

        if (item) {
            setValue(live().filter((i) => i.id != id));
        }
    };

    const make = (text) => {
        const notification = makeNotification(text);

        setValue([...value, notification]);

        setTimeout(() => remove(notification.id), TIME);
    };

    return {
        items: value,
        make,
        remove,
    };
};
