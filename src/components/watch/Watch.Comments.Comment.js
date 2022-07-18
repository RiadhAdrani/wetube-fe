import { Column, Img, Row, Spacer } from "@riadh-adrani/recursive-web/html";
import { getVar } from "@riadh-adrani/recursive-web/style/methods";
import Text from "../text/Text";
import TitleSub from "../text/Title.sub";
import { Link } from "@riadh-adrani/recursive-web";

export default (comment) => {
    return Row({
        style: { scoped: true, normal: { padding: ["10px", "0px"] } },
        children: [
            Link({
                children: [
                    Img({
                        src: comment.user.img,
                        height: "40px",
                        width: "40px",
                        style: { inline: { borderRadius: "50%" } },
                    }),
                ],
            }),
            Spacer({ width: "10px" }),
            Column({
                children: [
                    TitleSub({
                        text: comment.user.username,
                        size: "1.1em",
                        color: getVar("invert6"),
                    }),
                    Spacer({ height: "2.5px" }),
                    Text({ text: comment.comment, align: "left" }),
                ],
            }),
        ],
    });
};
