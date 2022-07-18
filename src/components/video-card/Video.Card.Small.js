import { Link } from "@riadh-adrani/recursive-web";
import { Spacer } from "@riadh-adrani/recursive-web/html";
import { watchRoute } from "../../util/Routing";
import { Var } from "../../util/Style";
import VideoCardInfo from "./Video.Card.Info";
import VideoCardThumbnail from "./Video.Card.Thumbnail";

export default (data, user) => {
    return Link({
        href: watchRoute(data.id),
        style: {
            scoped: true,
            normal: {
                width: "150px",
                height: "175px",
                margin: "5px",
                display: "flex",
                flexDirection: "column",
            },
            active: {
                backgroundColor: Var("main2"),
            },
        },
        children: [
            VideoCardThumbnail(data, true),
            Spacer({ height: "5px" }),
            VideoCardInfo(data, user, false, false, true),
        ],
    });
};
