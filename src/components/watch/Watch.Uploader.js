import { Column, Row, Spacer, Span } from "@riadh-adrani/recursive-web/html";
import { getVar } from "@riadh-adrani/recursive-web/style/methods";
import WatchManager from "../../state-managers/Watch.Manager";
import { subscribersText } from "../../util/Format";
import WatchSubscribe from "./Watch.Subscribe";
import WatchUser from "./Watch.User";

export default () => {
    const manager = WatchManager();

    return Row({
        style: {
            scoped: true,
            normal: {
                padding: "10px",
                border: ["1px", "solid", getVar("invert9")],
                borderRadius: getVar("small"),
            },
        },
        children: [
            WatchUser(),
            Spacer({ width: "15px" }),
            Column({
                style: { inline: { justifyContent: "center", flex: 1 } },
                children: [
                    Span({
                        children: manager.user ? manager.user.username : "Uploader Username",
                        style: {
                            inline: {
                                fontSize: getVar("bSize2"),
                                color: manager.isLoading ? "transparent" : getVar("invert"),
                                backgroundColor: manager.isLoading
                                    ? getVar("main2")
                                    : "transparent",
                                fontWeight: 600,
                                width: manager.isLoading ? "150px" : "auto",
                                borderRadius: getVar("smallest"),
                            },
                        },
                    }),
                    Spacer({ height: "4px" }),
                    Span({
                        children: subscribersText(
                            manager.user ? manager.user.subscribers.length : 0
                        ),
                        style: {
                            inline: {
                                fontSize: getVar("bSize1"),
                                color: manager.isLoading ? "transparent" : getVar("invert6"),
                                backgroundColor: manager.isLoading
                                    ? getVar("main2")
                                    : "transparent",
                                width: manager.isLoading ? "100px" : "auto",
                                borderRadius: getVar("smallest"),
                            },
                        },
                    }),
                ],
            }),
            WatchSubscribe(),
        ],
    });
};
