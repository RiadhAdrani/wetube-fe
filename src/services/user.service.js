import axios from "axios";
import { backHost } from "./const";

const users = (id) => `${backHost}/users${id !== undefined ? `/${id}` : ""}`;
const subscription = (id) => `${backHost}/subscription${id !== undefined ? `/${id}` : ""}`;

async function signup(data, onSuccess = () => {}, onFailed = () => {}) {
    if (!data) {
        onFailed("Data is not valid");
        return;
    }

    await axios
        .post(users(), data)
        .then((res) => {
            if (res.status === 404) onFailed("Something went wrong");

            if (res.data.failed) {
                onFailed(res.data.reason);
            } else {
                onSuccess(res);
            }
        })
        .catch((res) => {
            onFailed(res);
        });
}

async function signin(email, password, onSuccess = () => {}, onFailed = () => {}) {
    if (!email || !password) {
        onFailed("Email or/and password is/are empty or too short!");
        return;
    }

    axios
        .post(users("/login"), { email, password })
        .then((res) => {
            if (res.status === 404) {
                onFailed("Something went wrong");
                return;
            }

            if (res.data.failed) {
                onFailed(res.data.reason);
            } else {
                onSuccess(res.data);
            }
        })
        .catch(() => {
            onFailed("Something went wrong ...");
        });
}

async function getUser(id) {
    if (!id) return { failed: true };

    try {
        const res = await axios.get(users(id));

        return res.data;
    } catch (error) {
        return { failed: true };
    }
}

async function getSubscribers(id) {
    if (!id) return { failed: true };

    try {
        const res = await axios.get(subscription(id + "/subscribers"));

        return res.data;
    } catch (error) {
        return { failed: true };
    }
}

async function getSubscription(id) {
    if (!id) return { failed: true };

    try {
        const res = await axios.get(subscription(id + "/subscription"));

        return res.data;
    } catch (error) {
        return { failed: true };
    }
}

async function doSubscribe(source, target) {
    if (!source || !target) return { failed: true };

    try {
        const res = await axios.post(subscription("add"), { target, source });

        return res.data;
    } catch (error) {
        return { failed: true };
    }
}

async function unSubscribe(source, target) {
    if (!source || !target) return { failed: true };

    try {
        const res = await axios.post(subscription("remove"), { source, target });

        return res.data;
    } catch (error) {
        return { failed: true };
    }
}

async function logout() {
    return true;
}

async function update(id, data) {
    return axios.put(users(id), data);
}

export {
    signup,
    signin,
    getUser,
    getSubscribers,
    getSubscription,
    doSubscribe,
    unSubscribe,
    logout,
    update,
};
