import { Form, Button, Row, Col,ProgressBar } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import './ManagePam.css';

function Forms2(){
    const navigate = useNavigate();
    return(
        <>
        <div class = "vertical-center">
            <Form className ="form-info" align = "center" >
                <h1>Informacion de Grupo</h1>
                <Row className="mb-3">

                <Form.Group as={Col} controlId="formGrupo">
          <Form.Label>Grupos<span className="customAsterisk">*</span></Form.Label>
          <Form.Select placeholder="Seleciona Grupo..">
            <option value = "" disabled selected>Selecciona Grupo..</option>
            <option>Decanto</option>
            <option>Zonas</option>
            <option>Parroquia</option>
            <option>Capillas</option>
            <option>Otros</option>
          </Form.Select>
        </Form.Group>

                
                </Row>


                <div>
                <div className="mb-3">
          <ProgressBar striped variant = "success" animated now = {78} />
          </div>

                <Button variant="primary" type="submit" onClick={() => navigate(`/pams/add2`)}>
                    Regresar
                </Button>



          <Button variant="danger" type="submit" onClick={() => navigate(`/pams/add4`)}>
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