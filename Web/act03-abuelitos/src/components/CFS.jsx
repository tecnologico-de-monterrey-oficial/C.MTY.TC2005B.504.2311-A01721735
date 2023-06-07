import './CFS.css';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';


function CFS() {
  return (
    <>
    <div className="todo">
    <Table>
     <tr>
        <td>
            <h1>Prueba de CFS</h1>
            <h2>Mide y determina el nivel de debilidad muscular. </h2>
            <div className="parrafos">
                <p>¡Bienvenido a Abuelitos ABP!</p>
                <p>En esta prueba podemos saber como te encuentras en la realizacion de diferentes actividades basicas de la vida diaria.</p>
                <p>Selecciona la opcion mas cercana a tu situacion</p>
             </div>
         </td>

        <td>
         <img className="fotoCFS"
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
                <h3 className="form-title1">¿Está usted cansado?</h3>
                <Form.Select  size="lg" aria-label="Default select example">
                  <option>Seleccione una opción</option>
                  <option value="1">Sí</option>
                  <option value="2">No</option>
                </Form.Select>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="form-container1">
                <h3 className="form-title1">¿Es incapaz de sunir un piso de escaleras?</h3>
                <Form.Select  size="lg" aria-label="Default select example">
                  <option>Seleccione una opción</option>
                  <option value="1">Sí</option>
                  <option value="2">No</option>
                </Form.Select>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="form-container1">
                <h3 className="form-title1">¿Es incapaz de caminar una manzana?</h3>
                <Form.Select  size="lg" aria-label="Default select example">
                  <option>Seleccione una opción</option>
                  <option value="1">Sí</option>
                  <option value="2">No</option>
                </Form.Select>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="form-container1">
                <h3 className="form-title1">¿Tienen más de 5 enfermedades?</h3>
                <Form.Select  size="lg" aria-label="Default select example">
                  <option>Seleccione una opción</option>
                  <option value="1">Sí</option>
                  <option value="2">No</option>
                </Form.Select>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="form-container1">
                <h3 className="form-title1">¿Ha perdido mas del 5% de su peso en los últimos 6 meses?</h3>
                <Form.Select  size="lg" aria-label="Default select example">
                  <option>Seleccione una opción</option>
                  <option value="1">Sí</option>
                  <option value="2">No</option>
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

export default CFS;