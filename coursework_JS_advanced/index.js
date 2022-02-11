let city = document.querySelector('.city-name');
let cityTemp = document.querySelector('.city-temp');
let feelsLike = document.querySelector('.feels-like');
let btn = document.querySelector('.btn');
let apiKey = 'bf35cac91880cb98375230fb443a116f';

async function getData(url) {

    const response = await fetch(url)
    .catch(function(e) {
        console.log(e.message)
    });
    const data  = await response.json();
    console.log(data);
    return data;  
};

class cityWeather {
    constructor(info) {
        this.info = info;
        this.city = city;
        this.cityTemp = cityTemp;
        this.feelsLike = feelsLike;
    }
    calcData() {
        this.city = this.info.name;
        this.cityTemp = 'TEMPERATURE: ' + Math.round(this.info.main.temp-273) + '&deg';
        this.feelsLike = 'FEELS LIKE: ' + Math.round(this.info.main.feels_like-273) + '&deg';
    }
}

btn.addEventListener('click', async function(e) {
    e.preventDefault();
    let input = document.getElementById("inputCity").value;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}`;
    let dataInfo = await getData(url)
    .catch(function(e) {
        console.log(e.message)
    });
    let infoChild = new cityWeather(dataInfo);
    infoChild.calcData();
    city.textContent = infoChild.city;
    cityTemp.innerHTML = infoChild.cityTemp;
    feelsLike.innerHTML = infoChild.feelsLike;
});




