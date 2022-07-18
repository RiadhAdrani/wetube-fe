import OutlinedButton from "../../components/button/Outlined.Button";
import AppManager from "../../state-managers/AppManager";
import SignupManager from "../../state-managers/Signup.Manager";

export default () => {
    const manager = SignupManager();
    const app = AppManager();

    return OutlinedButton({
        text: "Cancel",
        disabled: manager.fetching.is,
        onClick: () => app.signup.toggle(),
    });
};
