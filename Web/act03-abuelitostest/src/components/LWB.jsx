import './LWB.css';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';


function LWB() {
  return (
    <>
    <div className="todoGDS">
    <Table>
     <tbody>
        <td>
            <h1>Prueba de LWB</h1>
            <h2>Permite detectar las primeras señales de dificultad y falta de autonomía en la persona. </h2>
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
                <h3 className="form-titleGDS1">Telefono</h3>
                <Form.Select className= "form-selectGDS" size="lg" aria-label="Default select example">
                  <option>Seleccione una opción</option>
                  <option value="1">Lo usa por iniciativa propia.</option>
                  <option value="2">Marca solo números conocidos.</option>
                  <option value="3">Contesta, pero no marca números.</option>
                  <option value="4">No usa el teléfono.</option>
                </Form.Select>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="form-containerGDS">
                <h3 className="form-titleGDS1">Compras</h3>
                <Form.Select className= "form-selectGDS" size="lg" aria-label="Default select example">
                  <option>Seleccione una opción</option>
                  <option value="1">Vigila sus necesidades independientemente.</option>
                  <option value="2">Realiza independientemente pequeñas compras.</option>
                  <option value="3">Necesita ir acompañado para hacer cualquier compra.</option>
                  <option value="4">Totalmente incapaz de comprar. </option>
                </Form.Select>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="form-containerGDS">
                <h3 className="form-titleGDS1">Preparación de la comida</h3>
                <Form.Select className= "form-selectGDS"  size="lg" aria-label="Default select example">
                  <option>Seleccione una opción</option>
                  <option value="1">Organiza, prepara y sirve las comidas por sí solo adecuadamente. </option>
                  <option value="2">Prepara adecuadamente las comidas si se le proporcionan los ingredientes.</option>
                  <option value="3">Prepara, calienta y sirve las comidas, pero no sigue una dieta adecuada. </option>
                  <option value="4">Necesita que le preparen y sirvas las comidas.</option>
                </Form.Select>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="form-containerGDS">
                <h3 className="form-titleGDS1">Cuidado de la casa</h3>
                <Form.Select className= "form-selectGDS"  size="lg" aria-label="Default select example">
                  <option>Seleccione una opción</option>
                  <option value="1">Mantiene la casa solo o con ayuda ocasional (para trabajos pesados).</option>
                  <option value="2">Realiza tareas ligeras, como lavar los platos o hacer las camas.</option>
                  <option value="3">Necesita ayuda en todas las labores de la casa.</option>
                  <option value="4">No participa en ninguna labor de la casa. </option>
                </Form.Select>
              </div>
            </Col>
          </Row>

          </td>
          
          <td className = "tablaGDS">
          <Row>
            <Col>
              <div className="form-containerGDS">
                <h3 className="form-titleGDS1">Lavado de la ropa</h3>
                <Form.Select  className= "form-selectGDS" size="lg" aria-label="Default select example">
                  <option>Seleccione una opción</option>
                  <option value="1">Lava por sí solo toda su ropa.</option>
                  <option value="2">Lava por sí solo pequeñas prendas.</option>
                  <option value="3">Todo el lavado de ropa debe ser realizado por otro.</option>
                </Form.Select>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="form-containerGDS">
                <h3 className="form-titleGDS1">Uso de medios de transporte</h3>
                <Form.Select  className= "form-selectGDS" size="lg" aria-label="Default select example">
                  <option>Seleccione una opción</option>
                  <option value="1">Viaja solo en transporte público o conduce su propio coche. </option>
                  <option value="2">Es capaz de tomar un taxi, pero no usa otro medio de transporte. </option>
                  <option value="3">Viaja en transporte público cuando va acompañado por otra persona. </option>
                  <option value="4">Sólo utiliza el taxo o el automóvil con ayuda de otros.</option>
                  <option value="5">No viaja.</option>
                </Form.Select>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="form-containerGDS">
                <h3 className="form-titleGDS1">Responsabilidad respecto a su medicación</h3>
                <Form.Select  className= "form-selectGDS" size="lg" aria-label="Default select example">
                  <option>Seleccione una opción</option>
                  <option value="1">Es capaz de tomar su medicación a la hora y con la dosis correcta. </option>
                  <option value="2">Toma su medicación si la dosis le es preparada previamente. </option>
                  <option value="3">No es capaz de administrarse su medicación.</option>
                </Form.Select>
              </div>
            </Col>
             </Row>

             <Row>
            <Col>
              <div className="form-containerGDS">
                <h3 className="form-titleGDS1">Manejo de sus asuntos económicos</h3>
                <Form.Select className= "form-selectGDS"  size="lg" aria-label="Default select example">
                  <option>Seleccione una opción</option>
                  <option value="1">Se encarga de sus asuntos económcos por sí solo. </option>
                  <option value="2">Realiza las compras de cada día, pero necesita ayuda en las grandes compras. </option>
                  <option value="3">Incapaz de manejar su dinero. </option>
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

export default LWB;