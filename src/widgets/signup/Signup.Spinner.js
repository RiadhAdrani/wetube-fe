import { Fragment, Spacer } from "@riadh-adrani/recursive-web/html";
import CircularSpinner from "../../components/spinners/CircularSpinner";
import SignupManager from "../../state-managers/Signup.Manager";

export default () => {
    const manager = SignupManager();

    return Fragment({
        flags: { renderIf: manager.fetching.is },
        children: [CircularSpinner({}), Spacer({ height: "20px" })],
    });
};
