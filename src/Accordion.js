import React from "react";

export default class Accordion extends React.Component {
  static defaultProps = { sections: [] };

  state = {
    activeIndex: [],
  };

  handleCurrentSection = (sectionIndex) => {
    this.setState({
      activeIndex: sectionIndex,
    });
  };

  // this function shoulder render one list item, not all the list items
  // when the button is clicked it will call the event handler which will change the set to the index of the clicked button
  renderSectionContent(section, index, activeIndex) {
    return (
      <li className="section-name" key={index}>
        <button
          className="active"
          type="button"
          onClick={() => this.handleCurrentSection(index)}
        >
          {section.title}
        </button>
        {/* This will contain a conditional rendering statement that will conditionally render the content if the activeIndex === the index of the list item */}
        {activeIndex === index && <p>{section.content}</p>}
      </li>
    );
  }

  render() {
    // use object desctructing to access this.state and this.props
    const { activeIndex } = this.state;
    const { sections } = this.props;

    return (
      // refractor this method to render the buttons list and also render the renderSectionContent for one list item
      <div className="Accordion">
        <h2>Accordion Component</h2>
        {/* Map over the sections and create the list items*/}
        <ul className="section-list">
          {sections.map((section, index) =>
            this.renderSectionContent(section, index, activeIndex)
          )}
        </ul>
      </div>
    );
  }
}
