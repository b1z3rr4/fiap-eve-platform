import { definirValor, listarOpcoes, mostrarOuEsconderPopover } from "./functions.js";

// Certificar que o html de fato foi gerado, antes de aplicar os eventos
document.addEventListener('DOMContentLoaded', () => {
    console.log('executei');

    // ESNEXT - ECMA06
    const listaDeTipos = document.getElementById('tipo-lista');

    const tipos = listarOpcoes();

    const inputDeTipo = document.getElementById('input-de-tipo');

    tipos.forEach((tipo) => {
        // Criando em memória um elemento de lista em HTML
        const elemento = document.createElement('li');

        // Atribuo valor de `tipo` como texto dentro dessa LI
        elemento.textContent = String(tipo);

        // Evento de alteração do input para cada LI
        elemento.addEventListener('click', () => definirValor(inputDeTipo, tipo));

        // Pego a minha UL (minha listagem) e adiciono a lista como filho dessa UL
        listaDeTipos.appendChild(elemento);
    })

    // O event é um argumento passado do `addEventListener` para nossa função de callback
    inputDeTipo.addEventListener('click', (event) =>  mostrarOuEsconderPopover(event.target));
})

// Tipos de eventos
// click
// input <- mudanças no valor do input
// change <- muda o valor de um select
// submit <- quando envia um formulario
