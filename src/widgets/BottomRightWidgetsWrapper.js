import { Column } from "@riadh-adrani/recursive-web/html";
import { edges } from "@riadh-adrani/recursive-web/style/methods";
import Notification from "./notification/Notification";
import UploadProgress from "./uploader/UploadProgress";

export default () => {
    return Column({
        style: {
            scoped: true,
            normal: {
                position: "fixed",
                bottom: "0px",
                right: "0px",
                width: "300px",
                margin: edges({
                    top: "0px",
                    bottom: "20px",
                    right: "20px",
                    left: "0px",
                }),
            },
        },
        children: [Notification(), UploadProgress()],
    });
};
