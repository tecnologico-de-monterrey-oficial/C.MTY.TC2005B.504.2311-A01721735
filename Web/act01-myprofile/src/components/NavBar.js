import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link }  from 'react-router-dom';

function NavBar() {
    return (
        <Navbar bg="primary" variant="dark">
        <Container>
          
          <Navbar.Brand href="/">
            <img
                alt=""
              src="/logotecmty.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              />{' '}
    

            Tec de Mty</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">Perfil</Link>
            <Link to = "/classes">Classes</Link>
            
          </Nav>
        </Container>
      </Navbar>

    );
}

export default NavBar;