import { P } from "@riadh-adrani/recursive-web/html";
import { Var } from "../../util/Style";

export default ({ text, align = "center", size = Var("bSize3"), color = Var("invert") }) => {
    return P({
        children: text,
        style: {
            scoped: true,
            normal: {
                color,
                fontSize: size,
                margin: "0px",
                letterSpacing: "0.5px",
                lineHeight: Var("bSize3"),
                textAlign: align,
            },
        },
    });
};
