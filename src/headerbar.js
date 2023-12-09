const headerBarFactory = (weatherAppInterface) => {
    // Header Bar
    //------------------------------------------------------------------------
    const updateLocation = () => {
        document.querySelector("#headerBarLocation").textContent =
            weatherAppInterface.getLocation();
    };
    //------------------------------------------------------------------------

    // Support
    //------------------------------------------------------------------------
    const _isMobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
            // eslint-disable-next-line prettier/prettier
            navigator.userAgent
        );

    const _getUserLocation = () => {
        const promptText = "Enter a Location:\n" + "e.g. <City>, <State>\n";
        return prompt(promptText);
    };

    const _validateLocation = (userInput) => {
        // eslint-disable-next-line no-useless-escape
        const pattern = /^[A-Za-z\s.]+\,\s*[A-Za-z\s]*$/;
        if (!pattern.test(userInput)) {
            const errMsg =
                "Input Error - Unexpected Input Values\n" +
                "Please enter city, state/country i.e.\nChicago, Illinois";
            alert(errMsg);
        }
        return pattern.test(userInput);
    };

    const _showTitleAndCredits = () => {
        document.querySelector("#headerBarTitle").style.display = "block";
        document.querySelector("#headerBar").style.cssText =
            "justify-content: space-between";
    };

    const _hideTitleAndCredits = () => {
        document.querySelector("#headerBarTitle").style.display = "none";
        document.querySelector("#headerBar").style.cssText =
            "justify-content: center";
    };
    //------------------------------------------------------------------------

    // Events
    //------------------------------------------------------------------------
    const changeLocationBtn = document.querySelector(
        "#headerBarChangeLocation"
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

    if (!_isMobile) {
        addEventListener("resize", () => {
            if (window.innerWidth < 910) {
                _hideTitleAndCredits();
            } else {
                _showTitleAndCredits();
            }
        });
    }
    //------------------------------------------------------------------------

    // Init
    //------------------------------------------------------------------------
    if (_isMobile || window.innerWidth < 910) {
        _hideTitleAndCredits();
    }
    updateLocation();
    //------------------------------------------------------------------------

    return {
        updateLocation,
    };
};

export { headerBarFactory };
