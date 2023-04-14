import './App.css';
import Title from './components/Title';
import Counter from './components/Counter';

function App() {

  const name = 'Eduardo Tello';

  return (
    <div className="App">
      <Title 
        title = 'My Profile'
        name = {name}
      />
      <Counter />
    </div>
  );
}

export default App;
