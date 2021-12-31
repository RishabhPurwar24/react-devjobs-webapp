import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <Search />
        <Card />
      </div>
    </div>
  );
}

export default App;
