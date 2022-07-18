import { Spacer, Summary } from "@riadh-adrani/recursive-web/html";
import { corners, getVar } from "@riadh-adrani/recursive-web/style/methods";
import TitleSub from "../../components/text/Title.sub";
import Icon from "../../icons/Icon";
import Icons from "../../icons/Icons";

export default () => {
    return Summary({
        style: {
            scoped: true,
            normal: {
                padding: ["10px", "20px"],
                backgroundColor: getVar("main7"),
                justifyContent: "flex-start",
                alignItems: "center",
                display: "flex",
                flexDirection: "row",
                cursor: "pointer",
                borderRadius: corners({ top: getVar("smallest"), bottom: "0px" }),
            },
            hover: {
                backgroundColor: getVar("main9"),
            },
        },
        children: [
            Icon({ icon: Icons.UploadVideo }),
            Spacer({ width: "10px" }),
            TitleSub({ text: "Uploading video...", size: "1.5em" }),
        ],
    });
};
