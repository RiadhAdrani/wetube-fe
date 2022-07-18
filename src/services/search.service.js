import axios from "axios";
import { backHost } from "./const";

const searchRoute = `${backHost}/users/search`;

async function makeSearchQuery(query) {
    if (!query) return [];

    try {
        const res = await axios.post(searchRoute, { query });

        return res.data.result;
    } catch (error) {
        return [];
    }
}

export { makeSearchQuery };
