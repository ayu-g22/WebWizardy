window.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'f93f58c094c3d0295ee111451259b2e6'; // Replace with your OpenWeatherMap API Key
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=city,country&appid=${apiKey}`;

    fetch(weatherUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weather-widget');
            const temp = document.getElementById('temperature');
            const cityName = data.name;
            const country = data.sys.country;
            const temperature = Math.round(data.main.temp - 273.15); // Convert Kelvin to Celsius
            const description = data.weather[0].description;
			const condition = document.getElementById('condition')
			condition.innerHTML= description;
            temp.innerHTML=temperature;

        })
        .catch(error => console.error('Error fetching weather data:', error));
});