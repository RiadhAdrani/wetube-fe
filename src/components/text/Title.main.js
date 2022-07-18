import { H1 } from "@riadh-adrani/recursive-web/html";

export default ({ text, color, ...props }) => {
    return H1({
        ...props,
        children: text,
        style: { scoped: true, normal: { margin: "0px", color } },
    });
};
