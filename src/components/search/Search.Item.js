import { Row, Spacer, Column } from "@riadh-adrani/recursive-web/html";
import { goToUser } from "../../util/Routing";
import { Var } from "../../util/Style";
import Text from "../text/Text";
import TitleMain from "../text/Title.main";
import UserPicture from "../user/User.Picture";

export default (user) => {
    return Row({
        onClick: () => goToUser(user.id),
        style: {
            scoped: true,
            normal: {
                alignSelf: "stretch",
                backgroundColor: Var("main2"),
                padding: `${Var("largest")} ${Var("giant")}`,
                cursor: "pointer",
                marginBottom: Var("medium"),
            },
            hover: {
                backgroundColor: Var("main4"),
            },
        },
        children: [
            UserPicture({ img: user.img, size: "70px" }),
            Spacer({ width: Var("giant") }),
            Column({
                style: { inline: { alignItems: "flex-start", justifyContent: "center" } },
                children: [
                    TitleMain({ text: user.username, color: Var("invert3") }),
                    Spacer({ height: "2.5px" }),
                    Text({ text: user.description, size: Var("bSize3"), color: Var("invert3") }),
                ],
            }),
        ],
    });
};
