const headerBarFactory = (weatherAppInterface) => {
    // Header Bar
    //------------------------------------------------------------------------
    const updateLocation = () => {
        document.querySelector("#headerBarLocation").textContent =
            weatherAppInterface.getLocation();
    };
    //------------------------------------------------------------------------

    // Init
    //------------------------------------------------------------------------
    updateLocation();
    //------------------------------------------------------------------------

    // Support
    //------------------------------------------------------------------------
    const _getUserLocation = () => {
        const promptText =
            "Enter a Location Formatted: " +
            "<City>, <State/Country>\n" +
            'States may be abbreviated e.g. "St. Louis, MO"';
        return prompt(promptText);
    };

    const _validateLocation = (userInput) => {
        // eslint-disable-next-line no-useless-escape
        const pattern = /^[A-Za-z\s.]+\,\s*[A-Za-z\s]*$/;
        if (!pattern.test(userInput)) {
            const errMsg =
                "Input Error - Unexpected Input Values\n" +
                "Please enter city, state/country i.e.\nSt. Louis, MO";
            alert(errMsg);
        }
        return pattern.test(userInput);
    };
    //------------------------------------------------------------------------

    // Events
    //------------------------------------------------------------------------
    const changeLocationBtn = document.querySelector(
        "#headerBarChangeLocation",
    );
    changeLocationBtn.addEventListener("click", () => {
        const userInput = _getUserLocation();
        if (_validateLocation(userInput)) {
            weatherAppInterface.updateLocation(userInput);
        }
    });

    const settingsBtn = document.querySelector("#headerBarSettings");
    settingsBtn.addEventListener("click", () => {
        document.querySelector("#settingsOverlay").style.display = "flex";
        weatherAppInterface.toggleSettingsOpen();
    });
    //------------------------------------------------------------------------

    return {
        updateLocation,
    };
};

export { headerBarFactory };
