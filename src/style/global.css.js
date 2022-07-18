import { setStyle } from "@riadh-adrani/recursive-web";
import { Var } from "../util/Style";
import varCss from "./vars.css";
import fontCss from "./font.css";

export default () => {
    varCss();
    fontCss();

    setStyle({
        selectors: {
            "*": { fontFamily: "'Roboto', sans-serif", fontKerning: "normal" },
            a: { textDecoration: "none", color: "inherit" },
            body: {
                background: Var("main"),
                color: Var("invert"),
                margin: "0px",
                fontSize: "10px",
                fontWeight: 500,
                overflowY: "scroll",
            },
            "::-webkit-scrollbar": {
                width: Var("medium"),
            },
            "::-webkit-scrollbar-track": {
                background: "transparent",
            },
            "::-webkit-scrollbar-thumb": {
                background: Var("invert9"),
                borderRadius: Var("medium"),
            },
            "::-webkit-scrollbar-thumb:hover": {
                background: Var("main9"),
            },
            "::-webkit-scrollbar-thumb:active": {
                background: Var("main7"),
            },
        },
    });
};
