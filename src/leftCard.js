const leftCardFactory = (weatherAppInterface) => {
    // Left Card
    //------------------------------------------------------------------------
    const updateData = () => {
        const weatherData = weatherAppInterface.getWeatherData();
        document.querySelector("#leftCardCondition").src =
            weatherData.current.condition.icon;
        // Load your own icons based on code number and isNight
        document.querySelector("#conditionVal").textContent =
            weatherData.current.condition.text;
        // TODO finish filling this out
    };
    //------------------------------------------------------------------------

    return {
        updateData,
    };
};

export { leftCardFactory };
