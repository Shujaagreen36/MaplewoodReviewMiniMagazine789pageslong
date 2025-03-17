async function getWeather() {
    const apiKey = 'b987ca35e366ef12b30c488495b934f7'; // Replace with your API key
    const city = 'Stanley'; // Change to desired city
    const country = 'FK'; // Change to country code
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Stanley,FK&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        document.getElementById("weather").innerHTML = `
            <h2>${data.name}, ${data.sys.country}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        document.getElementById("weather").innerHTML = "<p>Failed to load weather.</p>";
    }
}

window.onload = getWeather;
