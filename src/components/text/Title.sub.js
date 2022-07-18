import { H3 } from "@riadh-adrani/recursive-web/html";

export default ({ text, color, size = "medium", ...props }) => {
    return H3({
        ...props,
        children: text,
        style: { scoped: true, normal: { margin: "0px", color, fontSize: size } },
    });
};
