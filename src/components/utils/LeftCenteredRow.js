import { Row } from "@riadh-adrani/recursive-web/html";

export default ({ style, ...props }) =>
    Row({
        ...props,
        style: {
            ...style,
            scoped: true,
            normal: {
                ...(style && style.normal ? style.normal : {}),
                justifyContent: "flex-start",
                alignItems: "center",
            },
        },
    });
