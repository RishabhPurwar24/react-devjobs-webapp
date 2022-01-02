import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Card from "./components/Card";
import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "./actions/jobs";
import { useEffect } from "react";

function App() {
  const state = useSelector((state) => state);
  console.log(state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);

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
