import React from "react";

export default class Accordion extends React.Component {
  static defaultProps = { sections: [] };

  render() {
    return (
      <div className="Accordion">
        <h1>Accordion Component</h1>
      </div>
    );
  }
}
