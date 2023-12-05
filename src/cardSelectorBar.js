import { cards } from "./weatherApp";

const cardSelectorBarFactory = (weatherAppInterface) => {
    // Card Selector Bar
    //------------------------------------------------------------------------
    const underlineChosenCard = () => {
        // Clear underlines
        const cardElems = document.querySelectorAll(
            // eslint-disable-next-line prettier/prettier
            "#leftCardSelector, #rightCardSelector"
        );
        cardElems.forEach((dayElem) => {
            dayElem.style.cssText = "text-decoration:none;";
        });

        // Underline new day
        let selector;
        switch (weatherAppInterface.getChosenCard()) {
            case cards.RIGHT:
                selector = "#rightCardSelector";
                break;
            default:
                selector = "#leftCardSelector";
        }
        document.querySelector(selector).style.cssText =
            "text-decoration:underline;";
    };
    //------------------------------------------------------------------------

    // Support
    //------------------------------------------------------------------------
    const _isMobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
            // eslint-disable-next-line prettier/prettier
            navigator.userAgent
        );

    const _shouldShow = () => {
        return _isMobile || window.innerWidth < 840;
    };

    const _showCardSelectorBar = () => {
        document.querySelector("#cardSelectBar").style.display = "flex";
    };

    const _hideCardSelectorBar = () => {
        document.querySelector("#cardSelectBar").style.display = "none";
        // show the other card
    };
    //------------------------------------------------------------------------

    // Events
    //------------------------------------------------------------------------
    if (!_isMobile) {
        addEventListener("resize", () => {
            if (window.innerWidth < 840) {
                _showCardSelectorBar();
                weatherAppInterface.updateCardDisplay(
                    weatherAppInterface.getChosenCard(),
                    true
                );
            } else {
                _hideCardSelectorBar();
                weatherAppInterface.updateCardDisplay(
                    weatherAppInterface.getChosenCard(),
                    false
                );
            }
        });
    }

    const cardElems = document.querySelectorAll(
        // eslint-disable-next-line prettier/prettier
        "#leftCardSelector, #rightCardSelector"
    );

    cardElems.forEach((cardElem) => {
        cardElem.addEventListener("click", () => {
            let chosenCard;
            switch (cardElem.id) {
                case "rightCardSelector":
                    chosenCard = cards.RIGHT;
                    break;
                default:
                    chosenCard = cards.LEFT;
            }
            weatherAppInterface.updateCardDisplay(chosenCard, true);
            underlineChosenCard();
        });
    });
    //------------------------------------------------------------------------

    // Init
    //------------------------------------------------------------------------
    underlineChosenCard();
    if (_shouldShow()) {
        _showCardSelectorBar();
        weatherAppInterface.updateCardDisplay(
            weatherAppInterface.getChosenCard(),
            true,
        );
    }
    //------------------------------------------------------------------------

    return {};
};

export { cardSelectorBarFactory };
