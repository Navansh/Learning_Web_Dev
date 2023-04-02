const API_KEY = "5202e184eaa8737863c454c7beea0306";

function renderWeatherInfo(data) {
    let newPara = document.createElement("p");
    newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;
    document.body.appendChild(newPara);
}

async function fetchWeatherDetails(){
    // let latitude = 15.333;
    // let longitude = 74.333;

    try{
        let city = "goa";
    
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

        const data = await response.json();
        //now while doing these both(fetch and json conversion) we might get an error
        //so we need to handle that error by putting it in try catch block
        console.log("Weather data -> ", data);

        // let newPara = document.createElement("p");
        // newPara.innerHTML = `The weather in ${city} is ${data.weather[0].description} with a temperature of ${data.main.temp} degrees celcius.`;
        // newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;

         // document.body.appendChild(newPara);

        renderWeatherInfo(data);

         //    *** IT is a characteristic of a good function to do only one thing, hence we won't process the data here,
        //  we will do it in another function
    } 
    catch(err){
        //handle the error here
        console.log("Error Found -> ", err);
    }

    
}