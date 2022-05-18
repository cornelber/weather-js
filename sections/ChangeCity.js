const cities = document.querySelectorAll('.dropdown-menu .city');

const updateCurrentCity = (city) => {
    const currentCityElement = document.querySelector('.current-city');
    currentCityElement.innerHTML = city;
}

const updateWeather = (city) => {
    updateCurrentCity(city);
    displayCurrentWeather(city);
    displayWeatherForecast(city);
    localStorage.setItem('city', city);
};

cities.forEach(city => {
    city.addEventListener('click', () => {
        updateWeather(city.innerText);
    })
})