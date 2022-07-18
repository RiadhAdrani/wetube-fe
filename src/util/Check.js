import AppManager from "../state-managers/AppManager";

function checkUser(callback) {
    if (typeof callback != "function") return;

    const app = AppManager();

    if (!app.user.is) {
        app.signin.toggle(true);
        return;
    }

    callback();
}

export { checkUser };
