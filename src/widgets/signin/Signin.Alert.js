import { Fragment, Spacer } from "@riadh-adrani/recursive-web/html";
import Text from "../../components/text/Text";
import CenteredRow from "../../components/utils/CenteredRow";
import Manager from "../../state-managers/Signin.Manager";
import { Var } from "../../util/Style";

export default () => {
    const manager = Manager();

    return Fragment({
        flags: {
            renderIf: manager.alert.value.length > 0,
        },
        children: [
            CenteredRow({
                style: {
                    normal: {
                        borderColor: Var("danger"),
                        borderWidth: "1px",
                        borderStyle: "solid",
                        padding: Var("medium"),
                        width: "90%",
                        borderRadius: Var("smallest"),
                    },
                },
                children: Text({ text: manager.alert.value, color: Var("danger") }),
            }),

            Spacer({ height: "20px" }),
        ],
    });
};
