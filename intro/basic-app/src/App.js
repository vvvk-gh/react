import './App.css';
import Greet from './Greet'
import Welcome from './Welcome'
import Hello from './Hello'
function App() {
  return (
    <div className="App">
      <Greet name="Bruce" heroName="Batman">
        <p>he has an bat mobile</p>
        </Greet>  
      <Greet name="Diana" heroName="Wonder Woman">
        <button>Press shield</button>
        </Greet>  
      <Greet name="Barry" heroName="Flash">
        </Greet>
          
    <Welcome />
    {/* <Hello /> */}
    </div>
  );
}

export default App;
