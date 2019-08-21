import React, { Component } from "react";
import * as actionTypes from "../../gameRedux/actionTypes";
import { connect } from "react-redux";
import "./Card.css";
import cardFront from "./cardFront.png";
import cardBack from "./cardBack.png";
import { blockStatement } from "@babel/types";

class Card extends Component {
  componentDidMount() {
    const { onTest, saveStyle } = this.props;

    onTest();
    saveStyle();
    // console.log(this.props.id);
  }

  clickHandler() {
    this.props.onClick(this.props.id);
  }

  render() {
    const { classToAdd, disabled, intro } = this.props;

    let cardStyle = {
      display: "inline-block"
    };

    if (disabled) {
      cardStyle = {
        display: "inline-block",
        opacity: "0.4",
        transition: "1s",
        transform: "scale(0.9)"
      };
    }

    let tempClass = null;

    if (classToAdd) {
      tempClass = classToAdd;
    } else if (intro) {
      tempClass = "active";
    }

    return (
      <div
        onClick={() => {
          this.clickHandler();
        }}
        className={`flip-card ${tempClass}`}
        style={cardStyle}
      >
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img
              height={"100%"} //90
              width={"100%"} //95
              src={`${cardBack}`}
              alt={"lol"}
            />
          </div>
          <div class="flip-card-back">
            {/* <h4 style={this.props.style}>{this.props.value}</h4> */}
            <h4 class="flip-card-number">{this.props.value}</h4>
            <img
              style={{ position: "relative", top: "0px", right: "0px" }}
              height={"100%"}
              width={"100%"}
              src={`${cardFront}`}
              alt={"lol"}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    propss: state,
    cardsPressed: state.cardsPressed,
    intro: state.intro
  };
};

const mapDispatchToProps = dispatch => {
  return {
    saveStyle: elementStyle => ({
      type: actionTypes.SAVE_CARD_STYLE,
      elementStyle
    }),
    onTest: () => dispatch({ type: actionTypes.ON_TEST }),
    flipCard: card => {
      dispatch({ type: actionTypes.ON_CARD_FLIP, card });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);
