import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

function NavigationBar() {
    return (
        <Navbar className="NavBar" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to='/'>
          <img
              alt=""
              src="/logo.png"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link className="NavLink" as={Link} to="/">Abuelitos ABP</Nav.Link>
            <Nav.Link className="NavLink" as={Link} to="/pams">Personas Adultas Mayores</Nav.Link> */}
            <Link className="Link" to="/">Abuelitos</Link>
            <Link className="Link" to="/pams">Personas Adultas Mayores</Link>
          </Nav>
        </Container>
      </Navbar>
    );
}

export default NavigationBar;