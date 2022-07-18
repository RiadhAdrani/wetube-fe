import { attr, getVar } from "@riadh-adrani/recursive-web/style/methods";

function Var(key) {
    return `var(--${key})`;
}

function Url(url) {
    return `url(${url})`;
}

function customTitle() {
    return {
        ["[title]:hover::after"]: {
            content: attr("title"),
            backgroundColor: getVar("main3"),
            width: "max-content",
            position: "absolute",
            padding: ["5px", "10px"],
            top: " -100%",
            left: "0",
            borderRadius: getVar("tiny"),
            fontSize: getVar("bSize2"),
        },
    };
}

const mediaQueries = ({ medium = {}, small = {}, smaller = {}, tiny = {} }) => {
    return [
        { condition: "(max-width:1100px)", ...medium },
        { condition: "(max-width:850px)", ...small },
        { condition: "(max-width:600px)", ...smaller },
        { condition: "(max-width:400px)", ...tiny },
    ];
};

export { Var, Url, customTitle, mediaQueries };
