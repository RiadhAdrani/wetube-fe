import { Link } from "@riadh-adrani/recursive-web";
import { Var } from "../../util/Style";

export default (tag) => {
    return Link({
        children: tag,
        style: {
            className: "tag-badge",
            normal: {
                fontSize: Var("bSize3"),
                backgroundColor: Var("main7"),
                padding: `${Var("medium")} ${Var("giant")}`,
                margin: `0px ${Var("small")}`,
                border: `1px solid ${Var("invert7")}`,
                borderRadius: Var("giant"),
                cursor: "pointer",
            },
            hover: {
                backgroundColor: Var("invert9"),
            },
        },
    });
};
