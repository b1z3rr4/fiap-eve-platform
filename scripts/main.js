import { mountQuery } from "../utils/query.js";
import { loadEvents } from "./events.js";

const filters = {
    dia: null,
    tipo: null,
    lat: null,
    lon: null,
    classificacao: 'relevancia',
}

document.addEventListener('DOMContentLoaded', () => {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            filters.lat = lat;
            filters.lon = lon;
        })
    }
});

document.addEventListener('DOMContentLoaded', () => loadEvents());

document.addEventListener('filters', function(event) {
    filters[event.detail.label] = event.detail.value;

    const query = mountQuery(filters, false);

    loadEvents(query);
});

document.getElementById('clear').addEventListener('click', () => {
    window.location.reload();
})