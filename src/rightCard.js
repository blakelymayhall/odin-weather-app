import { days } from "./weatherApp";

const rightCardFactory = (weatherAppInterface) => {
    // Right Card
    //------------------------------------------------------------------------
    const genCards = () => {
        const hourCard = document.querySelector(".hourCard");
        for (let hourCount = 1; hourCount < 24; hourCount++) {
            const newCard = hourCard.cloneNode(true);
            newCard.dataset.hour = hourCount;

            let civTimeHour = hourCount > 12 ? hourCount - 12 : hourCount;
            let ampm = hourCount > 12 ? "PM" : "AM";
            newCard.querySelector(".hour").textContent =
                `${civTimeHour}:00 ${ampm}`;

            document.querySelector("#rightCard").appendChild(newCard);
        }
    };

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
        for (let hourCount = 0; hourCount < 24; hourCount++) {
            const hourCard = document.querySelector(
                `[data-hour="${hourCount}"]`,
            );
            hourCard.querySelector(".temp").innerHTML =
                weatherData.hour[hourCount].temp_f + "&degF";
        }

        // TODO finish filling this out
    };
    //------------------------------------------------------------------------

    // Init
    //------------------------------------------------------------------------
    genCards();
    //------------------------------------------------------------------------

    return {
        genCards,
        updateData,
    };
};

export { rightCardFactory };
