import { Fragment, Spacer } from "@riadh-adrani/recursive-web/html";
import CircularSpinner from "../../components/spinners/CircularSpinner";
import SigninManager from "../../state-managers/Signin.Manager";

export default () => {
    const manager = SigninManager();

    return Fragment({
        flags: { renderIf: manager.fetching.is },
        children: [CircularSpinner({}), Spacer({ height: "20px" })],
    });
};
