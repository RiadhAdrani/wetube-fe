import { Column, Input, Spacer, Span } from "@riadh-adrani/recursive-web/html";
import { Var } from "../../util/Style";

export default ({
    value,
    onChange = () => {},
    type = "text",
    placeholder = "",
    name,
    disabled = false,
}) => {
    return Column({
        style: {
            className: "form-input",
            normal: {
                backgroundColor: "transparent",
                borderStyle: "solid",
                borderColor: Var("invert9"),
                borderWidth: "1px",
                borderRadius: Var("tiny"),
                padding: `${Var("medium")} ${Var("large")}`,
                color: Var(disabled ? "invert7" : "invert2"),
                fontSize: Var("bSize"),
                width: "100%",
                marginBottom: Var("medium"),
            },
            focusWithin: {
                borderColor: Var("logo"),
                color: Var("logo"),
                outline: "none",
            },
        },
        children: [
            Span({ children: name }),
            Spacer({ height: "5px" }),
            Input({
                disabled,
                value,
                onChange,
                placeholder,
                type,
                style: {
                    className: "form-input-field",
                    normal: {
                        padding: `${Var("medium")} 0px`,
                        backgroundColor: "transparent",
                        color: Var(disabled ? "invert6" : "invert"),
                        fontSize: Var("bSize3"),
                        border: "none",
                    },
                    focus: {
                        outline: "none",
                    },
                },
            }),
        ],
    });
};
