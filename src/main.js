import "./style/styles.css";

const clickMeButton = document.querySelector("button");
clickMeButton.addEventListener("click", () => {
    const api =
        "http://api.weatherapi.com/v1/forecast.json?key=81118de3a27c4287bd233838231611&q=63101&days=3&aqi=no&alerts=no";
    fetch(api, { mode: "cors" })
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            console.log(response);
        });
});

// Current API 
// http://api.weatherapi.com/v1/current.json?key=81118de3a27c4287bd233838231611&q=63101&aqi=no
// Forecast API
// http://api.weatherapi.com/v1/forecast.json?key=81118de3a27c4287bd233838231611&q=63101&days=3&aqi=no&alerts=no