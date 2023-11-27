// Header Bar Model
const headerBarModel = () => {
    let settingsOpen = false;
    let locationChangeOpen = false;
    let chosenLocation = "Rogers, AR";

    const toggleSettingsOpen = () => {
        settingsOpen = !settingsOpen;
    };

    const toggleLocationChangeOpen = () => {
        locationChangeOpen = !locationChangeOpen;
    };

    const updateChosenLocation = (inputString) => {
        chosenLocation = inputString; // TODO - Parse this
    };

    const getChosenLocation = () => {
        return chosenLocation;
    };

    return {
        toggleSettingsOpen,
        toggleLocationChangeOpen,
        updateChosenLocation,
        getChosenLocation,
    };
};

// Header Bar View
const headerBarView = () => {
    const updateHeaderBarLocation = (location) => {
        console.log(location);
    };

    return {
        updateHeaderBarLocation,
    };
};

// Header Bar Controller
const headerBarController = () => {
    const _model = headerBarModel();
    const _view = headerBarView();

    const init = () => {
        _view.updateHeaderBarLocation(_model.getChosenLocation());
    };

    init();
    return {
        
    };
};

export { headerBarController };
