import { mountQuery } from "../utils/query.js";
import { loadEvents } from "./events.js";

const filters  = {
    dia: null,
    tipo: null,
    classificacao: null,
}

document.addEventListener('DOMContentLoaded', () => loadEvents());

document.addEventListener('filters', function(event) {
    filters[event.detail.label] = event.detail.value;

    const query = mountQuery(filters, false);

    loadEvents(query);
});

document.getElementById('clear').addEventListener('click', () => {
    window.location.reload();
})