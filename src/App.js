import "./App.css";
import HelloWorld from "./HelloWorld";
import Bomb from "./Bomb";
import RouletteGun from "./RouletteGun";
import Accordion from "./Accordion";

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <Bomb />
      <RouletteGun bulletInChamber={8} />
      <Accordion />
    </div>
  );
}

export default App;
