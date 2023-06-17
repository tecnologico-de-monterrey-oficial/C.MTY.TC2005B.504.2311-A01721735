import './Resultados.css';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

function Resultados() {

  return (
  <>
    <div className="todoResultado">
    <Table>
     <tbody>
        <td>
            <h1>Mis Resultados</h1>
            <div className="parrafosResultado">
                <p>¡Bienvenido al área donde podrás conocer tus resultados!</p>
                <p>En esta área podrás observar los resultados junto con sus recomendaciones obtenidos de cada prueba que realizaste.</p>
                <p>Si deseas continuar, sigue moviendote hacia abajo.</p>
             </div>
         </td>

        <td className="fotoResultado">
         <img
              alt=""
              src="/fotoperfil.jpg"
              height="300"
              align="left"
            />{' '}
            <p>Horacio Pérez</p>
        </td>
        </tbody>
    </Table>

    <div className="containerResultado">
    <Container fluid>
     <h3>Pruebas</h3>
    </Container>
     </div>

     <div className="Resultados">
      <div className="topButtonsResultados">
        <div className="buttonContainerResultados">
         <div className="buttonResultados">
             <img src="braintransparent.png" alt="Button Image" className="iconImg" />
        </div>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                FUNCIONAL
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/ResultadosRecomendaciones" href="#/action-1">Katz</Dropdown.Item>
                <Dropdown.Item href="#/action-2">LWB</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Barthel</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>

        <div className="buttonContainerResultados">
        <div className="buttonResultados">
            <img src="calendar.png" alt="Button Image" className="iconImg" />
        </div>
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
            COGNITIVA
            </Dropdown.Toggle>
            <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">MMSE</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Reloj</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        </div>

      <div className="buttonContainerResultados">
       <div className="buttonResultados">
            <img src="social.png" alt="Button Image" className="iconImg" />
      </div>
            <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
            SOCIAL
            </Dropdown.Toggle>
            <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Gijón</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        </div>
     </div>

  <div className="bottomButtonsResultados">
    <div className="buttonContainerResultados">
        <div className="buttonResultados">
            <img src="Heart.png" alt="Button Image" className="iconImg" />
        </div>
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
            AFECTIVA
            </Dropdown.Toggle>
            <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">GDS</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
     </div>

        <div className="buttonContainerResultados">
        <div className="buttonResultados">
            <img src="ejercicio.png" alt="Button Image" className="iconImg" />
        </div>
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
            FISICA
            </Dropdown.Toggle>
            <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">SarcF</Dropdown.Item>
            <Dropdown.Item href="#/action-2">SPPB</Dropdown.Item>
            <Dropdown.Item href="#/action-3">CFS</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        </div>
  </div>
</div>
</div>
</>
  );
}


export default Resultados;
