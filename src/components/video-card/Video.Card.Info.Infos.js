import { Span } from "@riadh-adrani/recursive-web/html";
import { Var } from "../../util/Style";
import { timeAgoText, viewsText } from "../../util/Video";

export default (video, small) => {
    return Span({
        children: [viewsText(video.views), " • ", timeAgoText(video.created) + " ago"],
        style: {
            scoped: true,
            normal: {
                fontSize: small ? "1.1em" : "1.25em",
                lineHeight: "1.3em",
                fontWeight: 500,
                maxHeight: "4rem",
                margin: "0px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "normal",
                webkitLineClamp: 1,
                display: "inline-block",
                textDecoration: "none",
                color: Var("invert5"),
            },
        },
    });
};
