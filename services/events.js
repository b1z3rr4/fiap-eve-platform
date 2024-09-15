import { mountQuery } from "../utils/query.js";
import { fetchApi } from "./api.js";
import { getToken } from "./auth.js";

/**
 * 
 * @param {string} params 
 * @returns Array<object>
 */
export async function getEvents(params = '') {
    const token = await getToken();

    const response = await fetchApi(`/events${params}`, {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + token
        }
    })

    return response;
}
