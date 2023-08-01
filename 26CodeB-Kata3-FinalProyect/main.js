const PokemonTotalNumber = 151;
let pokemonArray= [];
const promises= [];

function pokemonProtoype(name, imageUrl, types, number) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.types = types;
    this.number = number;
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
            // createCards(pokemonArray);
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
    for (let i=0; i<PokemonTotalNumber; i++) {
        let pokemon = document.createElement('card');
        pokemon.classList.add('card', 'cards');
        pokemon.id = _pokemonArray[i].number;
        pokemon.appendChild(createImageItem(_pokemonArray[i].imageUrl, _pokemonArray.name));
        pokemon.appendChild(createCardBody(_pokemonArray[i]));
        container.appendChild(pokemon);
    }
}
//End Private Functions Region

//Events Region
// document.addEventListener('DOMContentLoaded', function(evt) {
//     createCards(pokemonArray);
// })
//End events region

