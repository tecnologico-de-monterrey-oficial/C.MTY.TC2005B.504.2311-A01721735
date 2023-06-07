import './Gijon.css';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';


function Gijon() {
  return (
    <>
    <div className="todo">
    <Table>
     <tr>
        <td>
            <h1>Prueba de Gijón</h1>
            <h2>Mide la detección de situaciones de riesgo o problematicas sociales. </h2>
            <div className="parrafos">
                <p>¡Bienvenido a Abuelitos ABP!</p>
                <p>En esta prueba podemos saber como te encuentras en la realizacion de diferentes actividades basicas de la vida diaria.</p>
                <p>Selecciona la opcion mas cercana a tu situacion</p>
             </div>
         </td>

        <td className="fotoGijon">
         <img
              alt=""
              src="/social.png"
              height="260"
              align="left"
            />{' '}
        </td>
    </tr>

      </Table>
      
      <div className="container1">
        <Container fluid>
            <p className = "parrafos2">Llena los campos con tu informacion</p>
          <Row>
            <Col>
              <div className="form-container1">
                <h3 className="form-title1">Situacion Familiar</h3>
                <Form.Select  size="lg" aria-label="Default select example">
                  <option>Seleccione una opción</option>
                  <option value="1">Vive con pareja y/o familia sin conflicto.</option>
                  <option value="2">Vive con pareja de similar edad.</option>
                  <option value="3">Vive con pareja y/o familia y/o otros, pero no cubren todas las necesidades.</option>
                  <option value="4">Vive solo, hijos y/o familiares proximos que no cubren todas las necesidades. </option>
                  <option value="5">Viveo solo, familia lejana, desatendido, sin familia.</option>
                </Form.Select>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="form-container1">
                <h3 className="form-title1">Relaciones y Contactos Sociales</h3>
                <Form.Select  size="lg" aria-label="Default select example">
                  <option>Seleccione una opción</option>
                  <option value="1">Mantiene relaciones sociales fuera del domicilio.</option>
                  <option value="2">Solo se relaciona con familia/vecinos/otros, sale de casa.</option>
                  <option value="3">Solo se relaciona con familia, sale de casa.</option>
                  <option value="4">No sale de su domicilio, recibe familia o visitas (mas de 1 por semana).</option>
                  <option value="5">No sale del domicilio, ni recibe visitas (1 por semana).</option>
                </Form.Select>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="form-container1">
                <h3 className="form-title1">Apoyos Red Social</h3>
                <Form.Select  size="lg" aria-label="Default select example">
                  <option>Seleccione una opción</option>
                  <option value="1">No necesita ningun apoyo.</option>
                  <option value="2">Recibe apoyo de la familia y/o vecinos.</option>
                  <option value="3">Recibe apoyo social formal suficiente.</option>
                  <option value="4">Tiene soporte social pero es insuficiente.</option>
                  <option value="5">No tiene ningun soporte social y lo necesita.</option>
                </Form.Select>
              </div>
            </Col>
          </Row>

          <Button className="button" variant="secondary" size="lg" >Enviar Respuestas</Button>{' '}
        </Container>
      </div>
    </div>
    </>
  );
}

export default Gijon;