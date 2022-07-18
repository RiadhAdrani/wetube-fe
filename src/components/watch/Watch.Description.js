import { setState } from "@riadh-adrani/recursive-web";
import { Column, H4, P, Spacer } from "@riadh-adrani/recursive-web/html";
import { getVar } from "@riadh-adrani/recursive-web/style/methods";
import WatchManager from "../../state-managers/Watch.Manager";
import { Var } from "../../util/Style";

export default () => {
    const manager = WatchManager();

    if (manager.isLoading)
        return Column({
            style: {
                scoped: true,
                normal: {
                    height: "75px",
                    backgroundColor: getVar("main2"),
                    borderRadius: getVar("smallest"),
                },
            },
        });

    const [show, setShow] = setState("show-extended-video-description", false);

    return Column({
        style: {
            className: "watch-description",
            normal: {
                fontSize: Var("bSize3"),
                lineHeight: Var("bSize4"),
            },
        },
        children: [
            P({
                children: manager.description,
                style: {
                    scoped: true,
                    normal: {
                        maxHeight: show ? "max-content" : `calc(${Var("bSize3")} * 3)`,
                        textOverflow: "clip",
                        overflow: "hidden",
                        color: Var(show ? "invert" : "invert5"),
                        margin: "0px",
                        whiteSpace: "break-spaces",
                    },
                },
            }),
            Spacer({ height: "10px" }),
            H4({
                children: show ? "Show Less" : "Show More",
                onClick: () => setShow(!show),
                style: {
                    inline: {
                        margin: "0px",
                        cursor: "pointer",
                        fontWeight: "400",
                        fontStyle: "italic",
                    },
                },
            }),
        ],
    });
};
