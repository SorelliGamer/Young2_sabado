// COMO INDENTIFICAL ELEMENTOS NA TELA
const divs = document.getElementsByTagName('div')
const div = document.getElementById('area')
const div_class = document.getElementsByClassName('area')
let contador_click = 0


console.log(divs) // MOSTRA O LISTA
console.log(div)  // MOSTRA O ELEMENTO
console.log(div_class) // MOSTRA UMA LISTA

// ALTERANDO AS PROPRIEDADES DOS ELEMENTOS

div.style.backgroundColor = 'green'



for (var i = 0; i < divs.length; i++)
{
    div_class[i].style.backgroundColor = 'green'
    divs[i].innerText = 'robson'
    divs[i].addEventListener('click', clicar)
}



// EVENTOS 
div.addEventListener('click', clicar)
div.addEventListener('mouseenter', entrar)
div.addEventListener('mouseout', sair)
div.addEventListener('mouseup', clicado)
div.addEventListener('mousedown', desclicado)

function desclicado()
{
    div.style.backgroundColor = 'blue'
}

function clicado()
{
    div.style.backgroundColor = 'red'
    contador_click++
    if (contador_click == 5)
    {
        div.remove()
    }
}


function sair()
{
    div.innerText = 'Fui saido'
}

function entrar()
{
    div.innerText = 'Fui Entrado'
}

function clicar()
{
    div.innerText = 'Fui clicado!'

}

function clicar2()
{
    div.innerText = 'Fui clicado!'

}