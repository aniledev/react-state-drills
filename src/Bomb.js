import React from "react";

export default class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        count: this.state.count + 1,
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  displayResult() {
    const { count } = this.state;
    // when count great than or equal to 8, clear interval
    // if count is greater than or equal to 8, return BOOM
    if (count >= 8) {
      clearInterval(this.interval);
      return (
        <strong className="boom">
          <i>BOOM!!!!!</i>
        </strong>
      );
    }
    // if count is divisible by 2, then return tick
    if (count % 2 === 0) {
      return "tick";
    }
    // if count is NOT divisible by 2 return tock
    else {
      return "tock";
    }
  }

  render() {
    return (
      <div className="Bomb">
        <h2>Bomb Component</h2>
        <p>{this.displayResult()}</p>
      </div>
    );
  }
}
