import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        <Navbar bg="primary" variant="dark">
        <Container>
          
          <Navbar.Brand href="#home">
            <img
              src="/logotecmty.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              />{' '}
              


            Tec</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Perfil</Nav.Link>
            <Nav.Link href="#features">Classes</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    );
}

export default NavBar;