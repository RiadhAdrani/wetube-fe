import { setUserCache, setVideoCache } from "../util/States";

export default (data) => {
    const [video] = setVideoCache(data);
    const [user] = setUserCache(data.id);

    return {
        video,
        user,
    };
};
