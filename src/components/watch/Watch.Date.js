import { H5 } from "@riadh-adrani/recursive-web/html";
import { getVar } from "@riadh-adrani/recursive-web/style/methods";
import WatchManager from "../../state-managers/Watch.Manager";
import { Var } from "../../util/Style";

export default () => {
    const manager = WatchManager();

    return H5({
        children: new Date(parseInt(manager.created)).toLocaleDateString(),
        style: {
            inline: {
                fontSize: Var("bSize3"),
                letterSpacing: "0.75px",
                margin: "0px",
                fontWeight: 500,
                color: manager.isLoading ? "transparent" : Var("invert6"),
                backgroundColor: manager.isLoading ? getVar("main2") : "transparent",
                borderRadius: getVar("smallest"),
            },
        },
    });
};
