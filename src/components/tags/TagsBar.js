import { getRef, setState } from "@riadh-adrani/recursive-web";
import { Row } from "@riadh-adrani/recursive-web/html";
import Icons from "../../icons/Icons";
import { Var } from "../../util/Style";
import TagBadge from "./TagBadge";
import TagBarButton from "./TagBar.Button";

export default () => {
    const [scroll, setScroll] = setState("home-tag-bar-scoll", 0);

    return Row({
        style: {
            className: "tag-bar",
            normal: {
                padding: Var("medium"),
                backgroundColor: Var("main5"),
                whiteSpace: "nowrap",
                position: "fixed",
                top: "60px",
                width: "100%",
                zIndex: 5,
                height: "50px",
                boxSizing: "border-box",
            },
        },
        children: [
            TagBarButton(Icons.ArrowLeft, true, () => {
                const ref = getRef("home-tag-bar-scollable-container");

                if (ref.scrollLeft > 0) {
                    const newScroll = ref.scrollLeft - 200;
                    setScroll(newScroll);
                }
            }),
            Row({
                hooks: {
                    onRef: (e) => {
                        e.scrollLeft = scroll;
                        return "home-tag-bar-scollable-container";
                    },
                },
                style: { inline: { overflowX: "hidden", flex: 1, scrollBehavior: "smooth" } },
                children: [
                    TagBadge("All"),
                    TagBadge("Epic Nibba"),
                    TagBadge("Dark soul"),
                    TagBadge("Elden Bing"),
                    TagBadge("White guy"),
                    TagBadge("Me and the boys"),
                    TagBadge("Sussima"),
                    TagBadge("Cringe moments"),
                    TagBadge("All"),
                    TagBadge("Epic Nibba"),
                    TagBadge("Dark soul"),
                    TagBadge("Elden Bing"),
                    TagBadge("White guy"),
                    TagBadge("Me and the boys"),
                    TagBadge("Sussima"),
                    TagBadge("Cringe moments"),
                ],
            }),
            TagBarButton(Icons.ArrowRight, true, () => {
                const ref = getRef("home-tag-bar-scollable-container");

                const newScroll = ref.scrollLeft + 200;
                setScroll(newScroll);
            }),
        ],
    });
};
