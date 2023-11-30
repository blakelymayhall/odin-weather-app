import { headerBarFactory } from "./headerBar";

// Weather App Model
const weatherAppData = () => {
    let location = "Rogers, AR";

    const getLocation = () => {
        return location;
    };

    return {
        getLocation,
    };
};

// Weather App Controller
const weatherAppFactory = () => {
    const data = weatherAppData();

    const headerBar = headerBarFactory();

    // __Init__
    headerBar.updateLocation(data.getLocation());
};

export { weatherAppFactory };
