//comentario


/*
Comentario
de 
multiplas
linhas
*/

//* TIPOS DE DADOS

/*
?NUMBER > INT FLOAT NaN
!STRING > TEXTO
?BOOLEAN > TRUE FALSE
!NULL > VAZIO
?UNDEFINED NÃO TEM DEFINIÇÃO
*/

//! CONVERTER TIPOS

/**
 * var = 4
 * de num para sring
 * var.tostring()
 * 
 * de string para num
 * parseInt(var)
 * ou
 * parseFloat(var)
 */

//? OPERADORES ARITMÉTICOS

/**
 * + ADIÇÃO
 * * MULTIPLICAÇÃO
 * / DIVISÃO
 * % RESTO DA DIVISÃO
 * ** POTENCIA
 */

//* OPERADORES RELACIONAL

/**
 * > MAIOR QUE
 * < MENOR QUE
 * >= MAIOR OU IGUAL
 * <= MENOR OU IGUAL
 * == (2 iguais) IGUALDADE
 * === (3 iguais) INGUALDADE DE TIPOS
 * != DIFERENTE
 * 
 */

//! OPERADORES LÓGICOS
/**
 * ! não - NEGAÇÃO
 * && e - CONJUGAÇÃO
 * || ou - DISJUNÇÃO
 */

//! VARIÁVEIS
/**
 * VAR   - vc pode redefinir - escopo global
 * LET   - vc não pode redefinir - escopo local
 * CONST - constante, uma informação que vc não irá mudar
 * 
 */

//? OUTROS TIPOS DE DADOS
/**
 * ARRAY  = LISTA
 * OBJECT = DICIONARIO
 * JSON   = JAVASCRIPT OBJECT NOTATION
 */

//* FUNÇÕES = AÇÕES
/**
 * function nome_da_função(parametros)
 * {
 *       comandos
 * }
 */

//! CONDICIOAIS
/**
 * IF (CONDICAO_A)
 * {
 *      PLANO A
 * }
 * ELSE IF (CONDIÇÃO_B)
 * {
 *      PLANO B
 * }
 * ELSE
 * {
 *      PLANO RESTO
 * }
 */

//? ESTRUTURA DE REPETIÇÃO
/**
 * for i in range(10)
 * 
 * for (let i - 1; i < 11; i++)
 * {
 *      o que tem que ser repetido
 * }
 */

// let x = 5
// let y = 3

// let soma = x + y

// window.alert(soma)
// document.write(soma)
// document.write('<h1>' + soma + '</h1>')
// document.write(`<h1> ${soma} </h1>`)
// console.log(soma)


// let resposta = window.prompt('Digite um numero')
// console.log(resposta)
// document.write(resposta)


// let resposta = window.prompt('Digite um numero')
// console.log(resposta)
// document.write(resposta)

// let valor = resposta % 2
// if (valor == 0)
// {
//     document.write('Par')
// }
// else
// {
//     document.write('Impar')
// }

// PEDI DOIS NUMEROS E MOSTRE A SOMA
// let x = parseInt(window.prompt('Digite um numero'))
// let y = parseInt(window.prompt('Digite Outro numero'))

// let soma = x + y
// document.write(soma)


// FAZER UMA TABUADA, PEDIR UM NUMERO E MOSTRAR A TABUADA ATÉ O 10

// let x = parseInt(window.prompt('Digite um numero'))
// for (let i = 1; i < 2; i++)
//  {
//     document.write('1*1 1*2 1*3 1*4 1*5 1*6 1*7 1*8 1*9 1*10 ')
//  }


let num = parseInt(window.prompt('Digite um numer:'))


for(let i = 0; i < 11; i++)
{
    document.write(`${numero} X ${i} = ${numero*i}<br>`)
}