import { Option, Select } from "@riadh-adrani/recursive-web/html";
import { getVar } from "@riadh-adrani/recursive-web/style/methods";

export default ({
    options = [],
    onSelected = () => {},
    title = "Select item",
    selected = "Item",
}) => {
    return Select({
        title,
        style: {
            className: "simple-select",
            normal: {
                padding: ["5px", "10px"],
                backgroundColor: getVar("main3"),
                color: getVar("invert"),
                border: ["1px", "solid", getVar("invert9")],
            },
        },
        children: options.map((item) =>
            Option({
                selected: item == selected,
                children: item,
                style: { className: "simple-select-item", normal: { padding: ["5px", "10px"] } },
            })
        ),
        onChange: (e) => onSelected(e.target.value),
    });
};
