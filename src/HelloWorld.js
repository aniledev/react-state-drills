import React from "react";

export default class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      who: "world",
    };
  }

  render() {
    return (
      <div className="HelloWorld">
        <h2>HelloWorld Component</h2>
        <p>
          This text is updated using state: Hello,{" "}
          <strong>{this.state.who}</strong>.
        </p>
        <button
          className="world"
          onClick={() => this.setState({ who: "world" })}
        >
          World
        </button>
        <button
          className="friend"
          onClick={() => this.setState({ who: "friend" })}
        >
          Friend
        </button>
        <button
          className="react"
          onClick={() => this.setState({ who: "react" })}
        >
          React
        </button>
      </div>
    );
  }
}
