import { route } from "@riadh-adrani/recursive-web";
import HomeRoute from "./routes/Home.route";
import SearchRoute from "./routes/Search.route";
import UserAboutRoute from "./routes/User.About.route";
import UserRoute from "./routes/User.route";
import UserVideosRoute from "./routes/User.Videos.route";
import WatchRoute from "./routes/Watch.route";

export default {
    scroll: true,
    route: route({
        path: "/",
        component: HomeRoute,
        title: "Home | WeTube",
        routes: [
            route({ path: "watch=:id;", component: WatchRoute, title: "Watch | WeTube" }),
            route({ path: "search", component: SearchRoute, title: "Search | WeTube" }),
            route({
                path: "user=:id;",
                component: UserRoute,
                title: "User | WeTube",
                routes: [
                    route({ path: "videos", component: UserVideosRoute }),
                    route({ path: "playlists", component: () => "Playlists" }),
                    route({ path: "about", component: UserAboutRoute }),
                ],
            }),
        ],
    }),
};
