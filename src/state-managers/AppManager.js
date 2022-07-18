import { setState } from "@riadh-adrani/recursive-web";
import { getRandom } from "../services/videos.service";

export default () => {
    const [drawer, setDrawer] = setState("show-drawer", false);
    const [signup, setSignup] = setState("show-signup", false);
    const [signin, setSignin] = setState("show-signin", false);

    const [user, setUser] = setState("user", null);
    const [sub, setSub] = setState("user-subscription", []);
    const [feed, setFeed] = setState("feed-videos", [], async () => {
        const data = await getRandom();

        setFeed(data.data.items);
    });

    return {
        feed,
        drawer: {
            show: drawer,
            toggle: (val) => {
                setDrawer(val !== undefined ? val : !drawer);
            },
        },
        signup: {
            show: signup,
            toggle: (val) => {
                setSignup(val !== undefined ? val : !signup);
            },
        },
        signin: {
            show: signin,
            toggle: (val) => {
                setSignin(val !== undefined ? val : !signin);
            },
        },
        user: {
            value: user,
            is: user !== null,
            set: (value) => {
                setUser(value);
            },
            logout: () => {
                setUser(null);
                sub;
            },
            sub,
            updateSubscription: (items) => {
                setSub(items);
            },
            addSubscription: (item) => {
                setSub([...sub, item]);
            },
            removeSubscription: (target) => {
                setSub(sub.filter((sub) => sub.target != target));
            },
            isSubscribedTo: (id) => {
                if (user == null) return false;

                return (
                    sub.find((s) => {
                        return s.target == id;
                    }) != undefined
                );
            },
        },
    };
};
