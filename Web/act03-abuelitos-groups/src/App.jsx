import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import NavigationBar from './components/NavigationBar';
import Abuelitos from './components/Abuelitos';
import PersonasAdultasMayores from './components/PersonasAdultasMayores';
import ManagePam from './components/ManagePam';
import PruebaGDS from './components/PruebaGDS';
import Afectivo from './components/Afectivo';
import Funcional from './components/Funcional';
import BottomNav from './components/BottomNav';
import Contacto from './components/Contacto';
import Social from './components/Social';
import Cognitiva from './components/Cognitiva';
import Fisica from './components/Fisica';
import Perfil from './components/Perfil';
import Registro from './components/Registro';
import Gijon from './components/Gijon';
import GDS from './components/GDS';
import SarcF from './components/SarcF';
import CFS from './components/CFS';
import Katz from './components/Katz';
import LWB from './components/LWB';



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
          <Route path="/Afectivo" element={<Afectivo />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Funcional" element={<Funcional />} />
          <Route path="/Social" element={<Social />} />
          <Route path="/Cognitiva" element={<Cognitiva />} />
          <Route path="/Fisica" element={<Fisica />} />
          <Route path="/Perfil" element={<Perfil />} />
          <Route path="/Registro" element={<Registro />} />
          <Route path="/Gijon" element={<Gijon />} />
          <Route path="/SarcF" element={<SarcF />} />
          <Route path="/CFS" element={<CFS />} />
          <Route path="/Katz" element={<Katz />} />
          <Route path="/LWB" element={<LWB />} />
          <Route path="/GDS" element={<GDS />} />
          <Route path="/PruebaGDS" element={<PruebaGDS />} />
         
          
          
          
        </Routes>
        <BottomNav />
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;