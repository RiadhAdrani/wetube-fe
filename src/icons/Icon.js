import { Path, Svg } from "@riadh-adrani/recursive-web/svg";

export default ({ icon, size = "25px", colors = ["white"], style, ...props }) => {
    return Svg({
        ...props,
        viewBox: icon.viewBox,
        height: size,
        width: size,
        style,
        children: icon.path.map((path, index) => {
            return Path({
                fill: colors[index] || colors[0],
                d: path,
            });
        }),
    });
};
