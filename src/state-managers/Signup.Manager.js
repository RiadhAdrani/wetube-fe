import { setState, updateOn } from "@riadh-adrani/recursive-web";
import { signup } from "../services/user.service";
import AppManager from "./AppManager";

export default () => {
    const app = AppManager();

    const [fetching, setFetching] = setState("signup-fetching", false);
    const [alert, setAlert] = setState("signup-alert", "");
    const [form, setForm] = setState("signup-form", {
        email: {
            value: "",
            type: "text",
            name: "Email",
            placeholder: "Enter your email",
        },
        username: {
            value: "",
            type: "text",
            name: "Username",
            placeholder: "What should we call you ?",
        },
        password: {
            value: "",
            type: "password",
            name: "Password",
            placeholder: "Create a password",
        },
    });

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
            asData() {
                const data = {};

                Object.keys(form).forEach((key) => {
                    data[key] = form[key].value;
                });

                return data;
            },
        },
        signUp() {
            this.fetching.toggle(true);

            const data = this.form.asData();

            setAlert("");

            signup(
                data,
                (res) => {
                    app.signup.toggle(false);
                    app.signin.toggle(true);
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
