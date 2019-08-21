import * as actionTypes from "./actionTypes";

const initialState = {
  cardsPressed: 0,
  score: 0,
  lives: null,

  pages: {},
  cardsHtml: [],
  cards: [],
  disabled: [],

  currentPage: null,
  active: null,
  tempCurrentCard: null,
  lastCard: null,

  htmlSaved: false,
  matched: false,
  intro: false,
  gameOver: false
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
  let tempLastCard = state.lastCard;
  let tempLives = state.lives;
  let tempScore = state.score;
  let tempGameOver = state.gameOver;

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

    case actionTypes.SET_GAME_LIVES:
      // let bool = action.bool;
      tempLives = action.lives;

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

      const matchBool =
        cards[action.card] &&
        cards[tempCurrentCard] &&
        cards[action.card].value === cards[tempCurrentCard].value &&
        cards[action.card] !== cards[tempCurrentCard];

      if (newCardsHtml[action.card]) {
        newCardsHtml[action.card].style = { backgroundColor: "red" };
      }

      matched = false;

      if (cardsPressed < 2) {
        cardsPressed++;
        currentCard = action.card;
        tempLastCard = state.tempCurrentCard;

        if (matchBool) {
          matched = true;
          tempScore += 50;
          tempLives++;

          disabled.push(cards[tempCurrentCard], cards[action.card]);

          currentCard = null;

          if (cards.length === disabled.length) {
            window.alert("SuCcEsS");
          }
          // break;
        }

        if (matched === true) {
          newCardsHtml[action.card].style = { opacity: "0.3" };

          if (newCardsHtml[state.tempCurrentCard]) {
            newCardsHtml[state.tempCurrentCard].style = { opacity: "0.3" };
          }

          break;
        }
      }

      if (cardsPressed === 2) {
        if (matchBool) {
          matched = true;
          tempScore += 50;
          tempLives++;

          disabled.push(cards[tempCurrentCard], cards[action.card]);

          currentCard = null;

          if (cards.length === disabled.length) {
            window.alert("SuCcEsS");
          }
          // break;
        } else {
          cardsPressed = 0;
          currentCard = action.card;
          console.log(currentCard);
          console.log(tempLastCard);
          if (currentCard !== tempLastCard) {
            tempLives--;
          }
          tempLastCard = null;

          if (tempLives === 0) {
            tempGameOver = true;
            // window.alert("Game Over, Sorry Bro :/");
          }
          break;
        }
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
    lastCard: tempLastCard,
    matched: matched,
    htmlSaved: htmlSaved,
    cardsHtml: newCardsHtml,
    intro: tempintro,
    lives: tempLives,
    score: tempScore,
    gameOver: tempGameOver
  };
};

export default pageReducer;
