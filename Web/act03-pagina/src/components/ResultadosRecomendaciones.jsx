import './ResultadosRecomendaciones.css';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

function ResultadosRecomendaciones() {

  return (
  <>
    <div className="todoResultadoRecomendaciones">
    <Table>
     <tbody>
        <td>
            <h1>Mis Resultados</h1>
            <div className="parrafosResultadoRecomendaciones">
                <p>¡Bienvenido al área donde podrás conocer tus resultados!</p>
                <p>En esta área podrás observar los resultados junto con sus recomendaciones obtenidos de cada prueba que realizaste.</p>
                <p>Si deseas continuar, sigue moviendote hacia abajo.</p>
             </div>
         </td>

        <td className="fotoResultadoRecomendaciones">
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

    <div className="containerResultadoRecomendaciones">
        <h2>Test de Lawton</h2>
        <h3>¡Tu resultado es 7!</h3>
        <h3>Con este resultado se observa que te encuentras en una buena posición de independencia, pero te presentamos recomendaciones para seguir mejorando y mejorar este número. </h3>
    </div>

    <div className= "containerRecomendaciones">
      <div className="semaforo">
        <Table className = "tablaResultadosRecomendaciones">
          <tbody>
          <tr>
              <td>
                <h2>Recomendaciones: </h2>
                <p>1. Lorem ipsum dolor sit amet, consectetur... </p>
                <p>2. Lorem ipsum dolor sit amet, consectetur... </p>
                <p>3. Lorem ipsum dolor sit amet, consectetur... </p>
                <p>4. Lorem ipsum dolor sit amet, consectetur... </p>
              </td>
              <td className ="tdImagen">  <img
              alt=""
              src="/semaforo.png"
              height="400"
              align="left"
            />{' '}</td>
          </tr>
          </tbody>
        </Table>
      </div>
    </div>

</div>
</>
  );
}


export default ResultadosRecomendaciones;
