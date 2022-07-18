import { Column, Spacer } from "@riadh-adrani/recursive-web/html";
import { corners, getVar } from "@riadh-adrani/recursive-web/style/methods";
import FormButton from "../../components/button/Form.Button";
import SimpleSelect from "../../components/form/SimpleSelect";
import SimpleTextArea from "../../components/form/SimpleTextArea";
import SimpleTextField from "../../components/form/SimpleTextField";
import TitleSub from "../../components/text/Title.sub";
import UploadManager from "../../state-managers/Upload.Manager";

export default () => {
    const upload = UploadManager();

    return Column({
        style: {
            scoped: true,
            normal: {
                padding: ["10px 20px"],
                borderRadius: corners({ bottom: getVar("smallest"), top: "0px" }),
            },
        },
        children: [
            TitleSub({ text: "Title", color: getVar("invert5") }),
            SimpleTextField({
                value: upload.upload.title,
                placeholder: "Enter a suitable title",
                onChange: (e) => upload.setTitle(e.target.value),
            }),
            Spacer({ height: "10px" }),
            TitleSub({ text: "Description", color: getVar("invert5") }),
            SimpleTextArea({
                value: upload.upload.description,
                placeholder: "Enter the video description.",
                onChange: (e) => upload.setDescription(e.target.value),
            }),
            Spacer({ height: "10px" }),
            TitleSub({ text: ["Id : ", upload.upload.id], color: getVar("invert6") }),
            Spacer({ height: "10px" }),
            SimpleSelect({
                options: ["Public", "Private"],
                selected: upload.upload.visibility,
                onSelected: (value) => upload.setVisibility(value),
            }),
            Spacer({ height: "10px" }),
            FormButton({
                text: "Done",
                onClick: () => upload.finalize(),
            }),
        ],
    });
};
