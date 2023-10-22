// CONSUMO DE API
let lon;
let lat;
let temperatura = document.querySelector(".temp");
let resumen = document.querySelector(".summary");
let locacion = document.querySelector(".location");
const KELVIN = 273.15;


window.addEventListener('load', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position);
            lon = position.coords.longitude;
            lat = position.coords.latitude;

            const API = "89cd84c888b22e54cdac823764009dbc";

            const URL_base = "https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=89cd84c888b22e54cdac823764009dbc";

            fetch(URL_base)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    console.log("Esta es la data", data);

                    temperatura.textContent = Math.floor(data.main.temp - KELVIN) + "°C";
                    resumen.textContent = data.weather[0].description;
                    locacion.textContent = data.name + "," + data.sys.country;
                })
                .catch(error => {
                    console.log(error);
                })
        });
    }

});