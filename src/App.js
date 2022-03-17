import "./App.css";
import Array from "./components/Array";
import ArrayObject from "./components/ArrayObject";
import DeQuy from "./components/DeQuy";
import Function from "./components/Function";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Function />
      <Array/>
      <ArrayObject/>
      <DeQuy/>
      <Search/>
    </div>
  );
}

export default App;
