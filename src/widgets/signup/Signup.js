import { Hr, Spacer } from "@riadh-adrani/recursive-web/html";
import Text from "../../components/text/Text";
import TitleMain from "../../components/text/Title.main";
import CenteredColumn from "../../components/utils/CenteredColumn";
import CenteredRow from "../../components/utils/CenteredRow";
import LeftCenteredColumn from "../../components/utils/LeftCenteredColumn";
import AppManager from "../../state-managers/AppManager";
import SignupManager from "../../state-managers/Signup.Manager";
import { Var } from "../../util/Style";
import SignupAlert from "./Signup.Alert";
import SignupButton from "./Signup.Button";
import SignupCancel from "./Signup.Cancel";
import SignupFields from "./Signup.Fields";
import SignupSpinner from "./Signup.Spinner";

export default () => {
    const app = AppManager();

    if (!app.signup.show) return;

    const manager = SignupManager();

    return CenteredColumn({
        onKeyUpGlobal: (e) => {
            if (e.key == "Escape" && app.signup.show && !manager.fetching.is) {
                app.signup.toggle();
            }
        },
        style: {
            className: "signup-modal",
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
                    CenteredRow({ children: TitleMain({ text: "Sign up", color: Var("logo") }) }),
                    Spacer({ height: "20px" }),
                    Hr({
                        width: "100%",
                        size: "1px",
                    }),
                    Spacer({ height: "15px" }),
                    Text({
                        text: "Join millions of non-existing people by creating an account and using WeTube at its fullest",
                    }),
                    Spacer({ height: "15px" }),
                    SignupFields(),
                    Spacer({ height: "20px" }),
                    SignupSpinner(),
                    SignupAlert(),
                    CenteredRow({
                        style: { normal: { alignSelf: "stretch" } },
                        children: [SignupButton(), Spacer({ width: "5px" }), SignupCancel()],
                    }),
                    Spacer({ height: "10px" }),
                ],
            }),
        ],
    });
};
