export function listarOpcoes() {
    return ['Presencial', 'Online'];
}

export function definirValor(elemento, valor) {
    console.log('clicou: ', valor);

    elemento.textContent = 'Tipo selecionado: ' + String(valor);
}

export function mostrarOuEsconderPopover(elemento) {
    console.log('clicou no input');
    // classList é a propriedade em que eu consigo acessar a lista de classes daquele elemento
    // o toggle é um método de classList que é capaz de remover/adicionar uma classe aquele elemento
    // Se a classe está associada ele remove, se não ele adiciona
    document.getElementById('tipo-lista').classList.toggle('visually-hidden');
}