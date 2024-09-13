const baseURL = 'https://eve-api-y5ml.onrender.com/api';
const apiKey = 'ESTARTANDO_DEVS_2024_FRONT_END';

/**
 * 
 * @param {string} endpoint 
 * @param {object} options 
 */
export async function fetchApi(endpoint, options) {
    const url =  `${baseURL}${endpoint}`;

    const response = await fetch(url, {
        ...options,
        headers: {
            'X-Api-Key': apiKey,
            ...options.headers,
        },
        timeout: 15000,
    });

    return response.json();
}
