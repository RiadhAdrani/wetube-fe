import { Column } from "@riadh-adrani/recursive-web/html";
import SearchManager from "../../state-managers/Search.Manager";
import { Var } from "../../util/Style";
import SearchItem from "./Search.Item";

export default () => {
    const manager = SearchManager();

    return Column({
        style: {
            inline: { padding: `${Var("giant")} ${Var("giant5")}`, borderRadius: Var("tiny") },
        },
        children: manager.result.map((user) => SearchItem(user)),
    });
};
