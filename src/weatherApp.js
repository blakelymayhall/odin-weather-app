import { headerBarFactory } from "./headerBar";
import { settingsOverlayFactory } from "./settingsOverlay";
import { leftCardFactory } from "./leftCard";
import { rightCardFactory } from "./rightCard";

const weatherAppFactory = (init_location, init_settings) => {
    // Data
    //------------------------------------------------------------------------
    let location = init_location;
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

        async function updateLocation(newLocation) {
            // Clean input
            //    capitalize state abbreviation
            let state = newLocation.split(",")[1].trim();
            if (state.length == 2) {
                newLocation = `${newLocation
                    .split(",")[0]
                    .trim()}, ${state.toUpperCase()}`;
            }

            // Call the API
            await _getWeatherData(newLocation);

            // Update the location
            if (response) {
                weatherData = response;
                console.log("Updated Data:");
                console.log(weatherData);
                location = newLocation;
                headerBar.updateLocation(location);
            }
        }

        const toggleSettingsOpen = () => {
            settingsOverlay.updateDisplayedSettings(settings);
            settingsOpen = !settingsOpen;
        };

        return {
            getLocation,
            getSettings,
            getWeatherData,
            updateLocation,
            toggleSettingsOpen,
        };
    };
    //------------------------------------------------------------------------

    // Weather App
    //------------------------------------------------------------------------
    _init();
    const headerBar = headerBarFactory(weatherAppInterface());
    const settingsOverlay = settingsOverlayFactory(weatherAppInterface());
    const leftCard = leftCardFactory(weatherAppInterface());
    const rightCard = rightCardFactory(weatherAppInterface());
    //------------------------------------------------------------------------

    // Support
    //------------------------------------------------------------------------
    async function _init() {
        await _getWeatherData(location);
        weatherData = response;
        console.log("Updated Data:");
        console.log(weatherData);
        leftCard.updateData();
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
    //------------------------------------------------------------------------

    // Debug
    ///////////////////////////////////////////////////////////////////////////////
    // function doSomething() {
    //     console.log(weatherData);
    // }
    // setInterval(doSomething, 5000); // Time in milliseconds
    ///////////////////////////////////////////////////////////////////////////////
};

export { weatherAppFactory };
