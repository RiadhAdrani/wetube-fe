import { Column, Spacer } from "@riadh-adrani/recursive-web/html";
import Icon from "../../icons/Icon";
import Icons from "../../icons/Icons";
import TitleSub from "../text/Title.sub";
import CenteredColumn from "../utils/CenteredColumn";

export default () => {
    return CenteredColumn({
        style: { inline: { alignSelf: "center", marginTop: "auto", marginBottom: "auto" } },
        children: [
            Icon({ icon: Icons.Question, size: "45px" }),
            Spacer({ height: "10px" }),
            TitleSub({ text: "No result for this query" }),
        ],
    });
};
