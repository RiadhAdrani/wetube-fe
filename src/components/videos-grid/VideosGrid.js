import { Column, Row } from "@riadh-adrani/recursive-web/html";
import HomeVideoGridManager from "../../state-managers/VideoGrid.Manager";
import VideoCard from "../video-card/Video.Card";

export default (videos = []) => {
    const grid = HomeVideoGridManager();

    return Column({
        style: {
            className: "video-grid-home",
            normal: { alignItems: "center" },
        },
        onResizeGlobal: grid.onResied,
        children: grid.arrangeVideos(videos).map((row) => {
            return Row({
                style: {
                    className: "video-grid-home-row",
                    normal: {
                        alignItems: "flex-start",
                        width: "100%",
                    },
                },
                children: row.map((video) => VideoCard(video, video.user, false)),
            });
        }),
    });
};
