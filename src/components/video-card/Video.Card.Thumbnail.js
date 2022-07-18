import { Column, Span } from "@riadh-adrani/recursive-web/html";
import { Url, Var } from "../../util/Style";
import { formatTime } from "../../util/Video";

export default (video, mini) => {
    return Column({
        style: {
            scoped: true,
            normal: {
                minHeight: mini ? "85px" : "170px",
                width: mini ? "150px" : "300px",
                minWidth: mini ? "150px" : "300px",
                backgroundColor: Var("main1"),
                backgroundSize: "cover",
                backgroundImage: Url(video.thumbnail),
            },
        },
        children: [
            Span({
                children: formatTime(video.length),
                style: {
                    inline: {
                        fontSize: Var("bSize2"),
                        marginTop: "auto",
                        marginLeft: "auto",
                        marginBottom: Var("medium"),
                        marginRight: Var("medium"),
                        padding: Var("smallest"),
                        backgroundColor: "#000000dd",
                        borderRadius: Var("tiny"),
                    },
                },
            }),
        ],
    });
};
