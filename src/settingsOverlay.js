const settingsOverlayFactory = (weatherAppInterface) => {
    // Events
    //------------------------------------------------------------------------
    const closeSettingsBtn = document.querySelector(
        "#settingsOverlayCloseButton",
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
};

export { settingsOverlayFactory };
