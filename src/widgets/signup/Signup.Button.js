import FormButton from "../../components/button/Form.Button";
import SignupManager from "../../state-managers/Signup.Manager";

export default () => {
    const manager = SignupManager();

    return FormButton({
        text: "Sign up",
        disabled: manager.fetching.is,
        onClick: () => manager.signUp(),
    });
};
