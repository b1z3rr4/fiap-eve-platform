import { fetchApi } from "./api.js";

export async function getToken() {
    const response = await fetchApi('/auth', {
        method: 'POST'
    });

    return response.token;
}
