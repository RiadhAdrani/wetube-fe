import { setState } from "@riadh-adrani/recursive-web";
import { Column } from "@riadh-adrani/recursive-web/html";
import Icon from "../../icons/Icon";
import Icons from "../../icons/Icons";
import { Var } from "../../util/Style";
import MenuButton from "../button/Menu.Button";

export default (video) => {
    const [show, setShow] = setState("show-video-card-options-" + video.id, false);

    return Column({
        style: { inline: { position: "relative" } },
        onClickGlobal: () => {
            if (show) setShow(false);
        },
        onClick: (e) => {
            e.stopPropagation();
            e.preventDefault();
        },
        children: [
            Icon({
                icon: Icons.MoreOptions,
                style: {
                    className: "video-card-more-options",
                    normal: { cursor: "pointer" },
                    active: {
                        backgroundColor: Var("invert9"),
                    },
                },
                onClick: (e) => {
                    setShow(!show);
                    onclickglobal.notify();
                },
            }),
            Column({
                flags: { renderIf: show },
                style: {
                    scoped: true,
                    normal: {
                        position: "absolute",
                        width: "200px",
                        right: "0px",
                        top: "30px",
                        backgroundColor: Var("main1"),
                        padding: "10px 0px",
                        borderRadius: Var("tiny"),
                    },
                },
                children: [
                    MenuButton({
                        icon: Icons.Playlist,
                        size: "20px",
                        text: "Add to Playlist",
                        onClick: () => {},
                    }),
                    MenuButton({
                        icon: Icons.Later,
                        size: "20px",
                        text: "Watch Later",
                        onClick: () => {},
                    }),
                ],
            }),
        ],
    });
};
