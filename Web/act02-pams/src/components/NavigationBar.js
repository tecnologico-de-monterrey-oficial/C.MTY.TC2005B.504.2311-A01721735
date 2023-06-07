import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

function NavigationBar() {
    return (
        <Navbar className="NavBar" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to='/'>
          <img
              alt=""
              src="/logoHorizonte.png"
              height="50"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link className="NavLink" as={Link} to="/">Abuelitos ABP</Nav.Link>
            <Nav.Link className="NavLink" as={Link} to="/pams">Personas Adultas Mayores</Nav.Link> */}
            <Link className="Link" to="/">Abuelitos ABP</Link>
            <Link className="Link" to="/pams">Personas Adultas Mayores</Link>
            
          </Nav>
          <Nav>
          <Navbar.Brand as={Link} to='/profile'>
          <img
              alt=""
              src="/profileIcon.png"
              height="50"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          </Nav>
          <Nav>
            <Navbar.Brand as={Link} to='/login'>

              <Button variant="outline-dark"> Iniciar Sesión </Button>
              
            </Navbar.Brand>

            
          </Nav>
        </Container>
      </Navbar>
    );
}

export default NavigationBar;