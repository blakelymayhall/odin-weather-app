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

    const _showTitleAndCredits = () => {
        document.querySelector("#headerBarTitle").style.display = "block";
        document.querySelector("#headerBarCredits").style.display = "block";
        document.querySelector("#headerBarCenter").style.cssText =
            "padding-left: 100px";
    };

    const _hideTitleAndCredits = () => {
        document.querySelector("#headerBarTitle").style.display = "none";
        document.querySelector("#headerBarCredits").style.display = "none";

        const lerp = (start, end, t) => (1 - t) * start + t * end;
        const interpolateX = (y, point1, point2) => {
            const clampedY = Math.max(
                Math.min(y, Math.max(point1.y, point2.y)),
                Math.min(point1.y, point2.y)
            );
            const t = (clampedY - point1.y) / (point2.y - point1.y);
            return lerp(point1.x, point2.x, t);
        };
        const point1 = { x: 200, y: 910 };
        const point2 = { x: 90, y: 565 };
        const padding = interpolateX(window.innerWidth, point1, point2);
        document.querySelector("#headerBarCenter").style.cssText =
            `padding-left: ${padding}px`;
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
    updateLocation();
    //------------------------------------------------------------------------

    return {
        updateLocation,
    };
};

export { headerBarFactory };
