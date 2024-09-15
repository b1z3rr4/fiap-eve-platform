/**
 * 
 * @param {HTMLElement} element
 */
function toggleOptions(element) {
    unblockScroll(element);

    const isOpen = element.querySelector('#select-options').classList.contains('open');

    positionOptions(element);
    updateOptionsVisibility(element);

    if (!isOpen) {
        blockScroll(element);
    } else {
        unblockScroll(element);
    }
}

/**
 * 
 * @param {HTMLElement} element
 * @param {*} option
 * @param {string} label
 */
function selectOption(element, option, label) {
    unblockScroll(element);
    
    const input = element.querySelector('.input');
    input.classList.add('fulfilled');
    
    const selectedOption = option.label;
    element.querySelector("#selected-label").textContent = `${label} ${selectedOption}`;
    
    updateOptionsVisibility(element);
}

/**
 * 
 * @param {HTMLElement} element 
 */
function updateOptionsVisibility(element) {
    const selectOptions = element.querySelector("#select-options");
    const isOpen = element.querySelector('#select-options').classList.contains('open');


    if (!isOpen) {
        selectOptions.classList.add('open');
    } else {
        selectOptions.classList.remove('open');
    }
}

/**
 * 
 * @param {HTMLElement} element 
 */
function positionOptions(element) {
    const selectSelected = element.querySelector("#selected");
    const selectOptions = element.querySelector("#select-options");

    if (selectSelected && selectOptions) {
        const rect = selectSelected.getBoundingClientRect();
        selectOptions.style.left = `${rect.left}px`;
        selectOptions.style.top = `${rect.bottom + window.scrollY}px`;
    }
}

/**
 * 
 * @param {HTMLElement} element 
 */
function blockScroll(element) {
    document.body.style.overflow = 'hidden';
    const parentElement = element.parentNode;
    parentElement.style.overflow = 'hidden';
}

/**
 * 
 * @param {HTMLElement} element 
 */
function unblockScroll(element) {
    document.body.style.overflow = '';
    const parentElement = element.parentNode;
    parentElement.style.overflow = '';
}

/**
 * Função para carregar as opções para cada select.
 * @param {HTMLElement} element
 */
function initializeSelect(element, labelly) {
    const selectSelected = element.querySelector('#selected');
    const selectOptions = element.querySelectorAll('.select-options li');

    selectSelected.addEventListener('click', () => toggleOptions(element));

    selectOptions.forEach((optionElement) => {
        const label = optionElement.textContent;

        optionElement.addEventListener('click', () => {
            const labelInput = element.getAttribute('data-label');
            const value = optionElement.getAttribute('data-value')

            const filterEvent = new CustomEvent('filters', {
                detail: { label: labelInput, value: value }
            })
        
            document.dispatchEvent(filterEvent);

            selectOption(element, { label }, labelly);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const select1 = document.getElementById('input-type');
    const select2 = document.getElementById('input-classification');

    initializeSelect(select1, 'Tipo: ');
    initializeSelect(select2, 'Classificação: ');
});