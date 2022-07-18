import { Column, Fragment, Row, Spacer } from "@riadh-adrani/recursive-web/html";
import VideoCardUserPicture from "./Video.Card.UserPicture";
import VideoCardInfoTitle from "./Video.Card.Info.Title";
import VideoCardInfoUsername from "./Video.Card.Info.Username";
import VideoCardInfoInfos from "./Video.Card.Info.Infos";
import VideoCardInfoOptions from "./Video.Card.Info.Options";

export default (video, user, showUserInfo = true, mini = false, small = false) => {
    return Row({
        style: {
            className: "video-card-info",
            normal: {
                alignItems: "flex-start",
                padding: mini ? ["7.5px", "0px", "7.5px", "7.5px"] : "0px 5px",
                flex: mini ? 1 : "auto",
            },
        },
        children: [
            VideoCardUserPicture(user, showUserInfo),
            Column({
                style: {
                    scoped: true,
                    normal: {
                        paddingLeft: showUserInfo ? "15px" : "0px",
                        flex: "1",
                    },
                },
                children: [
                    VideoCardInfoTitle(video, small),
                    Spacer({ height: "5px" }),
                    Fragment({
                        flags: { renderIf: showUserInfo },
                        children: [VideoCardInfoUsername(user), Spacer({ height: "2px" })],
                    }),
                    VideoCardInfoInfos(video, small),
                ],
            }),
            Spacer({ width: "5px" }),
            VideoCardInfoOptions(video),
        ],
    });
};
