import './ResultadosAdministrador.css';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

function ResultadosAdmnistrador() {
  return (
  <>
<div className="todoResultadoAdministrador">
    <Table>
     <tbody>
        <td>
            <h1>Resultados</h1>
        </td>
        </tbody>
    </Table>

    <div className="containerResultadoAdministrador">
      <h2> ¿A quién deseas buscar?</h2>
      <h2> Resultados Poblacionales</h2>
    </div>
    
    <div className="ResultadosAdmin">
      <div className="topButtonsAdmin">
        <div className="buttonContainerAdmin">
         <div className="buttonAdmin">
             <img src="braintransparent.png" alt="Button Image" className="iconImg" />
        </div>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                FUNCIONAL
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/ResultadosAdministradorPam" href="#/action-1">Katz</Dropdown.Item>
                <Dropdown.Item as={Link} to="/ResultadosPrueba"href="#/action-2">LWB</Dropdown.Item>
                <Dropdown.Item as={Link} to="/ResultadosGrafica" href="#/action-2">Barthel</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>

        <div className="buttonContainerAdmin">
        <div className="buttonAdmin">
            <img src="calendar.png" alt="Button Image" className="iconImg" />
        </div>
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
            COGNITIVA
            </Dropdown.Toggle>
            <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/ResultadosPregunta" href="#/action-1">MMSE</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Reloj</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        </div>

      <div className="buttonContainerAdmin">
       <div className="buttonAdmin">
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

  <div className="bottomButtonsAdmin">
    <div className="buttonContainerAdmin">
        <div className="buttonAdmin">
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

        <div className="buttonContainerAdmin">
        <div className="buttonAdmin">
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

export default ResultadosAdmnistrador;
