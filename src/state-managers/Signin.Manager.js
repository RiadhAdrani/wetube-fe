import { setState, updateOn } from "@riadh-adrani/recursive-web";
import { getSubscription, signin } from "../services/user.service";
import AppManager from "./AppManager";

export default () => {
    const [fetching, setFetching] = setState("signin-fetching", false);
    const [alert, setAlert] = setState("signin-alert", "");
    const [form, setForm] = setState("signin-form", {
        email: {
            value: "",
            type: "text",
            name: "Email",
            placeholder: "Enter your email",
        },
        password: {
            value: "",
            type: "password",
            name: "Password",
            placeholder: "Enter your password",
        },
    });

    const app = AppManager();

    return {
        fetching: {
            is: fetching,
            toggle: (value) => setFetching(value !== undefined ? value : !fetching),
        },
        alert: {
            value: alert,
            set: (value) => setAlert(value !== undefined ? value : ""),
        },
        form: {
            value: form,
            setField(field, value) {
                if (!form[field]) return;

                setForm({ ...form, [field]: { ...form[field], value } });
            },
            reset() {
                const _form = form;

                Object.keys(_form).forEach((key) => (_form[key].value = ""));

                setForm(_form);
            },
        },
        signIn() {
            setFetching(true);
            setAlert("");

            signin(
                form.email.value,
                form.password.value,
                async (data) => {
                    const subscription = await getSubscription(data.id);

                    updateOn(() => {
                        setAlert("");
                        setFetching(false);
                        app.user.set(data);
                        app.signin.toggle(false);

                        if (!subscription.failed) {
                            app.user.updateSubscription(subscription.items);
                        }
                    });
                },
                (reason) => {
                    updateOn(() => {
                        setAlert(reason);
                        setFetching(false);
                    });
                }
            );
        },
    };
};
