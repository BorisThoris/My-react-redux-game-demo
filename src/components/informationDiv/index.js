import React, { Component } from "react";
import * as actionTypes from "../../gameRedux/actionTypes";
import { connect } from "react-redux";
import "./index.css";

class InformationDiv extends Component {
  render() {
    const { gameIsOver, score, lives } = this.props;

    return (
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
    gameIsOver: state.gameOver,
    flippedCards: state.flippedCards,
    cardsPressed: state.cardsPressed
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
    },
    unFlipCards: cards => {
      dispatch({ type: actionTypes.UNFLIP_OLD_CARDS, cards });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InformationDiv);
