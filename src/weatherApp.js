import { headerBarFactory } from "./headerBar";
import { settingsOverlayFactory } from "./settingsOverlay";
import { leftCardFactory } from "./leftCard";
import { rightCardFactory } from "./rightCard";
import { navBarFactory } from "./navBar";

const weatherAppFactory = (init_location, init_settings) => {
    // Data
    //------------------------------------------------------------------------
    let location = init_location;
    let chosenDay = days.TODAY;
    let weatherData;
    let response = null;
    let settingsOpen = false;
    let settings = init_settings;
    //------------------------------------------------------------------------

    // Interface Layer
    //------------------------------------------------------------------------
    const weatherAppInterface = () => {
        const getLocation = () => {
            return location;
        };

        const getSettings = () => {
            return settings;
        };

        const getWeatherData = () => {
            return weatherData;
        };

        const getChosenDay = () => {
            return chosenDay;
        };

        async function updateLocation(newLocation) {
            // Call the API
            await _getWeatherData(newLocation);

            // Update the location
            if (response) {
                weatherData = response;
                console.log("Updated Data:");
                console.log(weatherData);
                location =
                    `${weatherData.location.name}, ` +
                    `${weatherData.location.region}, ` +
                    `${weatherData.location.country}`;
                headerBar.updateLocation();
                leftCard.updateData();
                rightCard.updateData();

                localStorage.setItem(
                    "weatherData",
                    JSON.stringify(weatherData)
                );
                localStorage.setItem("location", JSON.stringify(location));
            }
        }

        const updateSettings = (newSettings) => {
            settings = newSettings;
            console.log("Updated Settings:");
            console.log(settings);

            localStorage.setItem("settings", JSON.stringify(settings));
        };

        const toggleSettingsOpen = () => {
            if (!settingsOpen) {
                settingsOverlay.populateSettings();
            }
            settingsOpen = !settingsOpen;
        };

        const updateChosenDay = (newDay) => {
            chosenDay = newDay;
            console.log("Updated Settings:");
            console.log(chosenDay);
            navBar.underlineChosenDay(chosenDay);
            leftCard.updateData();
            rightCard.updateData();

            localStorage.setItem(
                "chosenDay",
                JSON.stringify(chosenDay.description)
            );
        };

        return {
            getLocation,
            getSettings,
            getWeatherData,
            getChosenDay,
            updateLocation,
            toggleSettingsOpen,
            updateChosenDay,
            updateSettings,
        };
    };
    //------------------------------------------------------------------------

    // Weather App
    //------------------------------------------------------------------------
    _init();
    const headerBar = headerBarFactory(weatherAppInterface());
    const navBar = navBarFactory(weatherAppInterface());
    const settingsOverlay = settingsOverlayFactory(weatherAppInterface());
    const leftCard = leftCardFactory(weatherAppInterface());
    const rightCard = rightCardFactory(weatherAppInterface());
    //------------------------------------------------------------------------

    // Support
    //------------------------------------------------------------------------
    async function _init() {
        if (!(await _loadState())) {
            await _getWeatherData(location);
            weatherData = response;
            location =
                `${weatherData.location.name}, ` +
                `${weatherData.location.region}, ` +
                `${weatherData.location.country}`;
            console.log("Updated Data:");
            console.log(weatherData);
        }
    }

    async function _getWeatherData(newLocation) {
        const api =
            `http://api.weatherapi.com/v1/forecast.json?key=` +
            `81118de3a27c4287bd233838231611&q=${newLocation}&days=3&aqi=no&alerts=no`;

        response = await fetch(api, { mode: "cors" });
        response = await response.json();
        if (response.error) {
            response = null;
        }
    }

    async function _loadState() {
        // Error check keys
        let loadErr = false;
        let keys = ["weatherData", "location", "settings", "chosenDay"];
        console.log("Lodaing Data...");
        keys.forEach((key) => {
            console.log(JSON.parse(localStorage.getItem(key)));
            if (JSON.parse(localStorage.getItem(key)) == null) {
                loadErr = true;
            }
        });
        if (loadErr) {
            console.log("Error Loading Data...");
            return false;
        }

        weatherData = JSON.parse(localStorage.getItem(keys[0]));
        location = JSON.parse(localStorage.getItem(keys[1]));
        settings = JSON.parse(localStorage.getItem(keys[2]));
        switch (JSON.parse(localStorage.getItem(keys[3]))) {
            case "tomorrow":
                chosenDay = days.TOMORROW;
                break;
            case "following_day":
                chosenDay = days.FOLLOWING_DAY;
                break;
            default:
                chosenDay = days.TODAY;
        }
        
        // Current Unix time in seconds
        const currentUnixTime = Math.floor(new Date().getTime() / 1000);
        const timeElapsed_hrs =
            (currentUnixTime - weatherData.current.last_updated_epoch) / 3600;
        if (timeElapsed_hrs > 1) {
            await _getWeatherData(location);
            weatherData = response;
            console.log("Updated Data:");
            console.log(weatherData);
        }

        return true;
    }
    //------------------------------------------------------------------------
};

const days = {
    TODAY: Symbol("today"),
    TOMORROW: Symbol("tomorrow"),
    FOLLOWING_DAY: Symbol("following_day"),
};

export { weatherAppFactory, days };
