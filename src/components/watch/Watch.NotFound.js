import { Column, Spacer } from "@riadh-adrani/recursive-web/html";
import { getVar } from "@riadh-adrani/recursive-web/style/methods";
import Icon from "../../icons/Icon";
import Icons from "../../icons/Icons";
import TitleMain from "../text/Title.main";
import TitleSub from "../text/Title.sub";
import Center from "../utils/Center";
import ThinLine from "../utils/ThinLine";

export default () => {
    return Center(
        Column({
            style: { inline: { padding: getVar("giant9"), textAlign: "center" } },
            children: [
                Icon({
                    icon: Icons.Question,
                    size: "50px",
                    style: { scoped: true, normal: { alignSelf: "center" } },
                }),
                Spacer({ height: "10px" }),
                TitleMain({ text: "Video not Found" }),
                Spacer({ height: "5px" }),
                ThinLine(),
                Spacer({ height: "5px" }),
                TitleSub({ text: "Video maybe deleted or private.", color: getVar("invert5") }),
            ],
        })
    );
};
