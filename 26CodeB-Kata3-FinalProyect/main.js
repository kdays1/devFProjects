const PokemonTotalNumber = 151;
let pokemonArray= [];

function fetchPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => res.json())
      .then((data) => {
        let _pokemon = {
            name: data.name,
            imageUrl: data.sprites.front_default,
            types: data.types,
            number: data.id
        }
        //console.log(_pokemon);
        pokemonArray.push(_pokemon);
      });
  }

function fetchAllPokemon(){
    for (let i=1; i<=PokemonTotalNumber; i++) {
        fetchPokemon(i);
    }
}

fetchAllPokemon();
console.log(pokemonArray);

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

// function createCards() {
//     let container = document.querySelector('#cardsContainer');
//     for (let i=1; i<=PokemonTotalNumber; i++) {
//         fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
//         .then((res) => res.json())
//         .then((pokemonFetched) => {
//             let pokemon = document.createElement('card');
//             pokemon.classList.add('card', 'cards');
//             pokemon.id = i;
//             pokemon.appendChild(createImageItem(pokemonFetched.sprites.front_default, pokemonFetched.name));
//             pokemon.appendChild(createCardBody(pokemonFetched));
//             container.appendChild(pokemon);
//         });
//     }
// }
// //End Private Functions Region

function createCards() {
    let container = document.querySelector('#cardsContainer');
    for (let i=1; i<=PokemonTotalNumber; i++) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
        .then((res) => res.json())
        .then((pokemonFetched) => {
            let pokemon = document.createElement('card');
            pokemon.classList.add('card', 'cards');
            pokemon.id = pokemonArray[i].number;
            pokemon.appendChild(createImageItem(pokemonArray[i].imageUrl, pokemonArray.name));
            pokemon.appendChild(createCardBody(pokemonArray));
            container.appendChild(pokemon);
        }
    )}
}
//End Private Functions Region

//Events Region
document.addEventListener('DOMContentLoaded', function(evt) {
    createCards();
})
//End events region

