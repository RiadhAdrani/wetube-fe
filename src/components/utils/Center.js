import { Div } from "@riadh-adrani/recursive-web/html";

export default (children) => {
    return Div({
        children,
        style: {
            scoped: true,
            normal: { alignSelf: "center", justifySelf: "center" },
        },
    });
};
