import { Spacer } from "@riadh-adrani/recursive-web/html";
import CircularSpinner from "../../components/spinners/CircularSpinner";
import TitleSub from "../../components/text/Title.sub";
import CenteredColumn from "../../components/utils/CenteredColumn";

export default () => {
    return CenteredColumn({
        style: {
            normal: {
                padding: ["20px"],
            },
        },
        children: [
            CircularSpinner({}),
            Spacer({ height: "20px" }),
            TitleSub({ text: "Uploading your video..." }),
        ],
    });
};
