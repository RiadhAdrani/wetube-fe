import FormButton from "../../components/button/Form.Button";
import SigninManager from "../../state-managers/Signin.Manager";

export default () => {
    const manager = SigninManager();

    return FormButton({
        text: "Sign in",
        disabled: manager.fetching.is,
        onClick: () => manager.signIn(),
    });
};
