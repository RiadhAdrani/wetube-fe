import { Column, Row, Spacer, Hr } from "@riadh-adrani/recursive-web/html";
import WatchComments from "../components/watch/Watch.Comments";
import WatchDescription from "../components/watch/Watch.Description";
import WatchNotFound from "../components/watch/Watch.NotFound";
import WatchOptions from "../components/watch/Watch.Options";
import WatchPlayer from "../components/watch/Watch.Player";
import WatchRecommendedVideos from "../components/watch/Watch.RecommendedVideos";
import WatchVideoTitle from "../components/watch/Watch.Title";
import WatchUploader from "../components/watch/Watch.Uploader";
import WatchManager from "../state-managers/Watch.Manager";

export default () => {
    const watch = WatchManager();

    if (watch.failed) {
        return WatchNotFound();
    }

    return Row({
        style: { scoped: true, normal: { margin: "20px 100px" } },
        children: [
            Column({
                style: { inline: { flex: 1 } },
                children: [
                    WatchPlayer(),
                    Spacer({ height: "20px" }),
                    Column({
                        children: [
                            WatchVideoTitle(),
                            Spacer({ height: "10px" }),
                            WatchOptions(),
                            Spacer({ height: "15px" }),
                            WatchUploader(),
                            Spacer({ height: "20px" }),
                            WatchDescription(),
                        ],
                    }),
                    Spacer({ height: "20px" }),
                    WatchComments(),
                ],
            }),
            Spacer({ width: "15px" }),
            WatchRecommendedVideos(),
        ],
    });
};
