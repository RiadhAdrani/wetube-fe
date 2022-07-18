import { Column } from "@riadh-adrani/recursive-web/html";
import SearchEmpty from "../components/search/Search.Empty";
import SearchItems from "../components/search/Search.Items";
import SearchNothing from "../components/search/Search.Nothing";
import SearchManager from "../state-managers/Search.Manager";

export default () => {
    const manager = SearchManager();

    const Content = !manager.query
        ? SearchEmpty()
        : manager.result.length == 0
        ? SearchNothing()
        : SearchItems();

    return Column({
        style: {
            inline: {
                flex: 1,
            },
        },
        children: Content,
    });
};
