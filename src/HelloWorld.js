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
        <p>This text is updated using state: Hello, {this.state.who}.</p>
        <button>World</button>
        <button>Friend</button>
        <button>React</button>
      </div>
    );
  }
}
