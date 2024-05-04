let dias = document.getElementById('dias_n')
let horas = document.getElementById('horas_n')
let min = document.getElementById('minutos_n')
let sec = document.getElementById('Segundos_n')


let aniversario = '22 July 2024'

function contagem(){
    const hoje = new Date()
    console.log(hoje)
    const aniversario_convertido = new Date(aniversario)
    const total_segundos = (aniversario_convertido - hoje) / 1000

    const minutos = Math.floor(total_segundos / 60) % 60;
    const horas = Math.floor(total_segundos / 3600) % 24
    const dias = Math.floor(total_segundos / 3600 / 24)
    const segundos = Math.floor(total_segundos) % 60
    
    dias_n.innerText = formatar_digito(dias)
    minutos_n.innerText = formatar_digito(minutos)
    horas_n.innerText = formatar_digito(horas)
    Segundos_n.innerText = formatar_digito(segundos)

    console.log(dias, horas, minutos, segundos)
}


contagem()

setInterval(contagem, 1000)


function formatar_digito(tempo){
    if(tempo < 10){
        return `0${tempo}`
    }
    else {
        return tempo
    }

    return tempo < 10 ? `0${tempo}` : tempo;
}