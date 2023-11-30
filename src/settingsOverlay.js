const settingsOverlayFactory = (weatherAppInterface) => {
    // Settings Overlay
    //------------------------------------------------------------------------
    const updateDisplayedSettings = (settings) => {
        // TODO Manip DOM to show the current settings
    };
    //------------------------------------------------------------------------

    // Events
    //------------------------------------------------------------------------
    const closeSettingsBtn = document.querySelector(
        "#settingsOverlayCloseButton",
    );
    closeSettingsBtn.addEventListener("click", () => {
        // TODO On close, set the settings, refresh the cards
        document.querySelector("#settingsOverlay").style.display = "none";
        weatherAppInterface.toggleSettingsOpen();
    });
    //------------------------------------------------------------------------

    return {
        updateDisplayedSettings,
    };
};

export { settingsOverlayFactory };
