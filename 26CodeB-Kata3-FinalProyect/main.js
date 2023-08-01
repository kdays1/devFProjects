const PokemonTotalNumber = 151;

const data = [
    {
        name: 'nombre X',
        imageUrl: './_img/dratini.png',
        type: ['Dragon'],
        number: '147'
    },
    {
        name: 'nombre X',
        imageUrl: './_img/dratini.png',
        type: ['Dragon'],
        number: '147'
    },
    {
        name: 'nombre X',
        imageUrl: './_img/dratini.png',
        type: ['Dragon'],
        number: '147'
    },
    {
        name: 'nombre X',
        imageUrl: './_img/dratini.png',
        type: ['Dragon'],
        number: '147'
    },
    {
        name: 'nombre X',
        imageUrl: './_img/dratini.png',
        type: ['Dragon'],
        number: '147'
    },
    {
        name: 'nombre X',
        imageUrl: './_img/dratini.png',
        type: ['Dragon'],
        number: '147'
    },
    {
        name: 'nombre X',
        imageUrl: './_img/dratini.png',
        type: ['Dragon'],
        number: '147'
    },
    {
        name: 'nombre X',
        imageUrl: './_img/dratini.png',
        type: ['Dragon'],
        number: '147'
    },
    {
        name: 'nombre X',
        imageUrl: './_img/dratini.png',
        type: ['Dragon'],
        number: '147'
    },
    {
        name: 'nombre X',
        imageUrl: './_img/dratini.png',
        type: ['Dragon'],
        number: '147'
    },
    {
        name: 'nombre X',
        imageUrl: './_img/dratini.png',
        type: ['Dragon'],
        number: '147'
    },
    {
        name: 'nombre X',
        imageUrl: './_img/dratini.png',
        type: ['Dragon'],
        number: '147'
    },
    {
        name: 'nombre X',
        imageUrl: './_img/dratini.png',
        type: ['Dragon'],
        number: '147'
    },
    {
        name: 'nombre X',
        imageUrl: './_img/dratini.png',
        type: ['Dragon'],
        number: '147'
    },
    {
        name: 'nombre X',
        imageUrl: './_img/dratini.png',
        type: ['Dragon'],
        number: '147'
    }
]

//Private Functions Region
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

function createCardText(types, number) {
    let cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = 'Number: ' + number;

    return cardText
}

function createCardBody(_data) {
    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    cardBody.appendChild(createCardTitle(_data.name));
    cardBody.appendChild(createCardText(_data.types, _data.id))

    return cardBody
}

function createCards() {
    let container = document.querySelector('#cardsContainer');
    for (let i=1; i<=PokemonTotalNumber; i++) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
      .then((res) => res.json())
      .then((pokemonFetched) => {
        let pokemon = document.createElement('card');
        pokemon.classList.add('card', 'cards');
        pokemon.id = i;
        pokemon.appendChild(createImageItem(pokemonFetched.sprites.front_default, pokemonFetched.name));
        pokemon.appendChild(createCardBody(pokemonFetched));
        container.appendChild(pokemon);
      });
    }
}
//End Private Functions Region


//Events Region
document.addEventListener('DOMContentLoaded', function(evt) {
    createCards();
})
//End events region

function fetchPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => res.json())
      .then((data) => {
        
      });
  }