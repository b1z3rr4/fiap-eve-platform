## Tipos de eventos

### Mouse Events
click      -> Quando o usuário clica no elemento
dblclick    -> Quando o usuário dá dois cliques rápidos no elemento
mousedown   -> Quando o botão do mouse é pressionado sobre o elemento
mouseup     -> Quando o botão do mouse é solto sobre o elemento
mousemove   -> Quando o mouse se move sobre o elemento
mouseover   -> Quando o mouse entra na área do elemento
mouseout    -> Quando o mouse sai da área do elemento
mouseenter  -> Quando o mouse entra na área do elemento (não é disparado se o mouse se move dentro do elemento)
mouseleave  -> Quando o mouse sai da área do elemento (não é disparado se o mouse se move dentro do elemento)

### Keyboard Events
keydown     -> Quando uma tecla é pressionada
keyup       -> Quando uma tecla é liberada
keypress    -> Quando uma tecla é pressionada e liberada (obsoleto)

### Form Events
submit      -> Quando um formulário é enviado
reset       -> Quando um formulário é resetado
change      -> Quando o valor de um elemento de formulário é alterado (por exemplo, um <select> ou <input> com type="text")
input       -> Quando o valor de um elemento de formulário é alterado (por exemplo, um <input> ou <textarea>)

### Focus Events
focus       -> Quando um elemento recebe foco
blur        -> Quando um elemento perde foco
focusin     -> Quando um elemento ou um de seus descendentes recebe foco
focusout    -> Quando um elemento ou um de seus descendentes perde foco

### Touch Events
touchstart  -> Quando um dedo toca o elemento
touchend    -> Quando um dedo é removido do elemento
touchmove   -> Quando um dedo se move sobre o elemento
touchcancel -> Quando um toque é interrompido

### Event Delegation
click       -> Pode ser usado para delegar eventos em elementos pai

### Drag Events
drag        -> Quando o elemento é arrastado
dragstart   -> Quando o arrasto começa
dragend     -> Quando o arrasto termina
dragenter   -> Quando o elemento arrastado entra na área do alvo
dragleave   -> Quando o elemento arrastado sai da área do alvo
dragover    -> Quando o elemento arrastado está sobre a área do alvo
drop        -> Quando o elemento arrastado é solto na área do alvo

### Media Events
play        -> Quando um vídeo ou áudio começa a tocar
pause       -> Quando um vídeo ou áudio é pausado
ended       -> Quando um vídeo ou áudio termina
volumechange-> Quando o volume de um vídeo ou áudio muda
timeupdate  -> Quando o tempo atual de reprodução de um vídeo ou áudio muda

### Window Events
resize      -> Quando a janela é redimensionada
scroll      -> Quando a área de rolagem da janela ou de um elemento é rolada
load        -> Quando a página e todos os seus recursos (imagens, scripts, etc.) são completamente carregados
unload      -> Quando a página está prestes a ser descarregada
beforeunload -> Quando a página está prestes a ser descarregada (permite exibir uma mensagem de confirmação)

### Miscellaneous Events
error       -> Quando ocorre um erro na execução do script
contextmenu -> Quando o menu de contexto é solicitado (geralmente com o botão direito do mouse)