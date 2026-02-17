async function converter(event) {

    event.preventDefault()

    let input = Number(document.getElementById('valorReal').value);

    let URL = await fetch ('https://economia.awesomeapi.com.br/json/last/USD-BRL');
    let dados = await URL.json();

    let cotacao = Number(dados.USDBRL.bid);

    let  valorConvertido = input/cotacao;

    document.getElementById('valorDolar').value = valorConvertido.toFixed(2);

}

async function cotacaoReal() {

     let URL = await fetch ('https://economia.awesomeapi.com.br/json/last/USD-BRL');
    let dados = await URL.json();

    let cotacao = Number(dados.USDBRL.bid);


    document.getElementById('valorAtual').innerText = cotacao;



    
}

cotacaoReal()

