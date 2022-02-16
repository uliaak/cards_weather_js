let block = document.querySelector(".city-card");
let city = document.querySelector('.city-name');
let cityTemp = document.querySelector('.city-temp');
let feelsLike = document.querySelector('.feels-like');
let btn = document.querySelector('.btn');
let apiKey = 'bf35cac91880cb98375230fb443a116f';

async function getData(url) {
    
    const response = await fetch(url);
    if(response.status==200)
    {
        const data  = await response.json()
        return data;
    }
    else {
        throw new Error('Something happened. City not found :(');
    }
};

class cityWeather {
    constructor(info) {
        this.city = info.name;
        this.cityTemp = info.main.temp;
        this.feelsLike = info.main.feels_like;
    }
}

class Utils {
    ConvertTempFromKtoC(tempinK) {
        const tempinC = Math.round(tempinK-273);
        return tempinC;
    }
}

btn.addEventListener('click', async function(e) {
    e.preventDefault();
    let input = document.getElementById("inputCity").value;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}`;
    let dataInfo = await getData(url)
    .catch(function(e){
        city.textContent = '';
        cityTemp.innerHTML = '';
        feelsLike.innerHTML = '';
        let errorSpace = document.createElement('p');
        errorSpace.className = 'error-message';
        errorSpace.textContent = e.message;
        block.prepend(errorSpace); 
        
        setTimeout(function() {
            block.firstChild.remove();   
        }, 3000) 
    });
    let infoChild = new cityWeather(dataInfo);
    let utilsChild = new Utils();
    city.textContent = infoChild.city;
    cityTemp.innerHTML = 'TEMPERATURE: ' + utilsChild.ConvertTempFromKtoC(infoChild.cityTemp) + '&deg';
    feelsLike.innerHTML = 'FEELS LIKE: ' + utilsChild.ConvertTempFromKtoC(infoChild.feelsLike) + '&deg';
});




