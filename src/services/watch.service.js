import axios from "axios";

function start(id) {
    return axios.get("http://localhost:5000/watch/" + id, {
        headers: { Range: "bytes=0-" },
    });
}

function addView(video, user) {
    return axios.post("http://localhost:5000/views/", { video, user });
}

function addVote(video, user, vote) {
    return axios.post("http://localhost:5000/votes/", { video, user, vote });
}

export { start, addView, addVote };
