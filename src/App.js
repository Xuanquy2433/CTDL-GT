import "./App.css";
import Array from "./components/Array";
import ArrayObject from "./components/ArrayObject";
import DeQuy from "./components/DeQuy";
import Function from "./components/Function";
import Search from "./components/Search";
import Queue from './components/Queue';
import Stack from "./components/Stack";
import LinkedList from "./components/LinkedList";
import QueueArray from "./components/QueueArray";
import StackArray from './components/StackArray';

function App() {
  return (
    <div className="App">
      {/* <Function />
      <Array/>
      <ArrayObject/>
      <DeQuy/>
      <Search/> */}
      <Queue/>
      <Stack/>
      <LinkedList/>
      <QueueArray/>
      <StackArray/>

    </div>
  );
}

export default App;
