import { getParams, getRoute, Link } from "@riadh-adrani/recursive-web";
import { Button, Row } from "@riadh-adrani/recursive-web/html";
import { userRoute } from "../../util/Routing";
import { Var } from "../../util/Style";

export default () => {
    const buildRoute = (path) => userRoute(getParams().id) + path;

    const navigation = [
        { path: buildRoute(""), name: "Home" },
        { path: buildRoute("/about"), name: "About" },
    ];

    return Row({
        children: navigation.map((item) => {
            const selected = item.path == getRoute();

            return Link({
                children: item.name,
                href: item.path,
                style: {
                    scoped: true,
                    normal: {
                        padding: "10px",
                        fontSize: Var("bSize1"),
                        fontWeight: 600,
                        letterSpacing: "1px",
                        width: "100px",
                        marginRight: Var("small"),
                        textTransform: "uppercase",
                        textAlign: "center",
                        color: Var("invert5"),
                        borderBottom: "2px solid transparent",
                        borderBottomColor: selected ? Var("white") : "transparent",
                    },
                },
            });
        }),
    });
};
