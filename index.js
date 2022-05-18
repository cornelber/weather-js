const currentCityElement = document.querySelector('.current-city');
let currentCity = localStorage.getItem('city');

if(!currentCity) {
    localStorage.setItem('city', 'București');
    currentCity = 'București';
} 

updateWeather(currentCity);