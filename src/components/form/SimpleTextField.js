import { Input } from "@riadh-adrani/recursive-web/html";
import { getVar } from "@riadh-adrani/recursive-web/style/methods";

export default ({
    value = "",
    onChange = () => {},
    onInput = () => {},
    placeholder = "Enter a new text",
    disabled = false,
    normalStyle = {},
}) => {
    return Input({
        value,
        onChange,
        onInput,
        onKeyDown: (e) => {
            e.stopPropagation();
        },
        disabled,
        placeholder,
        style: {
            scoped: true,
            className: "simple-text-field",
            normal: {
                backgroundColor: "transparent",
                border: ["transparent", "1px", "solid"],
                padding: ["10px", "0"],
                color: "inherit",
                fontSize: "medium",
                ...normalStyle,
            },
            focus: {
                outline: "none",
                borderBottomColor: getVar("invert3"),
            },
        },
    });
};
