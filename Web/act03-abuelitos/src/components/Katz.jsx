import './Katz.css';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';


function Katz() {
  return (
    <>
    <div className="todoGDS">
    <Table>
     <tbody>
        <td>
            <h1>Prueba de Katz</h1>
            <h2>Mide el desempeño para desarrollar las básicas de la vida diaria de una persona. </h2>
            <div className="parrafosGDS">
                <p>¡Bienvenido a Abuelitos ABP!</p>
                <p>En esta prueba podemos saber como te encuentras en la realizacion de diferentes actividades basicas de la vida diaria.</p>
                <p>Selecciona la opcion mas cercana a tu situacion</p>
             </div>
         </td>

        <td className="fotoKatz">
         <img
              alt=""
              src="/funcional.png"
              height="300"
              align="left"
            />{' '}
        </td>
        </tbody>
    </Table>
      
        <div className="containerGDS">
        <Container fluid>
        <p className = "parrafosGDS2">Llena los campos con tu informacion</p>
        <Table className="tableGDS">
        <tbody>
        <tr>
         <td className = "tablaGDS">
          <Row>
            <Col>
              <div className="form-containerGDS">
                <h3 className="form-titleGDS1">Bañarse</h3>
                <Form.Select className= "form-selectGDS" size="lg" aria-label="Default select example">
                  <option>Seleccione una opción</option>
                  <option value="1">No recibe ayuda</option>
                  <option value="2">Recibe ayuda con una parte del cuerpo.</option>
                  <option value="3">Recibe ayuda con mas de una parte.</option>
                  <option value="4">No se baña.</option>
                </Form.Select>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="form-containerGDS">
                <h3 className="form-titleGDS1">Vestirse</h3>
                <Form.Select className= "form-selectGDS" size="lg" aria-label="Default select example">
                  <option>Seleccione una opción</option>
                  <option value="1">Se viste solo</option>
                  <option value="2">Requiere ayuda para los zapatos.</option>
                  <option value="3">Recibe ayuda para el vestido.</option>
                  <option value="4">No se viste.</option>
                </Form.Select>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="form-containerGDS">
                <h3 className="form-titleGDS1">Sanitario</h3>
                <Form.Select className= "form-selectGDS"  size="lg" aria-label="Default select example">
                  <option>Seleccione una opción</option>
                  <option value="1">Va solo y se arregla.</option>
                  <option value="2">Recibe ayuda para ir y asearse.</option>
                  <option value="3">No va al servicio.</option>
                </Form.Select>
              </div>
            </Col>
          </Row>

          </td>
          
          <td className = "tablaGDS">
          <Row>
            <Col>
              <div className="form-containerGDS">
                <h3 className="form-titleGDS1">Levantarse</h3>
                <Form.Select  className= "form-selectGDS" size="lg" aria-label="Default select example">
                  <option>Seleccione una opción</option>
                  <option value="1">Se levanta y acuesta solo.</option>
                  <option value="2">Necesita ayuda.</option>
                  <option value="3">No puede salir de cama.</option>
                </Form.Select>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="form-containerGDS">
                <h3 className="form-titleGDS1">Comidas</h3>
                <Form.Select  className= "form-selectGDS" size="lg" aria-label="Default select example">
                  <option>Seleccione una opción</option>
                  <option value="1">Come solo con cubiertos.</option>
                  <option value="2">Requiere ayuda.</option>
                  <option value="3">Requiere ayuda total.</option>
                  <option value="4">Sonda.</option>
                </Form.Select>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="form-containerGDS">
                <h3 className="form-titleGDS1">Continencias</h3>
                <Form.Select  className= "form-selectGDS" size="lg" aria-label="Default select example">
                  <option>Seleccione una opción</option>
                  <option value="1">Contiene todo el día y noche.</option>
                  <option value="2">Incontinencia ocasional nocturna.</option>
                  <option value="3">Incontinencia permanente.</option>
                </Form.Select>
              </div>
            </Col>
             </Row>
            </td>
            </tr>
            </tbody>
         </Table>
          <Button className="button" variant="secondary" size="lg" >Enviar Respuestas</Button>{' '}
        </Container>
      </div>
    </div>
    </>
  );
}

export default Katz;