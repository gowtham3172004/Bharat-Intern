const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=YOUR_CITY_NAME&units=metric&appid=${apiKey}`;

const locationElement = document.getElementById('location');
const tempElement = document.querySelector('.temp-value');
const descriptionElement = document.querySelector('.weather-description');
const humidityElement = document.querySelector('.humidity');
const windElement = document.querySelector('.wind-speed');

// Fetch weather data from API
fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    return response.json();
  })
  .then((data) => {
    displayWeather(data);
  })
  .catch((error) => {
    console.error('There was a problem fetching the weather data:', error);
  });

// Display weather data on the webpage
function displayWeather(data) {
  locationElement.textContent = `${data.name}, ${data.sys.country}`;
  tempElement.textContent = `${data.main.temp}°C`;
  descriptionElement.textContent = data.weather[0].description;
  humidityElement.textContent = `${data.main.humidity}%`;
  windElement.textContent = `${data.wind.speed} m/s`;
}
