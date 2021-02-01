import './App.css';
import './appStyles.css'
import styles from './appStyles.module.css'
import Greet from './Greet'
import Welcome from './Welcome'
import Hello from './Hello'
import Message from './Message'
import Counter from './Counter'
import ParentComponent from './ParentComponent'
import UserList from './UserList'
import Inline from './Inline'
import Form from './Form'
import LifecycleA from './LifecycleA'
import Table from './Table'

function App() {
  return (
    <div className="App">
      <Table />
      {/* <LifecycleA /> */}
      {/* <Form /> */}
      {/* <h2 className='error'>Hi</h2>
      <h2 className={styles.success}>Hello</h2>
      <Inline /> */}
      {/* <UserList /> */}
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
