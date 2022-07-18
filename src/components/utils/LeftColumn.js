import { Column } from "@riadh-adrani/recursive-web/html";

export default ({ style, ...props }) =>
    Column({
        ...props,
        style: {
            ...style,
            scoped: true,
            normal: {
                ...(style && style.normal ? style.normal : {}),
                alignItems: "flex-start",
            },
        },
    });
