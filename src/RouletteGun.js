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
    console.log("pulled");
  };

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
