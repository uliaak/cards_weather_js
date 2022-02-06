let city = document.querySelectorAll('.city-name');
/*let london = document.querySelector('.london-name');
let ny = document.querySelector('.ny-name');*/

let cityTemp = document.querySelectorAll('.city-temp');
/*let londonFeatures = document.querySelector('.london-features');
let nyFeatures = document.querySelector('.ny-features');*/

let feelsLike = document.querySelectorAll('.feels-like');

let btnKiev = document.querySelector('.btn1');
let btnLondon = document.querySelector('.btn2');
let btnNY = document.querySelector('.btn3');

let urlKiev = 'http://api.openweathermap.org/data/2.5/weather?id=703448&appid=bf35cac91880cb98375230fb443a116f';
let urlLondon = 'http://api.openweathermap.org/data/2.5/weather?id=2643743&appid=bf35cac91880cb98375230fb443a116f';
let urlNY = 'http://api.openweathermap.org/data/2.5/weather?id=5128638&appid=bf35cac91880cb98375230fb443a116f';

btnKiev.addEventListener('click', function() {
    getData(urlKiev);
});
btnLondon.addEventListener('click', function() {
    getData(urlLondon);
});
btnNY.addEventListener('click', function() {
    getData(urlNY);
});

async function getData(url) {

    const response = await fetch(url)
    .catch(function(e) {
        console.log(e.message)
    });
    const data  = await response.json();
    if(url == urlKiev)
        {
            city[0].textContent = data.name;
            cityTemp[0].innerHTML = 'TEMPERATURE: ' + Math.round(data.main.temp-273) + '&deg';
            feelsLike[0].innerHTML = 'FEELS LIKE: ' + Math.round(data.main.feels_like-273) + '&deg'; 
        }
        else if (url == urlLondon)
        {
            city[1].textContent = data.name;
            cityTemp[1].innerHTML = 'TEMPERATURE: ' + Math.round(data.main.temp-273) + '&deg';
            feelsLike[1].innerHTML = 'FEELS LIKE: ' + Math.round(data.main.feels_like-273) + '&deg'; 
        }
        else if(url == urlNY)
        {
            city[2].textContent = data.name;
            cityTemp[2].innerHTML = 'TEMPERATURE: ' + Math.round(data.main.temp-273) + '&deg';
            feelsLike[2].innerHTML = 'FEELS LIKE: ' + Math.round(data.main.feels_like-273) + '&deg'; 
        }       
};



