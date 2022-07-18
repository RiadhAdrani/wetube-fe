import { Spacer } from "@riadh-adrani/recursive-web/html";
import Icon from "../../icons/Icon";
import Icons from "../../icons/Icons";
import { Var } from "../../util/Style";
import TitleMain from "../text/Title.main";
import TitleSub from "../text/Title.sub";
import CenteredColumn from "../utils/CenteredColumn";

export default () => {
    return CenteredColumn({
        style: {
            inline: {
                alignSelf: "center",
                padding: Var("large"),
                marginTop: "auto",
                marginBottom: "auto",
            },
        },
        children: [
            Icon({ icon: Icons.Question, size: "45px" }),
            Spacer({ height: "10px" }),
            TitleMain({ text: "Nothing to show...", color: Var("invert3") }),
            Spacer({ height: "5px" }),
            TitleSub({ text: "Try some key words...", color: Var("invert3") }),
        ],
    });
};
