const meuArray = [1, 2, 3]; // sincronas

console.log('antes');

const meuNovoArray = meuArray.map((item) => {
    console.log(item, ': durante');
}); // sincronas

// callback
setTimeout(() => {
    console.log('set time out');
}, 0) // assincrono

// pendente
// resolvida
// com falha
Promise.resolve().then(() => { // assincrono
    console.log('promise');
})

console.log('depois');

// // FIFO
// // First In First Out


// jsDoc
/**
 * Função que retorna o endereço com base em um cep.
 * @param {string} cep 
 */
async function getCep(cep) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    // Tratamento de erros try/catch
    console.log('antes');
    fetch(url) // assincrono
    .then((res) => {
        console.log(res.json());
    })
    .catch((erro) => {
        console.error(erro);
    })
    .finally(() => {
        //back: para fechar uma conexão com o banco de dados.
        //front: informar para o usuário que a solicitação finalizou.
        console.log('terminou');
    })

    // console.log('depois')

    console.log('antes');

    try {
        // await - esperar/espere
        const data = await fetch(url); // assincrono -> sincrono
        const address = await data.json();
    
        console.log(address);
    } catch (error) {
        console.error(error);
    } finally {
        console.log('terminou');
    }

    console.log('depois');
}


// pooling -> https://api.com/

// 404 - 200
fetch('https://api.com/')
.then((res) => {
    console.log('Pdf ficou pronto.');
    notifyUser(res);
})
.catch((erro) => {
    console.log('Pdf nao esta pronto ainda.');
})
.finally(() => {
    console.log('time: ', counter);
});
