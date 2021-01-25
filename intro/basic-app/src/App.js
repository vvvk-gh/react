import './App.css';
import Greet from './Greet'
import Welcome from './Welcome'
import Hello from './Hello'
import Message from './Message'
import Counter from './Counter'
import ParentComponent from './ParentComponent'
import UserGreeting from './UserGreeting'

function App() {
  return (
    <div className="App">
      
      <UserGreeting />
      {/* <ParentComponent /> */}

      {/* <Greet name="Bruce" heroName="Batman">
        <p>he has an bat mobile</p>
        </Greet>  
      <Greet name="Diana" heroName="Wonder Woman">
        <button>Press shield</button>
        </Greet>  
      <Greet name="Barry" heroName="Flash">
        </Greet>
       */}

        {/* <Welcome name="Bruce" heroName="Batman">
        <p>he has an bat mobile</p>
        </Welcome>  
      <Welcome name="Diana" heroName="Wonder Woman">
        <button>Press shield</button>
        </Welcome>  
      <Welcome name="Barry" heroName="Flash">
        </Welcome>
   */}

   {/* <Message />

   <Counter /> */}
    {/* <Hello /> */}
    </div>
  );
}

export default App;
