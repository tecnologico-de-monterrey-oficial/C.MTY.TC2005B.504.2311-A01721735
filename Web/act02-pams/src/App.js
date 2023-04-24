import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/NavigationBar';
import AbuelitosABP from './pages/abuelitosABP/AbuelitosABP';
import PersonasAdultasMayores from './pages/pams/PersonasAdultasMayores';
import ManagePam from './pages/managePam/ManagePam';

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
