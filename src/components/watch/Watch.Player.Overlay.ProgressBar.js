import { getRef } from "@riadh-adrani/recursive-web";
import { Div } from "@riadh-adrani/recursive-web/html";
import { getVar, scaleX } from "@riadh-adrani/recursive-web/style/methods";
import WatchManager from "../../state-managers/Watch.Manager";

export default () => {
    const watch = WatchManager();

    return Div({
        hooks: { onRef: () => "watch-progress-bar" },
        style: {
            className: "watch-progress-wrapper",
            scoped: true,
            normal: {
                height: "3px",
                backgroundColor: getVar("invert5"),
                transitionDuration: "100ms",
                cursor: "pointer",
            },
        },
        onMouseEnter: () => (getRef("watch-progress-bar").style.height = "7px"),
        onMouseLeave: () => (getRef("watch-progress-bar").style.height = "3px"),
        onClick: (e) => {
            const ref = getRef("watch-progress-bar");

            const cumulativeOffset = (element) => {
                let top = 0,
                    left = 0;

                do {
                    top += element.offsetTop || 0;
                    left += element.offsetLeft || 0;
                    element = element.offsetParent;
                } while (element);

                return {
                    top: top,
                    left: left,
                };
            };

            const offset = cumulativeOffset(ref).left;

            const position = e.clientX - offset;
            const width = ref.clientWidth;

            watch.changeTime((position / width) * watch.length);
        },
        children: Div({
            style: {
                className: "watch-progress",
                normal: {
                    backgroundColor: getVar("logo"),
                    width: "100%",
                    height: "100%",
                    transitionDuration: "100ms",
                    transformOrigin: "left",
                    transform: scaleX(watch.time / watch.length),
                },
            },
        }),
    });
};
