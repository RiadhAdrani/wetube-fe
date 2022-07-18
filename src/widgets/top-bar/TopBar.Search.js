import { goTo, setState } from "@riadh-adrani/recursive-web";
import { Input, Spacer } from "@riadh-adrani/recursive-web/html";
import CenteredRow from "../../components/utils/CenteredRow";
import LeftCenteredRow from "../../components/utils/LeftCenteredRow";
import Icon from "../../icons/Icon";
import Icons from "../../icons/Icons";
import SearchManager from "../../state-managers/Search.Manager";
import { Var } from "../../util/Style";

export default () => {
    const manager = SearchManager();

    const [show, setShow] = setState("search-is-focused", false);

    return CenteredRow({
        style: { inline: { flex: 1 } },
        children: [
            LeftCenteredRow({
                style: {
                    scoped: true,
                    normal: {
                        flex: 1,
                        padding: "5px",
                        background: Var("main"),
                        border: ["1px", "solid", Var("main9")],
                        borderRadius: [Var("tiny"), "0px", "0px", Var("tiny")],
                    },
                    focusWithin: {
                        borderColor: Var("logo"),
                    },
                },
                children: [
                    Spacer({ width: "5px" }),
                    Icon({
                        icon: Icons.Search,
                        size: "20px",
                        style: {
                            scoped: true,
                            normal: { opacity: show ? "1" : "0" },
                        },
                    }),
                    Spacer({ width: "5px" }),
                    Input({
                        placeholder: "Search ...",
                        style: {
                            scoped: true,
                            normal: {
                                background: "transparent",
                                border: "none",
                                color: "inherit",
                                fontSize: Var("bSize3"),
                                padding: Var("smallest"),
                                flex: 1,
                            },
                            focus: { outline: "none" },
                        },
                        onFocus: () => {
                            setShow(true);
                        },
                        onBlur: () => {
                            setShow(false);
                        },
                        onInput: (e) => {
                            manager.onQueryChanged(e.target.value);
                        },
                    }),
                ],
            }),
            Icon({
                icon: Icons.Search,
                size: "19px",
                style: {
                    scoped: true,
                    normal: {
                        cursor: "pointer",
                        padding: Var("medium"),
                        backgroundColor: Var("main9"),
                    },
                },
                onClick: () => goTo("/search"),
            }),
        ],
    });
};
