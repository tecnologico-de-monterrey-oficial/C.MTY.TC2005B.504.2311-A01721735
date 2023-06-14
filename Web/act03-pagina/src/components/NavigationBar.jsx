import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./NavigationBar.css";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector} from "react-redux";
import { useEffect, useState } from "react";

function NavigationBar() {
  const { user } = useSelector((state) => state.auth);
const [isLogged, setIsLogged] = useState(false);
  useEffect (() => {
    if (user) {
      setIsLogged(true);
      console.log("USER ROLE");
      console.log(user.role);
    }
    else{
      setIsLogged(false);
    }
  }, [user]);

  

  return (
    <Navbar className="NavBar" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            alt=""
            src="/logo.png"
            height="30"
            className="d-inline-block align-top"
          />{" "}
        </Navbar.Brand>
        <Nav className="me-auto">
          {/* <Nav.Link className="NavLink" as={Link} to="/">Abuelitos ABP</Nav.Link>
            <Nav.Link className="NavLink" as={Link} to="/pams">Personas Adultas Mayores</Nav.Link> */}
          <Link className="Link" to="/">
            Inicio
          </Link>
          
            <Link className="Link" to="/pams">Personas Adultas Mayores</Link>
            
          <NavDropdown title="Áreas" id="basic-nav-dropdown">
         
              <NavDropdown.Item as={Link} to="/Afectivo">Afectivo</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Funcional">Funcional</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Social">Social</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Cognitiva">Cognitiva</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Fisica">Física</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Mi Perfil" id="basic-nav-dropdown">
         
              <NavDropdown.Item as={Link} to ="/Perfil" >Perfil</NavDropdown.Item>
            
              
              <NavDropdown.Item >Other</NavDropdown.Item>
            </NavDropdown>
            <Link className="Link" to="/Registro">Registro</Link>
          
        </Nav>
        <Nav className="justify-content-end">
            
          {isLogged && <Link className = "Link" to ="/Perfil">{user.displayName}</Link>}  
          {!isLogged && <Link className="Link" to="/login">Login</Link>}
          </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
