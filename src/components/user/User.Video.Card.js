import { Link } from "@riadh-adrani/recursive-web";
import { Row, Spacer } from "@riadh-adrani/recursive-web/html";
import { getVar } from "@riadh-adrani/recursive-web/style/methods";
import { watchRoute } from "../../util/Routing";
import VideoCardInfo from "../video-card/Video.Card.Info";
import VideoCardThumbnail from "../video-card/Video.Card.Thumbnail";

export default (data, user) => {
    return Link({
        href: watchRoute(data.id),
        style: {
            scoped: true,
            normal: {
                width: "300px",
                height: "275px",
                marginRight: "10px",
            },
            active: {
                backgroundColor: getVar("main2"),
            },
        },
        children: [
            VideoCardThumbnail(data),
            Spacer({ height: "10px" }),
            VideoCardInfo(data, user, false),
        ],
    });
};
