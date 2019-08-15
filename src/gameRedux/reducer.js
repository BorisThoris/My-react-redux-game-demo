import * as actionTypes from "./actionTypes";

const initialState = {
  pages: {},
  currentPage: null,
  active: null,
  cards: [],
  cardsPressed: 0,
  tempCurrentCard: null,
  //cardTwo: null,
  matched: false,
  cardsHtml: [],
  htmlSaved: false,
  disabled: [],
  intro: false
};

const pageReducer = (state = initialState, action) => {
  const pageName = action.pageName ? action.pageName : state.currentPage;
  const newPages = { ...state.pages };

  let cardsPressed = state.cardsPressed;
  let currentCard;
  //let tempCurrentCard = state.cardTwo;
  let matched = state.matched;
  let htmlSaved = state.htmlSaved;
  let tempintro = state.intro;

  let tempArr = [];
  for (let i = 0; i < state.cards.length; i++) {
    tempArr.push(state.cards[i]);
  }

  let newCards = tempArr;
  let newCardsHtml = state.cardsHtml;

  switch (action.type) {
    /* important */

    case actionTypes.SET_GAME_INTRO:
      // let bool = action.bool;
      tempintro = action.bool;

      break;

    case actionTypes.SAVE_CARD_STYLE:
      break;

    case actionTypes.SAVE_ALL_CARDS:
      newCards = action.cardArray;
      break;

    case actionTypes.SAVE_ALL_CARDS_HTML:
      newCardsHtml = action.elementArray;
      htmlSaved = true;
      break;

    case actionTypes.ON_CARD_FLIP:
      let tempCurrentCard = state.tempCurrentCard;
      let cards = state.cards;
      let disabled = state.disabled;

      if (newCardsHtml[action.card]) {
        newCardsHtml[action.card].style = { backgroundColor: "red" };
      }

      matched = false;

      if (cardsPressed < 2) {
        cardsPressed++;
        currentCard = action.card;

        if (matched === true) {
          newCardsHtml[action.card].style = { opacity: "0.3" };

          if (newCardsHtml[state.tempCurrentCard]) {
            newCardsHtml[state.tempCurrentCard].style = { opacity: "0.3" };
          }

          break;
        }
      }

      if (
        cards[action.card] &&
        cards[tempCurrentCard] &&
        cards[action.card].value === cards[tempCurrentCard].value &&
        cards[action.card] !== cards[tempCurrentCard]
      ) {
        matched = true;

        disabled.push(cards[tempCurrentCard], cards[action.card]);

        currentCard = null;

        if (cards.length === disabled.length) {
          window.alert("SuCcEsS");
        }
        break;
      }

      if (cardsPressed === 2) {
        cardsPressed = 1;
        currentCard = action.card;
      }

      break;

    default:
      return state;
  }

  return {
    ...state,
    pages: newPages,
    currentPage: pageName,
    test: "123",
    cards: newCards,
    cardsPressed: cardsPressed,
    tempCurrentCard: currentCard,
    // cardTwo: tempCurrentCard,
    matched: matched,
    htmlSaved: htmlSaved,
    cardsHtml: newCardsHtml,
    intro: tempintro
  };
};

export default pageReducer;
