import { backHost } from "./const";
import axios from "axios";

const rootURL = `${backHost}/videos`;
const videoURL = (id) => `${backHost}/videos/${id}`;
const comments = (id) => `${backHost}/comments/${id}`;

async function upload(userId, file, title) {
    const data = new FormData();

    data.append("userId", userId);
    data.append("file", file);
    data.append("title", title);

    return axios.post(rootURL, data);
}

function edit(id, data = { title: undefined, description: undefined, visibility: undefined }) {
    return axios.put(videoURL(id), data);
}

function getUserVideos(id) {
    return axios.get(videoURL(`user/${id}`));
}

function getVideo(id) {
    return axios.get(videoURL(id));
}

function getRandom() {
    return axios.get(videoURL("random"));
}

function getComments(id) {
    return axios.get(comments(id));
}

function addComments(user, video, comment) {
    return axios.post(comments(""), { user, video, comment });
}

export { upload, edit, getUserVideos, getVideo, getRandom, getComments, addComments };
