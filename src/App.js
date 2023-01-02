import './App.css';
import PureCounterComponent from './components/PureCounterComponent';
import SimpleCounterComponent from './components/SimpleCounterComponent';

function App() {
  return (
    <div className="App">
      <SimpleCounterComponent />
      <PureCounterComponent />
    </div>
  );
}

export default App;
