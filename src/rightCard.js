import { days } from "./weatherApp";

const rightCardFactory = (weatherAppInterface) => {
    // Right Card
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
        _colorCards();

        // Populate the data
        for (let hourCount = 0; hourCount < 24; hourCount++) {
            const hourCard = document.querySelector(
                `[data-hour="${hourCount}"]`
            );
            hourCard.querySelector(".temp").innerHTML =
                weatherData.hour[hourCount].temp_f + "&degF";
        }

        // TODO finish filling this out  consider the settings
    };
    //------------------------------------------------------------------------

    // Support
    //------------------------------------------------------------------------
    const _genCards = () => {
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

    const _colorCards = () => {
        const hourCards = document.querySelectorAll(".hourCard");
        hourCards.forEach((hourCard) => {
            hourCard.style.cssText = "background: white";
        });

        if (weatherAppInterface.getChosenDay() == days.TODAY) {
            for (let hourCount = 0; hourCount < 24; hourCount++) {
                const hourCard = document.querySelector(
                    `[data-hour="${hourCount}"]`
                );
                if (hourCount < new Date().getHours()) {
                    hourCard.style.cssText = "background: grey";
                }
            }
        }
    };

    const _scrollToCurrent = () => {
        const rightCard = document.querySelector("#rightCard");
        rightCard.scrollTo(0, rightCard.scrollHeight); // TODO get the pixel in the container for the hour card
    };
    //------------------------------------------------------------------------

    // Init
    //------------------------------------------------------------------------
    _genCards();
    _colorCards();
    _scrollToCurrent();
    updateData();
    //------------------------------------------------------------------------
    return {
        updateData,
    };
};

export { rightCardFactory };
