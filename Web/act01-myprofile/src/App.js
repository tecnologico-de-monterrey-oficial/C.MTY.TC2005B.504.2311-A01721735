import './App.css';

import Counter from './pages/counter/Counter';


import NavBar from './components/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Profile from './pages/profile/Profile';
import Classes from './pages/classes/Classes';
import Projects from './pages/projects/Projects';
import AddCourse from './pages/addCourse/AddCourse';

function App() {


  return (
    <div className="App">

      
      <BrowserRouter>
      <NavBar />
      <Routes>  
          <Route path = "/" element = {<Profile />} />
          <Route path = "/classes" element = {<Classes />} />
          <Route path = "/counter" element = {<Counter />} />
          <Route path = "/projects" element = {<Projects />} />
          <Route path = "/addCourse" element = {<AddCourse />} />

      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
