import { goTo } from "@riadh-adrani/recursive-web";
import { Spacer } from "@riadh-adrani/recursive-web/html";
import Logo from "../../components/Logo";
import LeftCenteredRow from "../../components/utils/LeftCenteredRow";
import Icon from "../../icons/Icon";
import Icons from "../../icons/Icons";
import AppManager from "../../state-managers/AppManager";

export default () => {
    const app = AppManager();

    return LeftCenteredRow({
        style: { inline: { flex: 1 } },
        children: [
            Icon({
                icon: Icons.Menu,
                onClick: () => {
                    app.drawer.toggle();
                },
                style: { inline: { cursor: "pointer" } },
            }),
            Spacer({ width: "15px" }),
            Logo({
                onClick: () => {
                    goTo("/");
                    app.drawer.toggle(false);
                },
                style: { inline: { cursor: "pointer" } },
            }),
        ],
    });
};
