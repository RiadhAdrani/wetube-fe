import { setState } from "@riadh-adrani/recursive-web";
import { edit } from "../services/videos.service";
import NotificationManager from "./Notification.Manager";

export default () => {
    const notification = NotificationManager();

    const initial = {
        id: "",
        show: false,
        done: false,
        title: "",
        description: "",
        visibility: "Public",
    };

    const [upload, setUpload, liveUpload] = setState("upload", initial);

    const reset = () => setUpload({ initial });

    const setTitle = (value) => setUpload({ ...liveUpload(), title: value });

    const setDescription = (value) => setUpload({ ...liveUpload(), description: value });

    const setVisibility = (value) => setUpload({ ...liveUpload(), visibility: value });

    const toggleShow = (value) => setUpload({ ...liveUpload(), show: value });

    const setDone = (value) => setUpload({ ...liveUpload(), done: value });

    const setId = (value) => setUpload({ ...liveUpload(), id: value });

    const finalize = () => {
        edit(liveUpload().id, {
            title: upload.title || undefined,
            description: upload.description || undefined,
            visibility: upload.visibility || undefined,
        })
            .then(() => {
                notification.make("Applied changes successfully.");
            })
            .catch(() => {
                notification.make("Something went wrong");
            });

        reset();
    };

    return {
        upload,
        reset,
        setTitle,
        setDescription,
        setVisibility,
        toggleShow,
        finalize,
        setDone,
        setId,
    };
};
