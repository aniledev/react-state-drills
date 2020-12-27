import "./App.css";
import HelloWorld from "./HelloWorld";
import Bomb from "./Bomb";
import RouletteGun from "./RouletteGun";
import Accordion from "./Accordion";

function App() {
  // create prop to pass down to Accordion component
  // sections prop is an array of objects, each with two keys title and content, both strings
  const sectionsProp = [
    {
      title: "Section 1",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      title: "Section 2",
      content:
        "Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!",
    },
    {
      title: "Section 3",
      content:
        "Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?",
    },
  ];

  return (
    <div className="App">
      <HelloWorld />
      <Bomb />
      <RouletteGun bulletInChamber={8} />
      <Accordion sections={sectionsProp} />
    </div>
  );
}

export default App;
