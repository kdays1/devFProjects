const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const countrySearchResult = document.getElementById('countrySearchResults');

//private functions region
function searchCountries(query) {
    fetch(`https://restcountries.com/v3.1/name/${query}`)
        .then(res => res.json())
        .then(data => {
            countrySearchResult.innerHTML = '';
            if(data.status == '404') {
                countrySearchResult.innerHTML = `<div class="grid-container"><p>Country '${query}' not found</p></div>`
            } else {
                data.forEach(country => {
                    const countryCard = document.createElement('card');
                    countryCard.classList.add('countryCard', 'card')
                    countryCard.innerHTML = `
                    <img id="flag" src="${country.flags.png}"/>
                    <div class="card-body">
                        <h5 class="card-title">${country.name.common}</h5>
                        <h7 class="card-text">${country.name.official}</h7>
                        <hr>
                        <p class="card-text">Capital: ${country.capital.toString()}</p>
                        <p class="card-text">Region: ${country.region}</p>
                        <p class="card-text">Population: ${country.population}</p>
                    </div>
                    `

                    countrySearchResult.appendChild(countryCard);
                })
            }
        })
}

//Events region
searchButton.addEventListener('click', function() {
    const countryText = searchInput.value.trim();
    console.log(countryText);

    if (countryText.length >2) {
        searchCountries(countryText)
    } else {
        countrySearchResult.innerHTML = `<div class="grid-container"><p>Enter at least 3 characters</p></div>`
    }
})