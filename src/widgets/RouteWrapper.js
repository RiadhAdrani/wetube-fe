import { renderRoute } from "@riadh-adrani/recursive-web";
import { Column } from "@riadh-adrani/recursive-web/html";

export default () => {
    return Column({
        style: { inline: { marginTop: "60px", flex: 1 } },
        children: renderRoute(),
    });
};
