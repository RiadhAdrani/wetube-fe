import VerticallyCenteredRow from "../../components/utils/VerticallyCenteredRow";
import { Var } from "../../util/Style";
import TopBarLeft from "./TopBar.Left";
import TopBarRight from "./TopBar.Right";
import TopBarSearch from "./TopBar.Search";

export default () => {
    return VerticallyCenteredRow({
        style: {
            normal: {
                height: "60px",
                background: Var("main2"),
                justifyContent: "space-between",
                padding: ["0px", "25px"],
                position: "fixed",
                width: "100%",
                top: "0px",
                boxSizing: "border-box",
                zIndex: 10,
            },
        },
        children: [TopBarLeft(), TopBarSearch(), TopBarRight()],
    });
};
