import { Link } from "@riadh-adrani/recursive-web";
import { userRoute } from "../../util/Routing";
import { Var } from "../../util/Style";

export default (user) => {
    return Link({
        children: user.username,
        href: userRoute(user.id),
        title: user.username,
        onClick: (e) => {
            e.stopPropagation();
            onclickglobal.notify();
        },
        style: {
            scoped: true,
            normal: {
                fontSize: "1.25em",
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
            hover: {
                color: Var("invert1"),
            },
        },
    });
};
