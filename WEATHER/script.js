// const apiKey = "2dc40c050620627014299fd12faeb051";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q";

// const searchBox = document.querySelector('.searchb input');
// const btn = document.querySelector('.searchb button');
// const weather = document.querySelector
//     ('.weather')

// async function getWeatherData(city) {
//     const response = await fetch(apiUrl + `=${city}` + `&appid=${apiKey}`);
//     var data = await response.json();
//     weather.removeAttribute('id')

//     console.log(data);
//     document.querySelector('.city').innerHTML = (data.name);
//     document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
//     document.querySelector('.humidity').innerHTML = (data.main.humidity) + "%";
//     document.querySelector('.wind').innerHTML = (data.wind.speed) + "km/h";

//     if (data.weather[0].main === "Clouds") {
//         document.querySelector('.weather-icon img').src = "clouds.png";
//         document.body.style.backgroundImage = "clouddd.jpg"
//     }
//     if (data.weather[0].main == "Rain") {
//         document.querySelector('.weather img').src = "rain.png";
//     }
//     if (data.weather[0].main == "Clear") {
//         document.querySelector('.weather img').src = "clear.png";
//     }
//     if (data.weather[0].main == "Snow") {
//         document.querySelector('.weather img').src = "snow.png";
//     }
//     if (data.weather[0].main == "Drizzle") {
//         document.querySelector('.weather img').src = "drizzle.png";
//     }
//     if (data.weather[0].main == "Mist") {
//         document.querySelector('.weather img').src = "mist.png";
//     }
//     if (data.weather[0].main == "Thunderstorm") {
//         document.querySelector('.weather img').src = "thunderstorms.png";
//     }

// }
// btn.addEventListener('click', () => {
//     if (searchBox.value == "") {
//         alert("Enter City Name");
//     }
//     else
//         getWeatherData(searchBox.value);
//     searchBox.value = "";
// });
// getWeatherData("bengaluru")

// searchBox.addEventListener('keypress', (e) => {
//     if (e.key == "Enter") {
//         if (searchBox.value == "") {
//             alert("Enter City Name");
//         }
//         else
//             getWeatherData(searchBox.value);
//         searchBox.value = "";
//     }
// });

const apiKey = "2dc40c050620627014299fd12faeb051";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector('.searchb input');
const btn = document.querySelector('.searchb button');
const weather = document.querySelector('.weather');
const nweather = document.querySelector('.cweather')

async function getWeatherData(city) {
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        if (!response.ok) {
            throw new Error("City not found");
        }
        const data = await response.json();
        weather.removeAttribute('id');

        console.log(data);
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";

        // Selecting the correct image container
        const weatherIcon = document.querySelector('.weather img');

        if (data.weather[0].main === "Clouds") {
            weatherIcon.src = "clouds.png";
            document.body.style.backgroundImage = "url('orcloud.jpg')";
            nweather.innerText="Clouds"


        } else if (data.weather[0].main === "Rain") {
            weatherIcon.src = "rain.png";
            document.body.style.backgroundImage = "url('rainy.jpg')";
             nweather.innerText="Rain"


        } else if (data.weather[0].main === "Clear") {
            weatherIcon.src = "clear.png";
            document.body.style.backgroundImage = "url('clear.jpg')";
             nweather.innerText="Clear"


        } else if (data.weather[0].main === "Snow") {
            weatherIcon.src = "snow.png";
            document.body.style.backgroundImage = "url('snowy.jpg')";
             nweather.innerText="Snow";


        } else if (data.weather[0].main === "Drizzle") {
            weatherIcon.src = "drizzle.png";
            document.body.style.backgroundImage = "url('drizzle.jpg')";
             nweather.innerText="Drizzle"


        } else if (data.weather[0].main === "Mist") {
            weatherIcon.src = "mist.png";
            document.body.style.backgroundImage = "url('Mist.jpg')";
             nweather.innerText="Mist"

        } else if (data.weather[0].main === "Thunderstorm") {
            weatherIcon.src = "thunderstorms.png";
            document.body.style.backgroundImage = "url('thunder.jpg')";
             nweather.innerText="Thunderstrom"


        } else {
            weatherIcon.src = "default.png"; // Default image for unknown conditions
        }
    } catch (error) {
        alert(error.message);
    }
}

btn.addEventListener('click', () => {
    if (searchBox.value.trim() === "") {
        alert("Enter City Name");
    } else {
        getWeatherData(searchBox.value);
        searchBox.value = "";
    }
});

searchBox.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        if (searchBox.value.trim() === "") {
            alert("Enter City Name");
        } else {
            getWeatherData(searchBox.value);
            searchBox.value = "";
        }
    }
});

// Initial Call
getWeatherData("bengaluru");
