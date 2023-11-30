// Header Bar Model
const headerBarData = () => {
    let settingsOpen = false;
    let locationChangeOpen = false;

    const toggleSettingsOpen = () => {
        settingsOpen = !settingsOpen;
    };

    const toggleLocationChangeOpen = () => {
        locationChangeOpen = !locationChangeOpen;
    };

    return {
        toggleSettingsOpen,
        toggleLocationChangeOpen,
    };
};

// Header Bar Controller
const headerBarFactory = () => {
    const data = headerBarData();

    const updateLocation = (location) => {
        document.querySelector("#headerBarLocation").textContent = location;
    };

    // __Support__
    //------------------------------------------------------------------------
    const _validateInput = (userInput) => {
        
    };
    //------------------------------------------------------------------------

    // Events
    //------------------------------------------------------------------------
    const changeLocationBtn = document.querySelector(
        "#headerBarChangeLocation",
    );
    changeLocationBtn.addEventListener("click", () => {
        const promptText =
            "Enter a Location Formatted: " +
            '"<City>, <Two-Letter State>"\ne.g. "St. Louis, MO"';
        const userInput = prompt(promptText);
        // Validate input
        // Post that the location has changed?
    });
    //------------------------------------------------------------------------


    return {
        data,
        updateLocation,
    };
};

export { headerBarFactory };
