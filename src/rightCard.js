import { days } from "./weatherApp";
import arrowImg from "./imgs/icons8-arrow-100.png";

const rightCardFactory = (weatherAppInterface) => {
    // Right Card
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
        _colorCards();
        _scrollToCurrent();

        // Populate the data
        for (let hourCount = 0; hourCount < 24; hourCount++) {
            const hourCard = document.querySelector(
                `[data-hour="${hourCount}"]`
            );
            hourCard.querySelector(".temp").textContent =
                (weatherAppInterface.getSettings().temp == "F"
                    ? weatherDataDay.hour[hourCount].temp_f
                    : weatherDataDay.hour[hourCount].temp_c) +
                "°" +
                weatherAppInterface.getSettings().temp;
            hourCard.querySelector(".condition").src =
                weatherDataDay.hour[hourCount].condition.icon;
            hourCard.querySelector(".windVal").textContent =
                weatherAppInterface.getSettings().metric
                    ? weatherDataDay.hour[hourCount].wind_kph + " kph"
                    : weatherDataDay.hour[hourCount].wind_mph + " mph";
            hourCard.querySelector(".windArrow").src = arrowImg;
            hourCard.querySelector(".windArrow").style.cssText =
                `transform: rotate(${
                    weatherDataDay.hour[hourCount].wind_degree - 90
                }deg);`;
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
            hourCard.style.cssText = "background: rgb(121, 198, 231);";
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
        if (weatherAppInterface.getChosenDay() == days.TODAY) {
            // Scroll 110px per hour
            const rightCard = document.querySelector("#rightCard");
            rightCard.scrollTo(
                0,
                Math.min(new Date().getHours() * 110, rightCard.scrollHeight)
            );
        }
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
