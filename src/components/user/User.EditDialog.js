import { setState } from "@riadh-adrani/recursive-web";
import { Column, Img, Spacer } from "@riadh-adrani/recursive-web/html";
import { getVar } from "@riadh-adrani/recursive-web/style/methods";
import { update } from "../../services/user.service";
import AppManager from "../../state-managers/AppManager";
import NotificationManager from "../../state-managers/Notification.Manager";
import UserManager from "../../state-managers/User.Manager";
import { browseFile, createLocalObject } from "../../util/Upload";
import FormButton from "../button/Form.Button";
import SimpleTextArea from "../form/SimpleTextArea";
import TitleMain from "../text/Title.main";
import Center from "../utils/Center";
import ThinLine from "../utils/ThinLine";

export default () => {
    const app = AppManager();
    const userManager = UserManager();

    if (!app.user.is || !userManager.show) return;

    const user = userManager.user;

    const [img, setImg] = setState("user-edit-dialog-img", { src: null, file: null });
    const [about, setAbout] = setState("user-edit-dialog-about", user.description);

    return Column({
        style: {
            scoped: true,
            normal: {
                position: "fixed",
                padding: ["10px", "20px"],
                inset: 0,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#00000099",
                zIndex: 10,
            },
        },
        children: [
            Column({
                style: {
                    scoped: true,
                    normal: {
                        alignItems: "stretch",
                        backgroundColor: getVar("main1"),
                        padding: ["30px", "15px"],
                        width: "300px",
                        borderRadius: getVar("tiny"),
                    },
                },
                children: [
                    Center(TitleMain({ text: "Edit profile" })),
                    Spacer({ height: "20px" }),
                    Center(
                        Img({
                            src: img.src || user.img,
                            height: 50,
                            width: 50,
                            style: { inline: { cursor: "pointer", borderRadius: "50%" } },
                            onClick: () => {
                                browseFile((e) => {
                                    const file = e.target.files[0];
                                    const src = createLocalObject(file);

                                    setImg({ file, src });
                                }, "image/png, image/jpeg");
                            },
                        })
                    ),
                    Spacer({ height: "10px" }),
                    ThinLine(),
                    SimpleTextArea({
                        value: about,
                        onChange: (e) => {
                            setAbout(e.target.value);
                        },
                        placeholder: "Tell us about yourself in a few words.",
                    }),
                    Spacer({ height: "10px" }),
                    FormButton({
                        text: "Save",
                        onClick: () => {
                            userManager.updateUser({ about, file: img.file });
                        },
                    }),
                    Spacer({ height: "10px" }),
                    FormButton({ text: "Close", onClick: userManager.toggleShowEdit }),
                ],
            }),
        ],
    });
};
