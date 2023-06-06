import './BottomNav.css';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function BottomNav() {
    return (
        <Navbar className="bottom-navbar" variant="dark" expand="lg">
            
        <Navbar.Brand className="Navegacion">Navegación</Navbar.Brand>
           
          <Link className="Link2" to="/Contacto">
            Contacto
            </Link>
            <Link className="Link2" to="/">
            Sobre Nosotros
          </Link>
          <Link className="Link3" to="/">
            Abuelitos ABP
          </Link>
        </Navbar>
    );
};

export default BottomNav;

    