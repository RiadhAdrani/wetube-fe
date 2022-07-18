import { Column, Row } from "@riadh-adrani/recursive-web/html";
import TagsBar from "../components/tags/TagsBar";
import VideosGrid from "../components/videos-grid/VideosGrid";
import AppManager from "../state-managers/AppManager";

export default () => {
    const app = AppManager();

    return Column({
        style: { scoped: true, normal: { width: "100%", marginBottom: "50px" } },
        children: [
            TagsBar(),
            Row({
                style: {
                    scoped: true,
                    normal: { width: "100%", justifyContent: "center", marginTop: "60px" },
                },
                children: VideosGrid(app.feed),
            }),
        ],
    });
};
