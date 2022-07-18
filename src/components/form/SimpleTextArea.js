import { Input, TextArea } from "@riadh-adrani/recursive-web/html";
import { getVar } from "@riadh-adrani/recursive-web/style/methods";

export default ({
    value = "",
    onChange = () => {},
    placeholder = "Enter a new text",
    disabled = false,
    maxHeight = "150px",
}) => {
    return TextArea({
        value,
        onChange,
        disabled,
        placeholder,
        children: value,
        style: {
            className: "simple-text-area",
            normal: {
                resize: "vertical",
                height: "75px",
                maxHeight,
                backgroundColor: "transparent",
                border: ["transparent", "1px", "solid"],
                padding: ["10px", "0"],
                color: "inherit",
                fontSize: "medium",
            },
            focus: {
                outline: "none",
                borderBottomColor: getVar("invert3"),
            },
        },
    });
};
