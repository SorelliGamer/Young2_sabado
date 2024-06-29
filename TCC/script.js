const BUTTON = document.querySelector('button')
const SPAN = document.querySelector('span h2')


piadas = {
    '0': 'O que o cavalo disse ao desligar o telefone? Resposta: Foi só um trote!',
    '1': 'Qual é a parte mais velha do carro? Resposta: O vô-lante;',
    '2': 'Qual é a nota musical preferida dos carros? Resposta: A ré',
    '3': 'O que a lâmpada falou quando a ligaram? Resposta: Tô ligada;',
    '4': 'O que é um pontinho rosa em um ginasio Pokémon? Resposta: É o PINKachu;',
}

BUTTON.addEventListener('click', sortear)


function sortear() {
    let sorteada = Math.floor(Math.random()*5)
    SPAN.innerText = piadas[sorteada]
}