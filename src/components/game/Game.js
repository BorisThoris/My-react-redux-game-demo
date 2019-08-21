import React, { Component } from "react";
import * as actionTypes from "../../gameRedux/actionTypes";
import { connect } from "react-redux";
import Card from "../mysteryCard/Card";
import "./game.css";
import bgnImage from "./gameBoardBackground.jpg";
// import { url } from "inspector";
// import cards from "../mysteryCard/Card";

class Game extends Component {
  componentDidMount() {
    const { saveCards, setIntro } = this.props;

    let cardCount = 12;

    let valuesCount = cardCount / 2;
    let vals = [];

    for (let i = 0; i < valuesCount; i++) {
      vals.push({ number: i, count: 0 });
    }

    let cards = [];
    for (let i = 0; i < cardCount; i++) {
      cards.push({ key: i, id: i, value: "empty" });
    }

    for (let i = 0; i < vals.length; i++) {
      while (vals[i].count < 2) {
        let card = cards[Math.floor(Math.random() * cards.length)];

        if (card.value === "empty") {
          card.value = vals[i].number;
          vals[i].count++;
        }
      }
    }

    setIntro(true);
    setTimeout(() => {
      setIntro(false);
    }, 325);
    saveCards(cards);
  }

  onClick = id => {
    const { flipCard, cards, disabled, gameIsOver } = this.props;

    if (!disabled.includes(cards[id]) && !gameIsOver) {
      flipCard(id);
    }
    // console.log((e.target.childNodes[0].style.display = "inline-block"));
  };

  render() {
    const {
      cards,
      saveCardsHtml,
      htmlSaved,
      cardStyles,
      activeCard,
      disabled,
      lastCard,
      setLives,
      lives,
      score,
      gameIsOver
    } = this.props;

    let cardArray = [];
    let styleArray = [];

    let bool = false;
    let cardDisabled = false;

    if (lives === null && cards.length > 0) {
      setLives(cards.length / 2);
    }

    for (let i = 0; i < cards.length; i++) {
      if (i === activeCard || i === lastCard) {
        console.log(i);
        bool = true;
      }

      if (disabled.includes(cards[i])) {
        bool = true;
        cardDisabled = true;
      }

      cardArray.push(
        <Card
          id={cards[i].id}
          key={cards[i].key}
          value={cards[i].value}
          onClick={this.onClick}
          style={cardStyles[i] ? cardStyles[i].style : null}
          classToAdd={!disabled || bool ? "active" : null}
          disabled={cardDisabled}
        />
      );

      bool = false;
      styleArray.push({ index: cards[i].id, style: {} });

      cardDisabled = false;
    }

    if (!htmlSaved && styleArray.length > 0) saveCardsHtml(styleArray);

    let gameOverText = (
      <div
        id="gameOver"
        style={{
          transition: "0.15s",
          opacity: `${gameIsOver ? 100 : 0}`,
          zIndex: `${gameIsOver ? 2 : -1000}`
        }}
      >
        <div>Game Over!</div>
        <div>
          You scored
          {` ${score}`} Points!
        </div>
      </div>
    );

    let informationDiv = (
      <div
        id="informationDiv"
        style={{
          transition: "0.5s",
          opacity: `${gameIsOver ? 0 : 100}`
        }}
      >
        <h4 id="scoreDiv">Your score: {score}</h4>
        <h4 id="livesDiv">Your lives: {lives}</h4>
      </div>
    );

    return (
      <div id="appDiv">
        {informationDiv}
        {gameOverText}

        <div id="gameBoard" style={{ backgroundImage: `url(${bgnImage})` }}>
          <div id="cardsDiv">{cardArray ? cardArray : null}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cards: state.cards,
    htmlSaved: state.htmlSaved,
    cardStyles: state.cardsHtml,
    activeCard: state.tempCurrentCard,
    cardTwo: state.cardTwo,
    disabled: state.disabled,
    lastCard: state.lastCard,
    lives: state.lives,
    score: state.score,
    gameIsOver: state.gameOver
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setIntro: bool => dispatch({ type: actionTypes.SET_GAME_INTRO, bool }),
    onTest: () => dispatch({ type: actionTypes.ON_TEST }),
    saveCards: cardArray => {
      dispatch({ type: actionTypes.SAVE_ALL_CARDS, cardArray });
    },
    saveCardsHtml: elementArray => {
      dispatch({ type: actionTypes.SAVE_ALL_CARDS_HTML, elementArray });
    },
    flipCard: card => {
      dispatch({ type: actionTypes.ON_CARD_FLIP, card });
    },
    setLives: lives => {
      dispatch({ type: actionTypes.SET_GAME_LIVES, lives });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
