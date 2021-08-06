 
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement} from './actions';


function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged.test)
  const dispatch = useDispatch();


  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>Counter</code> {counter}
        </p>
        <button onClick={() => dispatch(increment(3))}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <h3>{isLogged}</h3>
        
      </header>
    </div>
  );
}

export default App;
