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

class showInfo {
    constructor(info, city, cityTemp, feelsLike) {
        this.info = info;
        this.city = city;
        this.cityTemp = cityTemp;
        this.feelsLike = feelsLike;
    }
    show() {
        this.city.textContent = this.info.name;
        this.cityTemp.innerHTML = 'TEMPERATURE: ' + Math.round(this.info.main.temp-273) + '&deg';
        this.feelsLike.innerHTML = 'FEELS LIKE: ' + Math.round(this.info.main.feels_like-273) + '&deg';
    }
}

btn.addEventListener('click', async function(e) {
    e.preventDefault();
    let form = document.forms[0];
    let input = document.getElementById("inputCity").value;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}`
    //getData(url);
    let dataInfo = await getData(url);
    let infoChild = new showInfo(dataInfo, city, cityTemp, feelsLike);
    infoChild.show(); 
});




