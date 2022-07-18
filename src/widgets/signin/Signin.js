import { Hr, Spacer } from "@riadh-adrani/recursive-web/html";
import Text from "../../components/text/Text";
import TitleMain from "../../components/text/Title.main";
import CenteredColumn from "../../components/utils/CenteredColumn";
import CenteredRow from "../../components/utils/CenteredRow";
import LeftCenteredColumn from "../../components/utils/LeftCenteredColumn";
import AppManager from "../../state-managers/AppManager";
import SigninManager from "../../state-managers/Signin.Manager";
import { Var } from "../../util/Style";
import SigninAlert from "./Signin.Alert";
import SigninButton from "./Signin.Button";
import SigninCancel from "./Signin.Cancel";
import SigninFields from "./Signin.Fields";
import SigninSpinner from "./Signin.Spinner";

export default () => {
    const app = AppManager();

    if (!app.signin.show) return;

    const manager = SigninManager();

    return CenteredColumn({
        onKeyUpGlobal: (e) => {
            if (e.key == "Escape" && app.signin.show && !manager.fetching.is) {
                app.signin.toggle();
            }
        },
        style: {
            className: "signin-modal",
            normal: {
                position: "fixed",
                inset: "0px",
                zIndex: 10,
                backgroundColor: "#000000aa",
            },
        },
        children: [
            LeftCenteredColumn({
                style: {
                    normal: {
                        backgroundColor: Var("main3"),
                        padding: `${Var("medium")} ${Var("giant")}`,
                        borderRadius: Var("smallest"),
                        width: "400px",
                        boxShadow: `0px 0px 5px 1px ${Var("main1")}`,
                        boxSizing: "border-box",
                    },
                },
                children: [
                    Spacer({ height: "20px" }),
                    CenteredRow({ children: TitleMain({ text: "Sign in", color: Var("logo") }) }),
                    Spacer({ height: "20px" }),
                    Hr({
                        width: "100%",
                        size: "1px",
                    }),
                    Spacer({ height: "15px" }),
                    Text({
                        text: "Sign in with your account",
                    }),
                    Spacer({ height: "15px" }),
                    SigninFields(),
                    Spacer({ height: "20px" }),
                    SigninSpinner(),
                    SigninAlert(),
                    CenteredRow({
                        style: { normal: { alignSelf: "stretch" } },
                        children: [SigninButton(), Spacer({ width: "5px" }), SigninCancel()],
                    }),
                    Spacer({ height: "10px" }),
                ],
            }),
        ],
    });
};
