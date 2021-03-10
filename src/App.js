import "./App.css";
import useApplicationData from "./hooks/useApplicationData.js";
import Conditions from "./components/Conditions";
import Search from "./components/Search";

function App() {
  const { state } = useApplicationData();

  return (
    <div className="App">
      <Search state={state} />
      <Conditions state={state} />
    </div>
  );
}

export default App;
