const POKE_NAME = document.querySelector('.poke_name')
const POKE_NUMBER = document.querySelector('.poke_number')
const POKE_IMG = document.querySelector('.poke_img')
const CONTEINER_INPUT = document.querySelector('.conteiner_input')
const PREV_BTN = document.querySelector('.pre_btn')
const NEXT_BTN = document.querySelector('.next_btn')

let id_pokemon = 1




const show_pokemon = async(pokemon) => {
    POKE_NAME.innerHTML = 'Loading...'
    POKE_NUMBER.innerHTML = ''
    const JSON_POKEMON = await fetch_pokemon(pokemon)

    if(JSON_POKEMON) {
        //POKE_IMG.src = JSON_POKEMON['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
        POKE_IMG.src = JSON_POKEMON['sprites']['other']['showdown']['front_default']
        POKE_IMG.style.display = 'block'
        POKE_NAME.innerHTML = JSON_POKEMON.name
        POKE_NUMBER.innerHTML = JSON_POKEMON.id
        CONTEINER_INPUT.value = ''
        id_pokemon = JSON_POKEMON.id
    }
    else {
        POKE_NAME.innerHTML = 'Not Founded'
        POKE_NUMBER.innerHTML = ''
        POKE_IMG.computedStyleMap.display = 'none'
    }
}


const fetch_pokemon = async (pokemon) => {
    let resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    if (resposta.status === 200)
    {
        const INFO = resposta.json()
        return INFO

    }
}

CONTEINER_INPUT.addEventListener('submit', (event) => {
    event.preventDefault()
    let pokemon = CONTEINER_INPUT.value.toLowerCase()
    show_pokemon(pokemon)
})

PREV_BTN.addEventListener('click', () =>{
    if (id_pokemon > 1) {
        id_pokemon -= 1
        show_pokemon(id_pokemon)
    }
})
NEXT_BTN.addEventListener('click', () =>{
    if (id_pokemon <= 920) {
        id_pokemon += 1
        show_pokemon(id_pokemon)
    }
})

window.onload = show_pokemon(id_pokemon)