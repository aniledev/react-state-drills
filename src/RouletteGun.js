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
      const randomChamber = Math.ceil(Mat.random() * 8);
      // random number is generated and then the state is set again

      this.setState({
        chamber: randomChamber,
        spinningTheChamber: false,
      });
    });
  };

  renderDisplay() {}

  render() {
    return (
      <div className="RouletteGun">
        <h2>Roulette Gun Component</h2>
        <p>{/* Spinning, safe, or BANG!!! */}</p>
        <button id="trigger" className="trigger" onClick={this.handleClick}>
          Pull the trigger!
        </button>
      </div>
    );
  }
}
