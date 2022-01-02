import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Card from "./components/Card";
import Cards from "./components/Cards";
import { useDispatch, useSelector } from "react-redux";
import { getJobs } from "./actions/jobs";
import { useEffect } from "react";

function App() {
  const state = useSelector((state) => state);
  console.log("State", state.jobReducer[0]);

  const dispatch = useDispatch();
  console.log("dispatch", dispatch);

  //"getJobs()" is an action, which is getting dispatched from here via useEffect()
  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <Search />
        <Cards />
      </div>
    </div>
  );
}

export default App;
