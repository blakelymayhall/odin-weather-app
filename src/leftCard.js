import { days } from "./weatherApp";

const leftCardFactory = (weatherAppInterface) => {
    // Left Card
    //------------------------------------------------------------------------
    const updateData = () => {
        // Get the particular day we are looking for
        let weatherData = weatherAppInterface.getWeatherData();
        let weatherDataDay = null;
        switch (weatherAppInterface.getChosenDay()) {
            case days.TOMORROW:
                weatherDataDay = weatherData.forecast.forecastday[1];
                break;
            case days.FOLLOWING_DAY:
                weatherDataDay = weatherData.forecast.forecastday[2];
                break;
            default:
                weatherDataDay = weatherData.forecast.forecastday[0];
        }

        // Populate the data
        document.querySelector("#leftCardCondition").src =
            weatherAppInterface.getChosenDay() == days.TODAY
                ? weatherData.current.condition.icon
                : weatherDataDay.day.condition.icon;
        // Load your own icons based on code number and isNight
        // TODO finish filling this out consider the settings
        document.querySelector("#conditionVal").textContent =
            weatherAppInterface.getChosenDay() == days.TODAY
                ? weatherData.current.condition.text
                : weatherDataDay.day.condition.text;
        document.querySelector("#tempVal").textContent =
            (weatherAppInterface.getSettings().temp == "F"
                ? weatherDataDay.day.avgtemp_f
                : weatherDataDay.day.avgtemp_c) +
            "°" +
            weatherAppInterface.getSettings().temp;
        document.querySelector("#tempHiVal").textContent =
            (weatherAppInterface.getSettings().temp == "F"
                ? weatherDataDay.day.maxtemp_f
                : weatherDataDay.day.maxtemp_c) +
            "°" +
            weatherAppInterface.getSettings().temp;
        document.querySelector("#tempLoVal").textContent =
            (weatherAppInterface.getSettings().temp == "F"
                ? weatherDataDay.day.mintemp_f
                : weatherDataDay.day.mintemp_c) +
            "°" +
            weatherAppInterface.getSettings().temp;
        document.querySelector("#windVal").textContent =
            weatherAppInterface.getSettings().metric
                ? weatherDataDay.day.maxwind_kph + " kph"
                : weatherDataDay.day.maxwind_mph + " mph";
        document.querySelector("#humVal").textContent =
            weatherDataDay.day.avghumidity;
        document.querySelector("#visVal").textContent =
            weatherAppInterface.getSettings().metric
                ? weatherDataDay.day.avgvis_km + " km"
                : weatherDataDay.day.avgvis_miles + " miles";
        document.querySelector("#rainVal").textContent =
            weatherDataDay.day.daily_chance_of_rain;
        document.querySelector("#snowVal").textContent =
            weatherDataDay.day.daily_chance_of_snow;
        document.querySelector("#sunriseVal").textContent =
            weatherDataDay.astro.sunrise;
        document.querySelector("#sunsetVal").textContent =
            weatherDataDay.astro.sunset;
    };
    //------------------------------------------------------------------------

    // Init
    //------------------------------------------------------------------------
    updateData();
    //------------------------------------------------------------------------

    return {
        updateData,
    };
};

export { leftCardFactory };
