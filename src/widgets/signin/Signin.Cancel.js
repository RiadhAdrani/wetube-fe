import OutlinedButton from "../../components/button/Outlined.Button";
import AppManager from "../../state-managers/AppManager";
import Manager from "../../state-managers/Signin.Manager";

export default () => {
    const manager = Manager();
    const app = AppManager();

    return OutlinedButton({
        text: "Cancel",
        disabled: manager.fetching.is,
        onClick: () => app.signin.toggle(false),
    });
};
