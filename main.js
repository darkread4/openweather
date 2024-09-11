const button = document.querySelector('.button');


button.addEventListener('click', () => {

    const city = document.querySelector('.input').value;
    const APIKey = '0e23dc21a9e7ecc0c11e8ad86d44e052';
    
    if(city === ''){
        return
    }


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ru&appid=${APIKey}`)
    .then(response => response.json())
    .then(data => {

        const cityName = document.querySelector('.city');
        const temp = document.querySelector('.temp');
        const descr = document.querySelector('.descr');
        const windSpeed = document.querySelector('.wind-speed');
        const icon = document.querySelector('.icon');
        const pressure = document.querySelector('.pressure');
        const wind = document.querySelector('.wind');


        cityName.textContent = data.name;
        temp.innerHTML = ` ${Math.round(data.main.temp)}<span>°C</span> `;
        descr.textContent = data.weather[0].description;
        pressure.textContent = data.main.pressure;
        windSpeed.innerHTML = `${data.wind.speed} <span>meter/sec</span>`;
        wind.innerHTML = `${data.wind.deg} <span>°C</span>`;
        icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">`;

        console.log(data);
    })


    // .then( function (response) {
    //      return response.json()
    // })
    // .then( function(data) {
    //     console.log(data.name);
    // })
});

window.addEventListener('load', () =>{
    button.click();
});


