import { Row } from "@riadh-adrani/recursive-web/html";

export default ({ children, style, ...props }) =>
    Row({
        ...props,
        children,
        style: {
            ...style,
            scoped: true,
            normal: {
                ...(style && style.normal ? style.normal : {}),
                justifyContent: "center",
                alignItems: "center",
            },
        },
    });
