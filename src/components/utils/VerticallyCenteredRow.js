import { Row } from "@riadh-adrani/recursive-web/html";

export default ({ children, style }) =>
    Row({
        children,
        style: {
            ...style,
            scoped: true,
            normal: {
                ...(style && style.normal ? style.normal : {}),
                alignItems: "center",
            },
        },
    });
