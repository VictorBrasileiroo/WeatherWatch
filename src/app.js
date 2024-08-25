let inputWeather = document.querySelector("#city_name");
let btn = document.querySelector("#get_weather");
let outputWeather = document.querySelector("#weather_info");
let outputName = document.querySelector('.NomedaCidade');
let containerOutput = document.querySelector('.container_text_output');
let imgWeather = document.querySelector('.img_clima');
let column = document.querySelector('.hr');

btn.addEventListener('click', () => {
    let cityName = inputWeather.value;
    let apiKey = '9e0a5b8a64a7d4e4d08089da2a9650b7';

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)
        .then(response => {
            // Ativa componentes
            containerOutput.classList.add('active');
            column.classList.add('active2');

            // Atualiza informações da API
            let data = response.data;
            outputWeather.innerHTML = `Temperatura: ${data.main.temp}°C / Humidade: ${data.main.humidity}% / Clima: ${data.weather[0].description}`;
            outputName.innerHTML = data.name;

            // Atualiza imagem de acordo com a temperatura
            if (data.main.temp > 25) {
                imgWeather.src = 'https://cdn-icons-png.flaticon.com/512/979/979534.png'; 
            } else if (data.main.temp >= 15 && data.main.temp <= 25) {
                imgWeather.src = 'https://cdn-icons-png.flaticon.com/512/1663/1663149.png';
            } else {
                imgWeather.src = 'https://static.vecteezy.com/system/resources/previews/017/059/470/non_2x/snowflake-sign-free-png.png'; 
            }
        })
        .catch(error => {
            console.error(error);
        });
});
