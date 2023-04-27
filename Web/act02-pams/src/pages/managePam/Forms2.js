import { Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

function Forms2(){
    const navigate = useNavigate();
    return(
        <>
        <div class = "vertical-center">
            <Form className ="form-info" align = "center" >
                <Row className="mb-3">

                <Form.Group as={Col} controlId="formPais">
                <Form.Label>Pais</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Teclea Pais"
                 />
                </Form.Group>

                <Form.Group as={Col} controlId="formEstado">
                <Form.Label>Estado</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Teclea Estado"
                 />
                </Form.Group>
                </Row>

                <Row className="mb-3">
                <Form.Group as={Col} controlId="formCiudad">
                <Form.Label>Ciudad</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Teclea Ciudad"
                 />
                </Form.Group>

                <Form.Group as={Col} controlId="formColonia">
                <Form.Label>Colonia</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Teclea Colonia"
                 />
                </Form.Group>

                <Row>
                <Form.Group as={Col} controlId="formCalle">
                <Form.Label>Calle</Form.Label>
                <Form.Control
                type="text"
                placeholder="Teclea Calle"
                />
                </Form.Group>
                
                <Form.Group as={Col} controlId="formCodigoPostal">
                <Form.Label>Codigo Postal</Form.Label>
                <Form.Control
                type="number"
                placeholder="Teclea Codigo Postal"
                min = "0"
                data-bind = "value:replyNumber"
                />
                </Form.Group>
                </Row>
                </Row>


                <div>

                <Button variant="primary" type="submit" onClick={() => navigate(`/pams/add`)}>
                    Regresar
                </Button>



          <Button variant="danger" type="submit" onClick={() => navigate(`/pams/add3`)}>
            Siguiente
            </Button>
          
          <Button variant="success" type="submit">
                 Guardar
              </Button>
        </div>
                </Form>

        </div>
        </>

    );
}

export default Forms2;