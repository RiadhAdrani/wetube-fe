import { Div } from "@riadh-adrani/recursive-web/html";
import { Var } from "../../util/Style";

export default ({
    size = "20px",
    thickness = "5px",
    borderColor = Var("main2"),
    color = Var("logo"),
}) => {
    return Div({
        style: {
            scoped: true,
            normal: {
                border: `${thickness} solid ${borderColor}`,
                borderTopColor: color,
                height: size,
                width: size,
                borderRadius: "50%",
                animation: "circular-spinner-animation 1s linear infinite",
            },
            animations: [
                {
                    name: "circular-spinner-animation",
                    steps: {
                        from: { transform: "rotate(0deg)" },
                        to: { transform: "rotate(360deg)" },
                    },
                },
            ],
        },
    });
};
