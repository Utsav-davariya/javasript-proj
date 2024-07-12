



document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('weather-form');
    const cityInput = document.getElementById('city');
    const weatherDisplay = document.getElementById('weather-display');
    const apiKey = '73d485c3e18770af4124768146b5e3a1'; // Replace with your OpenWeatherMap API key

    form.addEventListener('submit', fetchWeather);

    async function fetchWeather(event) {
        event.preventDefault();
        const city = cityInput.value;
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
            if (!response.ok) {
                throw new Error('City not found');
            }
            const data = await response.json();
            displayWeather(data);
            console.log(data);
        } catch (error) {
            weatherDisplay.innerHTML = `<p class="error">${error.message}</p>`;
        }
    }

    function displayWeather(weather) {
        weatherDisplay.innerHTML = `
            <h2>Weather in ${weather.name}</h2>
            <p>Temperature: ${Math.round(weather.main.temp)} °C</p>
            <p>Humidity: ${weather.main.humidity} %</p>
            <p>Conditions: ${weather.weather[0].description}</p>
          
        `;
    }
});
