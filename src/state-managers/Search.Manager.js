import { getRoute, goTo, setState } from "@riadh-adrani/recursive-web";
import { makeSearchQuery } from "../services/search.service";

export default () => {
    const [query, setQuery, liveQuery] = setState("search-query", "");
    const [result, setResult] = setState("search-result", []);

    return {
        query,
        result,
        onQueryChanged: (newQuery) => {
            setQuery(newQuery.replace(":", "").replace(";", ""));

            makeSearchQuery(newQuery).then((res) => {
                if (liveQuery() == newQuery) {
                    setResult(res);
                }
            });
        },
    };
};
