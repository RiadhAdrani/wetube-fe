import { Column } from "@riadh-adrani/recursive-web/html";
import { scale } from "@riadh-adrani/recursive-web/style/methods";
import Icon from "../../icons/Icon";
import Icons from "../../icons/Icons";
import WatchManager from "../../state-managers/Watch.Manager";

export default () => {
    const manager = WatchManager();

    const animation = "media-player-" + manager.isPaused;

    return Column({
        onClick: () => manager.togglePlay(),
        style: {
            scoped: true,
            normal: {
                position: "absolute",
                transform: scale("4"),
                opacity: "0",
                backgroundColor: "#ffffff22",
                borderRadius: "50%",
                animation: [animation, "0.5s", "ease-in-out", "1"],
            },
            animations: [
                {
                    name: animation,
                    steps: {
                        from: { transform: scale("4"), opacity: "0.75" },
                        to: { transform: scale("6"), opacity: "0" },
                    },
                },
            ],
        },
        children: [Icon({ icon: manager.isPaused ? Icons.Pause : Icons.Play })],
    });
};
