import React from "react";

export default class Accordion extends React.Component {
  static defaultProps = { sections: [] };

  state = {
    activeIndex: [],
  };

  handleSection = (activeIndex) => {
    this.setState({
      activeIndex: null,
    });
  };

  // this function shoulder render one list item, not all the list items
  renderSectionContent(section, index, activeIndex) {
    return (
      <li>
        <button type="button" onClick={() => this.handleSection(index)}>
          {section.title}
        </button>
        {/* This will contain a conditional rendering statement */}
        {section.content}
      </li>
    );
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
