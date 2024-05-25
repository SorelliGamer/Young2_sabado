const NOME = document.querySelector('#nome')
const mediaa = document.querySelector('#media')
const resultado = document.querySelector('#resultado')


window.onload = function() {
    const nome_salvo = localStorage.getItem('nome')
    const n1_salvo = parseInt(localStorage.getItem('n1'))
    const n2_salvo = parseInt(localStorage.getItem('n2'))
    const n3_salvo = parseInt(localStorage.getItem('n3'))

    const bruto = (n1_salvo + n2_salvo + n3_salvo) / 3
    media = bruto.toFixed(1)
    let aprovado = ''

    // VERIFICAR SE PASSOU
    if(media >= 6) {
        aprovado = 'Aprovado'
    }
    else if (media <= 4) {
    aprovado = 'Reprovado'
    }
    else {
    aprovado = 'Recuperação'
    }
    // ALTERAR ELEMENTO
    NOME.innerHTML= nome_salvo
    mediaa.innerHTML= media
    resultado.innerHTML= aprovado
}
