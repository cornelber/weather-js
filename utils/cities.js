const cityList = document.querySelector('.city-list');
const citiesListToDisplay = [
    'București',
    'Cluj-Napoca',
    'Timișoara',
    'Constanța',
    'Craiova',
    'Galați',
    'Ploiești',
    'Brăila',
    'Bacău',
    'Pitești',
    'Târgu Mureș',
    'Baia Mare',
    'Buzău',
    'Botoșani',
    'Satu Mare',
    'Suceava',
    'Piatra Neamț',
    'Târgu Jiu',
    'Focșani',
    'Bistrița',
    'Tulcea',
    'Reșița',
    'Călărași',
    'Alba Iulia',
    'Giurgiu',
    'Hunedoara',
    'Vaslui',
    'Roman',
    'Turda',
    'Brașov',
    'Oradea',
    'Sibiu',
    'Arad',
    'Iași',
]

const displayCityToDOM = (cities) => {
    cities.forEach(element => {
        const cityItem = document.createElement('li')

        const cityButton = document.createElement('button')
        cityButton.innerText = element;
        cityButton.classList.add('dropdown-item')
        cityButton.classList.add('city')
        
        cityItem.appendChild(cityButton)
        cityList.appendChild(cityItem);
    })
}

displayCityToDOM(citiesListToDisplay);


