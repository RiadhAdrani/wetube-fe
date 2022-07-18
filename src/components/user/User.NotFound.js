import { goTo } from "@riadh-adrani/recursive-web";
import { Spacer } from "@riadh-adrani/recursive-web/html";
import Icon from "../../icons/Icon";
import Icons from "../../icons/Icons";
import { Var } from "../../util/Style";
import OutlinedButton from "../button/Outlined.Button";
import Text from "../text/Text";
import TitleMain from "../text/Title.main";
import CenteredColumn from "../utils/CenteredColumn";

export default () => {
    return CenteredColumn({
        style: { inline: { alignSelf: "center", flex: 1 } },
        children: [
            Icon({ icon: Icons.Question, size: "60px", colors: [Var("invert5")] }),
            Spacer({ height: "10px" }),
            TitleMain({ text: "oops !" }),
            Text({
                text: "Unable to find a user with the given id.",
                color: Var("invert5"),
            }),
            Spacer({ height: "20px" }),
            OutlinedButton({ text: "Go Home", onClick: () => goTo("/") }),
        ],
    });
};
