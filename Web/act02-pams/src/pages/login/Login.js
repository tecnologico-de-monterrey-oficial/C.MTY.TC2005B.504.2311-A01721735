
import { Form, Button, Row, Col,ProgressBar } from "react-bootstrap";
import "./Login.css";





function Login() {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("oscar");

    }

    return(
    <>
    <div class = "vertical-center">
        <Form className ="form-informacion2" align = "center"onSubmit =  {handleSubmit} >
            <h1>Login</h1>
            

            <Form.Group as={Col} controlId="formUsuario">
          <Form.Label>Usuario</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Teclea usuario"
          required

           />
        
        </Form.Group>

        <Form.Group as={Col} controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
          type="password" 
          placeholder="Teclea password"
          required
            />
        
        </Form.Group>
            
           


            <div>
            <div className="mb-3">

      </div>

            
      


      
    </div>
    <br></br>
    <Button variant="outline-dark" onClick={handleSubmit}>Iniciar Sesión</Button>
            </Form>

    </div>
    </>
    );
    
}

export default Login;
