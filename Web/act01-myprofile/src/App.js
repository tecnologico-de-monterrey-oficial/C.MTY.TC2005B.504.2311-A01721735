import './App.css';


import NavBar from './components/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Profile from './pages/profile/Profile';
import Classes from './pages/classes/Classes';
function App() {


  return (
    <div className="App">

      <BrowserRouter>
      <NavBar />
      <Routes>  
          <Route path = "/" element = {<Profile />} />
          <Route path = "/classes" element = {<Classes />} />

      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
