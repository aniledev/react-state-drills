import React from "react";

export default class Accordion extends React.Component {
  static defaultProps = { sections: [] };

  renderListItems() {
    const list = this.props.sections.map((section, index) => (
      <li>
        <button key={index}>{section.title}</button>
      </li>
    ));
    return <div className="buttons-list">{list}</div>;
  }

  render() {
    return (
      <div className="Accordion">
        <h2>Accordion Component</h2>
        <ul className="section-list">{this.renderListItems()}</ul>
      </div>
    );
  }
}
