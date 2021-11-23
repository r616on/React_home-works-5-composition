import "./App.css";
import Cards from "./components/Cards/Cards";
import Decomposition from "./components/Decomposition/Decomposition";
import img from "./img.svg";

function App() {
  return (
    <div className="App">
      <Cards>
        <img src={img} className="card-img-top" alt="..." />
      </Cards>
      <Cards />
      <Decomposition />
    </div>
  );
}

export default App;
