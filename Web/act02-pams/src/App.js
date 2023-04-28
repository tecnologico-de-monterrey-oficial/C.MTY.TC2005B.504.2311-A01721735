import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/NavigationBar';
import AbuelitosABP from './pages/abuelitosABP/AbuelitosABP';
import PersonasAdultasMayores from './pages/pams/PersonasAdultasMayores';
import ManagePam from './pages/managePam/ManagePam';
import Forms2 from './pages/managePam/Forms2';
import Forms3 from './pages/managePam/Forms3';
import Forms4 from './pages/managePam/Forms4';
import Profile from './pages/profile/Profile';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<AbuelitosABP />} />
          <Route path="/pams" element={<PersonasAdultasMayores />} />
          <Route path="/pams/add" element={<ManagePam />} />
          <Route path="/pams/edit/:pam_id" element={<ManagePam />} />
          <Route path="/pams/add2" element={<Forms2 />} />
          <Route path="/pams/add3" element={<Forms3 />} />
          <Route path="/pams/add4" element={<Forms4 />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
