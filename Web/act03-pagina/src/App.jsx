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
import EditRegistro from './components/EditRegistro';
import Signin from './components/Signin';
import Protected from './components/Protected';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function App() {

  const { user } = useSelector((state) => state.auth);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (user) {
      setIsLogged(true);
    }
  }, [user]);
  
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Abuelitos />} />
          <Route 
            path="/pams" 
            element={
              <Protected isSignedIn={isLogged}>
                <PersonasAdultasMayores />
              </Protected>
            } />
          <Route path="/pams/add" element={<ManagePam />} />
          <Route path="/pams/edit/:pam_id" element={<EditRegistro />} />
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
          <Route path = "/Login" element={<Signin />} />
          <Route path = "/Atras" element={<Abuelitos />} />
         
          
          
          
        </Routes>
        <BottomNav />
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;