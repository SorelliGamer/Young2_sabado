const QUESTOES_QUIZ = [
    {
        questão: "Qual é o simbolo do Dia das Mães",
        a:'flor',
        b: 'coração',
        c: 'presente',
        d: 'bebê',
        correta: 'Flor'
    },
    {
        questão: "qual é a data do Dia das Mães",
        a:'11 de setembro',
        b: 'Segundo domingo de maio',
        c: '25 de dezembro',
        d: '30 de Fevereiro',
        correta: 'Segundo domingo de maio'
    },
    {
        questão: "Em qual país foi comemorado pela primeira vez o do Dia das Mães",
        a:'Azerbaijão',
        b: 'URSS',
        c: 'USA',
        d: 'San marinho',
        correta: 'USA'
    },
    {
        questão: "Qual ano foi criado o Dia das Mães",
        a:'1872',
        b: '1905',
        c: '1938',
        d: '1999',
        correta: '1872'
    },
]
const QUIZ_TITULO = document.getElementById('questao')
const ALTERNATIVA_A = document.getElementById('text_a')
const ALTERNATIVA_B = document.getElementById('text_b')
const ALTERNATIVA_C = document.getElementById('text_c')
const ALTERNATIVA_D = document.getElementById('text_d')
const BOTAO = document.getElementById('enviar')
const QUIZ_CONTEINER = document.getElementById('quiz')
const RESPOSTAS = document.querySelectorAll('.resposta')


let questao_atual = 0
let correta = 0

carregar_quiz()

function carregar_quiz()
{
    const INFO_QUESTAO = QUESTOES_QUIZ[questao_atual]

    QUIZ_TITULO.innerText = INFO_QUESTAO.questão
    ALTERNATIVA_A.innerText = INFO_QUESTAO.a
    ALTERNATIVA_B.innerText = INFO_QUESTAO.b
    ALTERNATIVA_C.innerText = INFO_QUESTAO.c
    ALTERNATIVA_D.innerText = INFO_QUESTAO.d
}
function pegar_resposta()
{
    let resposta = undefined

    RESPOSTAS.forEach((resp_elemento) => {   
        if (resp_elemento.checked)
        [
            resposta = resp_elemento.id
        ]
    })
    return resposta
}

function clicado()
{
    const RESPOSTA_JOGADOR = pegar_resposta()
    const TOTAL_PERGUNTAS = QUESTOES_QUIZ.length

    if(RESPOSTA_JOGADOR)
    {
        if (RESPOSTA_JOGADOR === QUESTOES_QUIZ[questao_atual].correta)
        {
            corretas++
        }
        questao_atual++
        if (questao_atual < TOTAL_PERGUNTAS)
        {
          carregar_quiz()  
        }
    }
}


BOTAO.addEventListener('click', clicado)