import { Spacer } from "@riadh-adrani/recursive-web/html";
import Text from "../../components/text/Text";
import UserPicture from "../../components/user/User.Picture";
import LeftCenteredRow from "../../components/utils/LeftCenteredRow";
import AppManager from "../../state-managers/AppManager";
import { goToUser } from "../../util/Routing";
import { setUserCache } from "../../util/States";
import { Var } from "../../util/Style";

export default (id) => {
    const [user] = setUserCache(id);
    const app = AppManager();

    return LeftCenteredRow({
        style: {
            normal: {
                padding: "8px 8px 8px 25px",
                alignSelf: "stretch",
                cursor: "pointer",
            },
            hover: {
                backgroundColor: Var("main7"),
            },
        },
        onClick: () => {
            goToUser(id);
            app.drawer.toggle(false);
        },
        children: [
            UserPicture({ img: user.img, size: "20px" }),
            Spacer({ width: "10px" }),
            Text({ text: user.username || "" }),
        ],
    });
};
