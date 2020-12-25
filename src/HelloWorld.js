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
        <button className="world">World</button>
        <button className="friend">Friend</button>
        <button className="react">React</button>
      </div>
    );
  }
}
