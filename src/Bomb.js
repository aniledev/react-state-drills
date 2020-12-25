import React from "react";

export default class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div className="Bomb">
        <h2>Bomb Component</h2>
        <p>{/*Tick, Tock or BOOM!*/}</p>
      </div>
    );
  }
}
