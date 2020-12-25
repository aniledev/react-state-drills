import React, { Component } from "react";

export default class RouletteGun extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chamber: null,
      spinningTheChamber: false,
    };
  }

  static defaultProps = {
    bulletInChamber: 8,
  };

  handleClick = () => {
    this.setState({
      spinningTheChamber: true,
    });

    // creates a timeout, a slight pause before the result is rendered
    this.timeout = setTimeout(() => {
      const randomChamber = Math.ceil(Math.random() * 8);
      // random number is generated and then the state is set again

      this.setState({
        chamber: randomChamber,
        spinningTheChamber: false,
      });
    });
  };

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  renderDisplay() {
    // if spinnning === true, return spinning chamber
    const { spinningTheChamber, chamber } = this.sate;
    const { bulletInChamber } = this.props;
    if (spinningTheChamber === true) {
      return "spinning the camber and pulling the trigger!. . . ";
    }
    // if this.state.chamber === bulletinchamber props, return bang
    if (chamber === bulletInChamber) {
      return "BANG!!!";
    } else {
      //otherwise, render you're safe
      return "You're safe. . . This time.";
    }
  }

  render() {
    return (
      <div className="RouletteGun">
        <h2>Roulette Gun Component</h2>
        <p>{this.renderDisplay()}</p>
        <button id="trigger" className="trigger" onClick={this.handleClick}>
          Pull the trigger!
        </button>
      </div>
    );
  }
}
