import { fetchApi } from "./api.js";
import { getToken } from "./auth.js";

export async function getEvents() {
    const token = await getToken();

    const response = await fetchApi('/events', {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + token
        }
    })

    return response;
}
