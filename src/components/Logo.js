import { H3, Spacer } from "@riadh-adrani/recursive-web/html";
import Icon from "../icons/Icon";
import Icons from "../icons/Icons";
import { Var } from "../util/Style";
import CenteredRow from "./utils/CenteredRow";

export default ({
    size = "40px",
    text = "WeTube",
    spacer = "5px",
    color1 = Var("logo"),
    color2 = Var("invert"),
    fontSize = Var("bSize3"),
    ...props
}) => {
    return CenteredRow({
        ...props,
        children: [
            Icon({ icon: Icons.Logo, size, colors: [color1, color2] }),
            Spacer({ width: spacer }),
            H3({ children: text, style: { inline: { fontSize } } }),
        ],
    });
};
