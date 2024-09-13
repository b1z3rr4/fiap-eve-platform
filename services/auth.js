import { fetchApi } from "./api";

export async function getToken() {
    const response = await fetchApi('/auth', {
        method: 'POST'
    });

    return response.token;
}
