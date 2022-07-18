import { Link } from "@riadh-adrani/recursive-web";
import { Spacer } from "@riadh-adrani/recursive-web/html";
import { watchRoute } from "../../util/Routing";
import { Var } from "../../util/Style";
import VideoCardInfo from "./Video.Card.Info";
import VideoCardThumbnail from "./Video.Card.Thumbnail";

export default (data, user, mini = false) => {
    return Link({
        href: watchRoute(data.id),
        style: {
            scoped: true,
            normal: {
                width: mini ? "350px" : "300px",
                height: mini ? "auto" : "275px",
                margin: mini ? ["10px", "5px"] : "10px",
                display: "flex",
                flexDirection: mini ? "row" : "column",
            },
            active: {
                backgroundColor: Var("main2"),
            },
        },
        children: [
            VideoCardThumbnail(data, mini),
            Spacer({ height: mini ? "5px" : "10px" }),
            VideoCardInfo(data, user, !mini, mini),
        ],
    });
};
