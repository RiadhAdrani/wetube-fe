import { Column, Details } from "@riadh-adrani/recursive-web/html";
import { getVar } from "@riadh-adrani/recursive-web/style/methods";
import UploadManager from "../../state-managers/Upload.Manager";
import UploadProgressEdit from "./UploadProgress.Edit";
import UploadProgressLoading from "./UploadProgress.Loading";
import UploadProgressTitle from "./UploadProgress.Title";

export default () => {
    const upload = UploadManager();

    if (!upload.upload.show) return;

    return Column({
        style: {
            scoped: true,
            normal: {
                backgroundColor: getVar("main2"),
            },
        },
        children: [
            Details({
                open: true,
                children: [
                    UploadProgressTitle(),
                    upload.upload.done ? UploadProgressEdit() : UploadProgressLoading(),
                ],
            }),
        ],
    });
};
