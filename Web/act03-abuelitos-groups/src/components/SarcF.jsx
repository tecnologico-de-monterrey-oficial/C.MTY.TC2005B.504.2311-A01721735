import './SarcF.css';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';


function SarcF() {
  return (
    <>
    <div className="todo">
    <Table>
     <tr>
        <td>
            <h1>Prueba de Sarc-F</h1>
            <h2>Mide y determina el nivel de debilidad muscular. </h2>
            <div className="parrafos">
                <p>¡Bienvenido a Abuelitos ABP!</p>
                <p>En esta prueba podemos saber como te encuentras en la realizacion de diferentes actividades basicas de la vida diaria.</p>
                <p>Selecciona la opcion mas cercana a tu situacion</p>
             </div>
         </td>

        <td>
         <img className="fotoSarcF"
              alt=""
              src="/fisica.png"
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
                <h3 className="form-title1">¿Que tanta dificultad tiene para llevar o cargar 4-5 kilogramos?</h3>
                <Form.Select  size="lg" aria-label="Default select example">
                  <option>Seleccione una opción</option>
                  <option value="1">Ninguna</option>
                  <option value="2">Alguna</option>
                  <option value="3">Mucha o incapaz</option>
                </Form.Select>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="form-container1">
                <h3 className="form-title1">¿Qué tanta dificultad tiene para curzar caminando por un cuarto?</h3>
                <Form.Select  size="lg" aria-label="Default select example">
                  <option>Seleccione una opción</option>
                  <option value="1">Ninguna</option>
                  <option value="2">Alguna</option>
                  <option value="3">Mucha, usando auxiliares o incapaz</option>
                </Form.Select>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="form-container1">
                <h3 className="form-title1">¿Qué tanta dificultad tiene para levantarse de una silla o cama?</h3>
                <Form.Select  size="lg" aria-label="Default select example">
                  <option>Seleccione una opción</option>
                  <option value="1">Ninguna</option>
                  <option value="2">Alguna</option>
                  <option value="3">Mucha o incapaz, sin ayuda</option>
                </Form.Select>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="form-container1">
                <h3 className="form-title1">¿Qué tanta dificultad tiene para subir 10 escalones?</h3>
                <Form.Select  size="lg" aria-label="Default select example">
                  <option>Seleccione una opción</option>
                  <option value="1">Ninguna</option>
                  <option value="2">Alguna</option>
                  <option value="3">Mucha o incapaz</option>
                </Form.Select>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="form-container1">
                <h3 className="form-title1">¿Cuántas veces se ha caído en el último año?</h3>
                <Form.Select  size="lg" aria-label="Default select example">
                  <option>Seleccione una opción</option>
                  <option value="1">Ninguna</option>
                  <option value="2">1 a 3 caídas</option>
                  <option value="3">4 o más caídas</option>
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

export default SarcF;