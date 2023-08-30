// const characterContainer = document.getElementById('characters')
// const urlAPI = 'https://rickandmortyapi.com/api/character'
const PokemonTotalNumber = 1008;
let pokemonArray = [];
let searchArray = [];
const promises = [];
const container = document.querySelector('#cardsContainer');

//Private Functions
function pokemonProtoype(name, imageUrl, types, number) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.types = types;
    this.number = number;
}

function orderPokemonDataStructure(allPokemonInfo) {
    for(let i=0;i<allPokemonInfo.length;i++) {
        let name= allPokemonInfo[i].name;
        let imageUrl= allPokemonInfo[i].sprites.front_default;
        let types= allPokemonInfo[i].types;
        let number= allPokemonInfo[i].id;
        pokemonArray.push(new pokemonProtoype(name, imageUrl, types, number));
    }
    createCards(pokemonArray);
}

function searchPokemonName(name) {
    searchArray = [];
    searchArray = pokemonArray.filter(pokemon => pokemon.name.includes(name))
    createCards(searchArray);
}

function orderPokemonByType(_pokemon) {
    var addPokemon;
    searchArray = [];
    for(var i=0; i<_pokemon.length; i++) {
        addPokemon = pokemonArray.filter(pkmn => pkmn.name == _pokemon[i].pokemon.name)
        if (addPokemon) {
            searchArray.push(addPokemon[0]);
        }
    }
    if(searchArray.length>0) {
        createCards(searchArray);
    } else {
        container.innerHTML = '<h1 class="text-white bg-dark">No matching Pokemon</h1>';
    }
}

//Functions interacting with view
function createImageItem(url, name) {
    let img = document.createElement('img');
    img.src = url;
    img.alt = name;
    img.classList.add('card-img-top');

    return img
}

function createCardTitle(name) {
    let cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = 'Name: ' + name;

    return cardTitle
}

function createCardText(key, value) {
    let cardText = document.createElement('p');
    cardText.classList.add('card-text');
    if(value.length){
        let content = key + ': '
        for(let i=0; i<value.length; i++) {
            content = i===0 ? content + ' ' + value[i].type.name : content + ' / ' + value[i].type.name;
        }
        cardText.textContent = content;
    } else {
        cardText.textContent = key + ': ' + value;
    }

    return cardText
}

function createCardBody(_data) {
    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    cardBody.appendChild(createCardTitle(_data.name));
    cardBody.appendChild(document.createElement('hr'));
    cardBody.appendChild(createCardText('Type', _data.types));
    cardBody.appendChild(document.createElement('hr'));
    cardBody.appendChild(createCardText('Number', _data.number));

    return cardBody
}

function createCards(_pokemonArray) {
    let container = document.querySelector('#cardsContainer');
    container.innerHTML = '';
    for (let i=0; i<_pokemonArray.length; i++) {
        let pokemon = document.createElement('card');
        pokemon.classList.add('card', 'cards', 'text-white');
        pokemon.id = _pokemonArray[i].number;
        pokemon.appendChild(createImageItem(_pokemonArray[i].imageUrl, _pokemonArray.name));
        pokemon.appendChild(createCardBody(_pokemonArray[i]));
        container.appendChild(pokemon);
    }
}

//API requests
function createPokemonPromises() {
    container.innerHTML = '<h1 class="text-white bg-dark">...Loading Pokemon...</h1>';
    for (let i=1; i<=PokemonTotalNumber; i++) {
        promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`));
    }
    Promise.all(promises)
        .then((res) => {
            Promise.all(res.map((item) => {
                return item.json();
            }))
            .then(data => orderPokemonDataStructure(data));
        })
        .catch((e) => {
            console.log('There was an error in the multiple fetch');
        })
    }

function requestPokemonByType(_type) {
    fetch(`https://pokeapi.co/api/v2/type/${_type}/`)
        .then(res => res.json())
            .then(data => orderPokemonByType(data.pokemon));
}

createPokemonPromises();

//Events
function searchPokemon (event) {
    event.preventDefault();
    let pokemonName = document.getElementById('searchPokemonByName').value;
    searchPokemonName(pokemonName);
};

function allPokemons () {
    createCards(pokemonArray);
}

function searchByType(type) {
    container.innerHTML = '<h1 class="text-white bg-dark">...Loading Pokemon...</h1>';
    requestPokemonByType(type);
}