import { Row, Spacer, Column } from "@riadh-adrani/recursive-web/html";
import UserManager from "../../state-managers/User.Manager";
import { subscribersText } from "../../util/Format";
import { Var } from "../../util/Style";
import Text from "../text/Text";
import TitleMain from "../text/Title.main";
import UserEditButton from "./User.EditButton";
import UserPicture from "./User.Picture";
import UserSubscribe from "./User.Subscribe";

export default () => {
    const manager = UserManager();

    return Row({
        style: {
            scoped: true,
            normal: {
                alignItems: "center",
                justifyContent: "space-between",
            },
        },
        children: [
            Row({
                children: [
                    UserPicture({
                        img: manager.loading ? null : manager.user.img,
                        size: "80px",
                    }),
                    Spacer({ width: Var("giant") }),
                    Column({
                        style: {
                            scoped: true,
                            normal: {
                                alignItems: "flex-start",
                                justifyContent: "center",
                            },
                        },
                        children: [
                            TitleMain({
                                text: manager.loading
                                    ? ""
                                    : [
                                          manager.user.username,
                                          Spacer({ width: "10px" }),
                                          UserEditButton(),
                                      ],
                            }),
                            Spacer({ height: "5px" }),
                            Text({
                                text: manager.loading
                                    ? ""
                                    : subscribersText(manager.subscribersCount()),
                                color: Var("invert5"),
                            }),
                        ],
                    }),
                ],
            }),
            UserSubscribe(),
        ],
    });
};
