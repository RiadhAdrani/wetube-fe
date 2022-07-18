import { goTo, setState } from "@riadh-adrani/recursive-web";
import UserPicture from "../../components/user/User.Picture";
import Icons from "../../icons/Icons";
import AppManager from "../../state-managers/AppManager";
import { goToUser } from "../../util/Routing";
import TopBarClickableIcon from "./TopBar.ClickableIcon";
import TopBarDropDownMenu from "./TopBar.DropDownMenu";

export default () => {
    const app = AppManager();

    if (!app.user.is) {
        return TopBarClickableIcon({
            icon: Icons.User,
            state: "top-bar-show-user-options",
            title: "User",
            menu: [
                {
                    icon: Icons.User,
                    text: "Sign in",
                    onClick: (e, hide) => {
                        e.stopPropagation();
                        hide();
                        app.signin.toggle();
                    },
                },
                {
                    icon: Icons.AddUser,
                    text: "Sign up",
                    onClick: (e, hide) => {
                        e.stopPropagation();
                        hide();
                        app.signup.toggle();
                    },
                },
            ],
        });
    }

    const [show, setShow] = setState("top-bar-show-user-menu", false);

    const menu = [
        {
            icon: Icons.User,
            text: "Your profile",
            onClick: () => {
                goToUser(app.user.value.id);
            },
        },
        {
            icon: Icons.SignOut,
            text: "Sign out",
            onClick: () => {
                app.user.logout();
                setShow(false);
            },
        },
    ];

    return UserPicture({
        style: { inline: { cursor: "pointer" } },
        img: app.user.value.img,
        onClick: () => {
            setShow(true);
        },
        onClickGlobal: () => {
            setShow(false);
        },
        children: TopBarDropDownMenu({ show, menu }),
    });
};
