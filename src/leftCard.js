import { days } from "./weatherApp";

const leftCardFactory = (weatherAppInterface) => {
    // Left Card
    //------------------------------------------------------------------------
    const updateData = () => {
        // Get the particular day we are looking for
        let weatherData = weatherAppInterface.getWeatherData();
        switch (weatherAppInterface.getChosenDay()) {
            case days.TOMORROW:
                weatherData = weatherData.forecast.forecastday[1];
                break;
            case days.FOLLOWING_DAY:
                weatherData = weatherData.forecast.forecastday[2];
                break;
            default:
                weatherData = weatherData.forecast.forecastday[0];
        }

        // Populate the data
        document.querySelector("#leftCardCondition").src =
            weatherData.day.condition.icon;
        // Load your own icons based on code number and isNight
        // TODO finish filling this out consider the settings
        document.querySelector("#conditionVal").textContent =
            weatherData.day.condition.text;
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
