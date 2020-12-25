import React, { Component } from "react";

export default class RouletteGun extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chamber: null,
      spinningTheChamber: false,
    };
  }
  render() {
    return (
      <div className="RouletteGun">
        <h2>Roulette Gun Component</h2>
        <p>{/* Spinning, safe, or BANG!!! */}</p>
        <button id="trigger" classname="trigger">
          Pull the trigger!
        </button>
      </div>
    );
  }
}
