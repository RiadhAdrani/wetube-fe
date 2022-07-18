import { Spacer } from "@riadh-adrani/recursive-web/html";
import RightCenteredRow from "../../components/utils/RightCenteredRow";
import TopBarRightNotification from "./TopBar.Right.Notification";
import TopBarRightUpload from "./TopBar.Right.Upload";
import TopBarUser from "./TopBar.User";

export default () => {
    return RightCenteredRow({
        style: { inline: { flex: 1 } },
        children: [
            TopBarRightUpload(),
            Spacer({ width: "10px" }),
            TopBarRightNotification(),
            Spacer({ width: "10px" }),
            TopBarUser(),
        ],
    });
};
