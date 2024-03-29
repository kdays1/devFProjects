const PokemonTotalNumber = 151;
let pokemonArray = [];
let orderedPokemonArray = [];
const promises = [];

// Protoype Region
function pokemonProtoype(name, imageUrl, types, number) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.types = types;
    this.number = number;
}
//End Protoype Region

//Private Functions Region
function orderPokemonByName() {
    orderedPokemonArray = [...pokemonArray];
    const n = orderedPokemonArray.length;
    for (let i = 1; i < n; i++) {
        let currentElement = orderedPokemonArray[i];
        let j = i - 1;

        while (j >= 0 && orderedPokemonArray[j].name > currentElement.name) {
            orderedPokemonArray[j + 1] = orderedPokemonArray[j];
            j--;
        }

        orderedPokemonArray[j + 1] = currentElement;
    }
}

function orderPokemonData(allPokemonInfo) {
    for(let i=0;i<allPokemonInfo.length;i++) {
        let name= allPokemonInfo[i].name;
        let imageUrl= allPokemonInfo[i].sprites.front_default;
        let types= allPokemonInfo[i].types;
        let number= allPokemonInfo[i].id;
        pokemonArray.push(new pokemonProtoype(name, imageUrl, types, number));
    }
    createCards(pokemonArray);
    orderPokemonByName(pokemonArray);
}

function createPokemonPromises() {
    for (let i=1; i<=PokemonTotalNumber; i++) {
        promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`));
    }
    Promise.all(promises)
        .then((res) => {
            Promise.all(res.map((item) => {
                return item.json();
            }))
            .then(data => orderPokemonData(data));
        })
        .catch((e) => {
            console.log('There was an error in the multiple fetch');
        })
    }

createPokemonPromises();

function createImageItem(url, name) {
    let img = document.createElement('img');
    img.src = url;
    img.alt = name;
    img.classList.add('card-img-top', 'cardPictures');

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
        pokemon.classList.add('card', 'cards');
        pokemon.id = _pokemonArray[i].number;
        pokemon.appendChild(createImageItem(_pokemonArray[i].imageUrl, _pokemonArray.name));
        pokemon.appendChild(createCardBody(_pokemonArray[i]));
        container.appendChild(pokemon);
    }
}

function searchPokemonName(_pokemon) {
    let startIndex  = 0,
        stopIndex   = orderedPokemonArray.length - 1,
        middle      = Math.floor((stopIndex + startIndex)/2);

    while(orderedPokemonArray[middle].name != _pokemon && startIndex < stopIndex){
        if (_pokemon < orderedPokemonArray[middle].name){
            stopIndex = middle - 1;
        } else if (_pokemon > orderedPokemonArray[middle].name){
            startIndex = middle + 1;
        }
        middle = Math.floor((stopIndex + startIndex)/2);
    }
    createCards([orderedPokemonArray[middle]]);
}
//End Private Functions Region

//Events Region
function searchPokemon (event) {
    event.preventDefault();
    let pokemonName = document.getElementById('searchPokemonByName').value;
    searchPokemonName(pokemonName);
};

function allPokemons () {
    createCards(pokemonArray);
}
//End events region