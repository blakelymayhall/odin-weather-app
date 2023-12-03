const settingsOverlayFactory = (weatherAppInterface) => {
    // Settings Overlay
    //------------------------------------------------------------------------
    const populateSettings = () => {
        const settings = weatherAppInterface.getSettings();

        document.querySelector("#metricToggle").checked = settings.metric;
        switch (settings.temp) {
            case "C":
                document.querySelector("#tempUnits").value = "celsius";
                return;
            default:
                document.querySelector("#tempUnits").value = "fahrenheit";
        }
    };
    //------------------------------------------------------------------------

    // Events
    //------------------------------------------------------------------------
    const closeSettingsBtn = document.querySelector(
        "#settingsOverlayCloseButton"
    );
    closeSettingsBtn.addEventListener("click", () => {
        const settings = {
            metric: document.querySelector("#metricToggle").checked,
            temp:
                document.querySelector("#tempUnits").value == "fahrenheit"
                    ? "F"
                    : "C",
        };
        weatherAppInterface.updateSettings(settings);
        document.querySelector("#settingsOverlay").style.display = "none";
        weatherAppInterface.toggleSettingsOpen();
    });
    //------------------------------------------------------------------------

    return {
        populateSettings,
    };
};

export { settingsOverlayFactory };
