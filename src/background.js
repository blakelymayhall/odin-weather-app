import { days } from "./weatherApp";

const backgroundFactory = (weatherAppInterface) => {
    // Background
    //------------------------------------------------------------------------
    const changeBackground = () => {
        let weatherData = weatherAppInterface.getWeatherData();

        let weatherDataDay = null;
        switch (weatherAppInterface.getChosenDay()) {
            case days.TOMORROW:
                weatherDataDay = weatherData.forecast.forecastday[1];
                break;
            case days.FOLLOWING_DAY:
                weatherDataDay = weatherData.forecast.forecastday[2];
                break;
            default:
                weatherDataDay = weatherData.forecast.forecastday[0];
        }

        let weatherBackground = _weatherImgs.DEFAULT;
        if (_sunCodes.includes(weatherDataDay.day.condition.code)) {
            weatherBackground = _weatherImgs.SUN;
            if (
                !weatherData.current.is_day &&
                weatherAppInterface.getChosenDay() == days.TODAY
            ) {
                weatherBackground = _weatherImgs.MOON;
            }
        }
        if (_pCloudCodes.includes(weatherDataDay.day.condition.code)) {
            weatherBackground = _weatherImgs.PCLOUD;
        }
        if (_cloudCodes.includes(weatherDataDay.day.condition.code)) {
            weatherBackground = _weatherImgs.CLOUD;
        }
        if (_snowCodes.includes(weatherDataDay.day.condition.code)) {
            weatherBackground = _weatherImgs.SNOW;
        }
        if (_rainCodes.includes(weatherDataDay.day.condition.code)) {
            weatherBackground = _weatherImgs.RAIN;
        }
        if (_stormCodes.includes(weatherDataDay.day.condition.code)) {
            weatherBackground = _weatherImgs.STORM;
        }
        document.querySelector("#contentWindow").style.cssText =
            `background-image: url(${weatherBackground});`;
    };

    // Support
    //------------------------------------------------------------------------
    const _weatherImgs = {
        SUN: "https://media0.giphy.com/media/uqpK3SuxEY4W9YQvdg/giphy.gif?cid=ecf05e47wpg016yzb1mqvzh86isal3wrgq0akivhp23e0lsy&ep=v1_gifs_search&rid=giphy.gif&ct=g",
        CLOUD: "https://media2.giphy.com/media/mNG0rIdAYvLog0Wr8H/giphy.gif?cid=ecf05e47tprle5bfqpy23qkhznsqldxjj6ax18idct2bbw7h&ep=v1_gifs_search&rid=giphy.gif&ct=g",
        RAIN: "https://media1.giphy.com/media/ZE6hLh4YmbZvfIx4Qu/giphy.gif?cid=ecf05e4729acah0v48hmorrdsumez4gkzopcp4in1aydvx3p&ep=v1_gifs_search&rid=giphy.gif&ct=g",
        STORM: "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExenRkdnIxdzBjZTBtbHBjZW5zMms5bDk2dHIycHJ2d25tamsxanQwaSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/RNveokQhEObpqyvYb5/giphy.gif",
        SNOW: "https://media0.giphy.com/media/12wteMTXxjLaVO/giphy.gif?cid=ecf05e477cez6fvymyp0m8s2ctk96cpyz2ngjoi17lynlkdb&ep=v1_gifs_search&rid=giphy.gif&ct=g",
        PCLOUD: "https://media4.giphy.com/media/jeagzAR8ZVawgisnzH/giphy.gif?cid=ecf05e47wngvndf3pl31rco76snd9a4u0waecokh11iboiq1&ep=v1_gifs_search&rid=giphy.gif&ct=g",
        MOON: "https://media1.giphy.com/media/QgIreLD4taka4/giphy.gif?cid=ecf05e470ed0jvxvvh537purlb6glebs2xn7rbbk9eog0maw&ep=v1_gifs_search&rid=giphy.gif&ct=g",
        DEFAULT:
            "https://media3.giphy.com/media/zwoRf2Ww6LPk4tCL9m/giphy.gif?cid=ecf05e47mr3qhpom1y63p0djdgpb34w086b9s5v87fgb9353&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    };

    const _sunCodes = [1000];
    const _pCloudCodes = [1003];
    const _cloudCodes = [
        1006, 1009, 1030, 1063, 1066, 1069, 1072, 1087, 1135, 1147,
    ];
    const _snowCodes = [
        1114, 1117, 1204, 1207, 1210, 1213, 1216, 1219, 1222, 1225, 1237, 1249,
        1252, 1255, 1258, 1261, 1264,
    ];
    const _rainCodes = [
        1150, 1153, 1168, 1171, 1180, 1183, 1186, 1192, 1195, 1198, 1201, 1240,
        1243, 1246,
    ];
    const _stormCodes = [1273, 1276, 1279, 1282];
    const _moonCodes = [_sunCodes, _pCloudCodes];
    //------------------------------------------------------------------------

    // Init
    //------------------------------------------------------------------------
    changeBackground();
    //------------------------------------------------------------------------

    return {
        changeBackground,
    };
};

export { backgroundFactory };
