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

  render() {
    return (
      <div className="Bomb">
        <h2>Bomb Component</h2>
        <p>{count}</p>
      </div>
    );
  }
}
