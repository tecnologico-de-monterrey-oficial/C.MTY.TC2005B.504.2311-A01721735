import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Abuelitos from './components/Abuelitos';
import PersonasAdultasMayores from './components/PersonasAdultasMayores';
import ManagePam from './components/ManagePam';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Abuelitos />} />
          <Route path="/pams" element={<PersonasAdultasMayores />} />
          <Route path="/pams/add" element={<ManagePam />} />
          <Route path="/pams/edit/:pam_id" element={<ManagePam />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;