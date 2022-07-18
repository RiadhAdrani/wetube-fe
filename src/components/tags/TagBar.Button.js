import Icon from "../../icons/Icon";
import { Var } from "../../util/Style";
import CenteredRow from "../utils/CenteredRow";

export default (icon, show = true, onClick) => {
    return CenteredRow({
        flags: { renderIf: show },
        onClick,
        style: {
            normal: {
                height: "30px",
                width: "30px",
                margin: "0px 5px",
                borderRadius: "50%",
                cursor: "pointer",
                boxSizing: "border-box",
                alignSelf: "center",
            },
            hover: {
                backgroundColor: Var("main9"),
            },
        },
        children: [Icon({ icon, size: "15px" })],
    });
};
