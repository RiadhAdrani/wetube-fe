import Icons from "../../icons/Icons";
import { upload } from "../../services/videos.service";
import AppManager from "../../state-managers/AppManager";
import { checkUser } from "../../util/Check";
import { browseAndUpload, browseFile } from "../../util/Upload";
import TopBarClickableIcon from "./TopBar.ClickableIcon";

export default () => {
    return TopBarClickableIcon({
        state: "show-create-menu",
        icon: Icons.Create,
        title: "Create",
        menu: [
            {
                text: "Upload video",
                icon: Icons.UploadVideo,
                onClick: () => checkUser(() => browseAndUpload()),
            },
            {
                text: "Create post",
                icon: Icons.CreatePost,
                onClick: () => checkUser(() => {}),
            },
        ],
    });
};
