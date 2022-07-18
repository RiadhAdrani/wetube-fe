import { Div } from "@riadh-adrani/recursive-web/html";

export default ({ children, padding = "0px" }) => {
    return Div({ children, style: { inline: { padding } } });
};
