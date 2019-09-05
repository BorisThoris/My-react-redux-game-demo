import React, { Component } from "react";
import * as actionTypes from "../../gameRedux/actionTypes";
import { connect } from "react-redux";
import "./index.css";

class ReplayButton extends Component {
  clickHandler() {
    window.alert("lol");
  }

  render() {
    const { gameIsOver } = this.props;
    return (
      <div
        id="replayButton"
        style={{
          opacity: `${gameIsOver ? 100 : 0}`,
          zIndex: `${gameIsOver ? 2 : -1000}`
        }}
      >
        <div onClick={this.clickHandler} id="arrow">
          >
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
)(ReplayButton);
