const displayWeatherForecast = (city) => {
    const forecastEndpoint = getForecastEndpoint(city)

    fetch(forecastEndpoint).then(res => {
        res.json().then(data => {
            const forecastElement = document.querySelector('.weather-forecast');
            forecastElement.innerHTML = '';
            const { list } = data;

            const daysMap = {};
            list.forEach((element) => {
                const { dt } = element;
                const day = getDayOfTheWeek(dt);

                if(daysMap[day]) {
                    daysMap[day].push(element);
                } else {
                    daysMap[day] = [element];
                }
            });

            for (key in daysMap) {
                forecastElement.innerHTML += `<h3 class="text-primary">${key}</h3>`;

                const dayHours = daysMap[key];

                dayHours.forEach(element => {
                    const {dt, main, weather} = element;

                    const hour = getHour(dt);
                    const weatherIcon = getWeatherLink(weather[0].icon)
                    const temperature = Math.round(main.temp);
                    const weatherDescription = weather[0].description;
                    const realFeel = Math.round(main.feels_like);
                    forecastElement.innerHTML += `
                        <div class="weather-forecast-box flex-wrap w-100 d-flex justify-content-between align-items-center border rounded p-3 mb-3">
                            <div class="mx-1 my-2 fw-bold">${hour}</div>
                            <div class="mx-1 my-2"><img src="${weatherIcon}" alt="" /></div>
                            <div class="fs-2 mx-1 my-2"><strong>${temperature}°</strong></div>
                            <div class="mx-1 my-2">${weatherDescription}</div>
                            <div class="mx-1 my-2">Real feel: <strong class="fw-bold">${realFeel}°C</strong></div>
                        </div>
                    `;
                });
            };
        });
    });
};
