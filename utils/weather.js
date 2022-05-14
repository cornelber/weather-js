const getWeatherLink = (iconCode) => {
    return `http://openweathermap.org/img/wn/${iconCode}@2x.png`
}

const windToKmPerHour = (metersPerSeconds) => {
    return (metersPerSeconds * 3600) / 1000;
}