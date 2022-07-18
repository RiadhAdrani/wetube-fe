import { setCache } from "@riadh-adrani/recursive-web";
import { getUser } from "../services/user.service";

function setUserCache(id) {
    const [user, setUser] = setCache("user-" + id, { loading: true }, async () => {
        const _user = await getUser(id);

        setUser(_user);
    });

    return [user, setUser];
}

function setVideoCache(id, data) {
    const [video, setVideo] = setCache("video-" + id, { ...data, id });

    return [video, setVideo];
}

export { setUserCache, setVideoCache };
