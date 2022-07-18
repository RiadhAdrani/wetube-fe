import { Column, Hr, Row, Spacer } from "@riadh-adrani/recursive-web/html";
import Text from "../components/text/Text";
import TitleSub from "../components/text/Title.sub";
import Padding from "../components/utils/Padding";
import UserManager from "../state-managers/User.Manager";
import { subscribersText } from "../util/Format";
import { Var } from "../util/Style";
import { timeAgoText } from "../util/Video";

export default () => {
    const manager = UserManager();

    return Row({
        children: [
            Column({
                style: { inline: { flex: 1 } },
                children: [
                    TitleSub({ text: "Description", size: Var("bSize5"), color: Var("invert5") }),
                    Spacer({ height: Var("large") }),
                    Text({ text: manager.user.description, align: "left" }),
                    Spacer({ height: Var("medium") }),
                ],
            }),
            Column({
                style: {
                    inline: {
                        width: "200px",
                        paddingLeft: "20px",
                        minHeight: "300px",
                        //borderLeft: `1px solid ${Var("invert9")}`,
                    },
                },
                children: [
                    TitleSub({ text: "States", size: Var("bSize5"), color: Var("invert5") }),
                    Hr({ size: "1px", width: "100%" }),
                    Padding({
                        padding: "5px 0px",
                        children: Text({
                            align: "left",
                            text: subscribersText(manager.subscribersCount()),
                        }),
                    }),
                    Hr({ size: "1px", width: "100%" }),
                    Padding({
                        padding: "5px 0px",
                        children: Text({
                            align: "left",
                            text: "Joined " + timeAgoText(manager.user.joined),
                        }),
                    }),
                ],
            }),
        ],
    });
};
