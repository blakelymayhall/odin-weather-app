import { days } from "./weatherApp";

const navBarFactory = (weatherAppInterface) => {
    // Nav Bar
    //------------------------------------------------------------------------
    const setFollowingDay = () => {
        const followingDayElem = document.querySelector(
            "#followingDaySelector",
        );
        const futureDate = new Date(new Date().getTime() + 48 * 60 * 60 * 1000);
        const formattedDate = futureDate.toLocaleDateString("en-US", {
            month: "2-digit",
            day: "2-digit",
        });
        followingDayElem.textContent = formattedDate;
    };

    const underlineChosenDay = (chosenDay) => {
        // Clear underlines
        const dayElems = document.querySelectorAll(
            "#currentDaySelector, #tomorrowSelector, #followingDaySelector",
        );
        dayElems.forEach((dayElem) => {
            dayElem.style.cssText = "text-decoration:none;";
        });

        // Underline new day
        let selector;
        switch (chosenDay) {
            case days.TOMORROW:
                selector = "#tomorrowSelector";
                break;
            case days.FOLLOWING_DAY:
                selector = "#followingDaySelector";
                break;
            default:
                selector = "#currentDaySelector";
        }
        document.querySelector(selector).style.cssText =
            "text-decoration:underline;";
    };
    //------------------------------------------------------------------------

    // Events
    //------------------------------------------------------------------------
    const dayElems = document.querySelectorAll(
        "#currentDaySelector, #tomorrowSelector, #followingDaySelector",
    );

    dayElems.forEach((dayElem) => {
        dayElem.addEventListener("click", () => {
            let chosenDay;
            switch (dayElem.id) {
                case "tomorrowSelector":
                    chosenDay = days.TOMORROW;
                    break;
                case "followingDaySelector":
                    chosenDay = days.FOLLOWING_DAY;
                    break;
                default:
                    chosenDay = days.TODAY;
            }
            weatherAppInterface.updateChosenDay(chosenDay);
        });
    });
    //------------------------------------------------------------------------

    // Init
    //------------------------------------------------------------------------
    setFollowingDay();
    //------------------------------------------------------------------------

    return {
        underlineChosenDay,
    };
};

export { navBarFactory };
