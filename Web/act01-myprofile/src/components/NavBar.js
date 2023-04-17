import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link }  from 'react-router-dom';

function NavBar() {
    return (
        <Navbar bg="primary" variant="dark">
        <Container>
          
          <Navbar.Brand as = {Link} to="/">
            <img
                alt=""
              src="/logotecmty.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              />{' '}
    

            Tec de Mty</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as = {Link} to = "/">Perfil</Nav.Link>
            <Nav.Link as = {Link} to = "/classes">Classes</Nav.Link>
            <Nav.Link as = {Link} to = "/counter">Counter</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>

    );
}

export default NavBar;