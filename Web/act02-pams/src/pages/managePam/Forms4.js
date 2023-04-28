import { Form, Button, Row, Col, ProgressBar } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

function Forms4(){

    const navigate = useNavigate();
    const handleSubmit = (event) => {

        event.preventDefault();
        navigate('/pams');

    
};
    return(
        <>
        <div class = "vertical-center">
            <Form className ="form-info" align = "center"
            onSubmit =  {handleSubmit} >
                <h1>Informacion de Salud</h1>
                <Row className="mb-3">
                <Form.Group as={Col} controlId="formPeso">
                <Form.Label>Peso</Form.Label>
                <Form.Control 
                type="number" 
                placeholder="Teclea Peso"
                 />
                </Form.Group>

                </Row>

                <Form.Group as={Col} controlId="formAltura">
                <Form.Label>Altura</Form.Label>
                <Form.Control 
                type="number" 
                placeholder="Teclea Altura"
                 />
                </Form.Group>

                <Form.Group as={Col} controlId="formSangre">
                <Form.Label>Tipo sangre</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Teclea Tipo de Sangre"
                 />
                </Form.Group>

                <br></br>
                

                <div className="mb-3">
          <ProgressBar striped variant = "success" animated now = {84} />
          </div>

                <Button variant="primary" type="submit" onClick={() => navigate(`/pams/add2`)}>
                    Regresar
                </Button>

                <Button variant="success" type="submit">
                 Guardar
              </Button>

                

                </Form>
                </div>

        </>
    );
}

export default Forms4;