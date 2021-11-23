import "./App.css";
import Cards from "./components/Cards/Cards";
import img from "./img.svg";

function App() {
  return (
    <div className="App">
      <Cards>
        <img src={img} className="card-img-top" alt="..." />
      </Cards>
      <Cards />
    </div>
  );
}

export default App;
