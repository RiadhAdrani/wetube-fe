import { Column, Row, Spacer } from "@riadh-adrani/recursive-web/html";
import TitleSub from "../components/text/Title.sub";
import UserManager from "../state-managers/User.Manager";
import UserVideoGridManager from "../state-managers/User.VideoGrid.Manager";
import VideoCardSmall from "../components/video-card/Video.Card.Small";

export default () => {
    const user = UserManager();
    const grid = UserVideoGridManager();

    return Column({
        children: [
            TitleSub({ text: "Videos" }),
            Spacer({ height: "20px" }),
            Column({
                onResizeGlobal: grid.onResied,
                children: grid.arrangeVideos(user.videos).map((row) => {
                    return Row({
                        style: {
                            scoped: true,
                            normal: {
                                alignItems: "flex-start",
                                alignSelf: "center",
                                width: "100%",
                            },
                        },
                        children: row.map((video) => VideoCardSmall(video, user.user)),
                    });
                }),
            }),
        ],
    });
};
