import { P } from "@riadh-adrani/recursive-web/html";

export default (video, small) => {
    return P({
        children: video.title,
        title: video.title,
        style: {
            scoped: true,
            normal: {
                fontSize: small ? "1.2em" : "1.4em",
                lineHeight: "1.3em",
                fontWeight: small ? 400 : 600,
                maxHeight: "37px",
                margin: "0px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "normal",
                webkitLineClamp: 2,
                display: "inline-flex",
                width: "fit-content",
            },
        },
    });
};
