import { getEvents } from "../services/events.js";

const IMAGE_NOT_FOUND = 'https://media.istockphoto.com/id/1409329028/pt/vetorial/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=mYYgZekhwsH2MrjuAip3dTTh2lxSYTr6el6u0C75MrI='

/**
 * 
 * @param {object} event 
 * @param {number} index 
 * @param {HTMLElement | null} main 
 */
function generateCard(event, index, main) {
    // Criar o container de card
    const card = document.createElement('div');
    card.className = 'event';
    card.setAttribute('aria-labelledby', `event-${index}`);
    card.tabIndex = 0;

    // Imagem do card
    // Container da imagem
    const cover =  document.createElement('div');
    cover.className = 'cover';

    // Picture
    const picture = document.createElement('picture');

    const image = event.foto.startsWith('https:') ? event.foto : IMAGE_NOT_FOUND;

    const sourceHigh = document.createElement('source');
    sourceHigh.srcset = image;
    sourceHigh.media = '(min-resolution: 2dppx)';
    sourceHigh.sizes = '(max-width: 600px) 100vw, 50vw';

    picture.appendChild(sourceHigh);

    const sourceLow = document.createElement('source');
    sourceLow.srcset = image;
    sourceLow.media = '(max-resolution: 1dppx)';
    sourceLow.sizes = '(max-width: 600px) 100vw, 50vw';

    picture.appendChild(sourceLow);

    const img = document.createElement('img');
    img.src = image;
    img.alt = event.descricao || 'Imagem não disponível';
    img.loading = 'lazy';
    img.setAttribute('aria-describedby', `event-${index}-description`);
    img.width = 275;
    img.height = 183;

    picture.appendChild(img);

    cover.appendChild(picture);
    card.appendChild(cover);

    // Informação em texto
    const info = document.createElement('div');
    info.className = 'info';

    const topic = document.createElement('p');
    topic.className = 'topic';
    topic.textContent = event.nome;

    info.appendChild(topic);
    
    const textContainer = document.createElement('div');
    textContainer.className = 'text-container';

    const description = document.createElement('p');
    description.id = `event-${index}-description`;
    description.className = 'description';
    description.textContent = event.descricao;

    const detailsType = document.createElement('span');
    detailsType.textContent = event.tipo;
    detailsType.classList.add('event-type');

    textContainer.appendChild(description);
    textContainer.appendChild(detailsType);

    info.appendChild(textContainer);
    card.appendChild(info);

    main?.appendChild(card);
}

export async function loadEvents(params = '') {
    try {
        const events = await getEvents(params);
        const main = document.getElementById('events');

        main.innerHTML = '';

        if (events?.length === 0) {
            return main.innerHTML = '<p>Nehum evento encontrado.</p>'
        }

        events?.forEach((event, index) => {
            generateCard(event, index, main);
        });
    } catch (error) {
        console.error('Erro ao carregar eventos:', error);
    }
}
