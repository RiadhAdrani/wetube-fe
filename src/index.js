import { Render } from "@riadh-adrani/recursive-web";
import App from "./App";
import Router from "./Router";

Render({
    app: App,
    root: document.body,
    router: Router,
});
