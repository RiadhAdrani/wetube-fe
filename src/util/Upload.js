import { updateOn } from "@riadh-adrani/recursive-web";
import { upload as startUpload } from "../services/videos.service";
import AppManager from "../state-managers/AppManager";
import NotificationManager from "../state-managers/Notification.Manager";
import UploadManager from "../state-managers/Upload.Manager";

function browseFile(onSelected, type) {
    if (typeof onSelected != "function") return;

    const _input_element = document.createElement("input");

    _input_element.onchange = onSelected;
    _input_element.type = "file";
    _input_element.accept = type;

    _input_element.click();
}

function createLocalObject(file) {
    return URL.createObjectURL(file);
}

function browseAndUpload() {
    const upload = UploadManager();
    const app = AppManager();
    const notification = NotificationManager();

    browseFile((e) => {
        const file = e.target.files[0];
        const id = app.user.value.id;
        const title = `${app.user.value.username} - Video Title`;

        upload.toggleShow(true);

        startUpload(id, file, title)
            .then((res) =>
                updateOn(() => {
                    const data = res.data.data;
                    upload.setTitle(data.title);
                    upload.setDescription(data.description);
                    upload.setVisibility(data.visibility);
                    upload.setDone(true);
                    upload.setId(data.id);
                })
            )
            .catch((e) => {
                console.log(e);
                updateOn(() => {
                    notification.make("Something went wrong...");
                    upload.reset();
                });
            });
    }, "video");
}

export { browseFile, createLocalObject, browseAndUpload };
