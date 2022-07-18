import { goTo } from "@riadh-adrani/recursive-web";

function userRoute(id) {
    return `/user=:${id};`;
}

function watchRoute(id) {
    return `/watch=:${id};`;
}

function goToUser(id) {
    goTo(userRoute(id));
}

function goToVideo(id) {
    goTo(watchRoute(id));
}

export { userRoute, watchRoute, goToUser, goToVideo };
