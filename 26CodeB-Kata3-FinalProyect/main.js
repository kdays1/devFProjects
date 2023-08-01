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

function createCardText(type, number) {
    let cardText = document.createElement('p');
    cardText.classList.add('card-text');
    cardText.textContent = 'Number: ' + number;

    return cardText
}

function createCardBody(_data) {
    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    cardBody.appendChild(createCardTitle(_data.name));
    cardBody.appendChild(createCardText(_data.type, _data.number))

    return cardBody
}

function createCards() {
    let container = document.querySelector('#cardsContainer');
    for (let i=0; i<data.length;i++) {
        let pokemon = document.createElement('card');
        pokemon.classList.add('card', 'cards');
        pokemon.id = i;
        pokemon.appendChild(createImageItem(data[i].imageUrl, data[i].name));
        pokemon.appendChild(createCardBody(data[i]));
        container.appendChild(pokemon);
    }
}
//End Private Functions Region


//Events Region
document.addEventListener('DOMContentLoaded', function(evt) {
    createCards();
})
//End events region