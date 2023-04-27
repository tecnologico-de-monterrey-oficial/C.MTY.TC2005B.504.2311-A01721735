import { Form, Button, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeName, changeLastName, changeEmail, changeBirthDate, addPam, editPam } from '../../store'; 
import "./ManagePam.css";
import { useNavigate, useParams } from "react-router-dom";
// import GridComplexExample from "../../components/GridComplexExample";


function ManagePam() {
  const params = useParams();
  console.log(params);
  const [mode, setMode] = useState('add');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name, last_name, email, birth_date  } = useSelector((state) => state.pam);

  useEffect(() => {
    if (params.pam_id) {
      setMode('edit');
    } else {
      setMode('add');
    }
  }, [params]);

  

  const handleChangeName = (event) => {
    // console.log(event.target.value);
    dispatch(changeName(event.target.value));
  };
  const handleChangeLastName = (event) => {
    // console.log(event.target.value);
    dispatch(changeLastName(event.target.value));
  };
  const handleChangeEmail = (event) => {
    // console.log(event.target.value);
    dispatch(changeEmail(event.target.value));
  };
  const handleChangeBirthDate = (event) => {
    // console.log(event.target.value);
    dispatch(changeBirthDate(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (mode === 'add') {
      dispatch(addPam(
        { 
          name: name, 
          last_name: last_name, 
          email: email, 
          birth_date: birth_date 
        }
      ));
    } else {
      dispatch(editPam(
        {
          id: params.pam_id,
          name: name,
          last_name: last_name,
          email: email,
          birth_date: birth_date
        }
      ));
    }
    navigate('/pams');
  };

  return (

    <>  
    
    
    <div class="vertical-center"> 
    <Form className ="form-info" align = "center" onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Teclea Nombre"
          value={name}
          onChange={handleChangeName}  />
        </Form.Group>
        <Form.Group as={Col} controlId="formApellido">
          <Form.Label>Apellidos</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Teclea tus apellidos"
          value={last_name}
          onChange={handleChangeLastName} />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formEmail">
          <Form.Label>Correo</Form.Label>
          <Form.Control 
          type="email" 
          placeholder="Teclea Email"
          value={email}
          onChange={handleChangeEmail} />
        </Form.Group>
        </Row>
      
      <Row className="mb-3">
      <Form.Group as={Col} controlId="formTelefono">
        <Form.Label>Telefono</Form.Label>
        <Form.Control placeholder="Ej. 819001485" />
      </Form.Group>
      <Form.Group as={Col} controlId="formRol">
          <Form.Label>Rol</Form.Label>
          <Form.Select placeholder="Seleciona Rol..">
            <option value = "" disabled selected>Seleciona Rol..</option>
            <option>Persona de tercera edad</option>
            <option>Voluntario</option>
          </Form.Select>
        </Form.Group>
      </Row>
      <Row className="mb-3">
          <Form.Group as={Col}  controlId="birth_date">
        <Form.Label>Fecha de Nacimiento</Form.Label>
      <Form.Control
        type="date"
         placeholder="Teclea tu fecha de nacimiento"
          value={birth_date}
          onChange={handleChangeBirthDate}
        />
        </Form.Group>
        <Form.Group as={Col} controlId="formRol">
          <Form.Label>Genero</Form.Label>
          <Form.Select placeholder="Seleciona Genero..">
            <option value = "" disabled selected>Selecciona Genero..</option>
            <option>Hombre</option>
            <option>Mujer</option>
            <option>Otro</option>
          </Form.Select>
        </Form.Group>
      </Row> 
      
      <Row className="mb-3">
      <Form.Group as={Col} controlId="formStatus">
    <Form.Label>Estado civil</Form.Label>
    <Form.Select placeholder="Seleciona sstatus">
      <option value = "" disabled selected>Estado civil..</option>
      <option>Soltero</option>
      <option>Casado</option>
      <option>Divorciado</option>
      <option>Separacion en proceso judicial</option>
      <option>Viudo</option>
      <option>Concubinato</option>
    </Form.Select>
    
  </Form.Group>
  <Form.Group as={Col} controlId="formEscolaridad">
  <Form.Label>Escolaridad</Form.Label>
  <Form.Select placeholder="Selecciona escolaridad..">
    <option value = "" disabled selected>Selecciona escolaridad..</option>
    <option>Ninguno</option>
    <option>Preescolar</option>
    <option>Primaria</option>
    <option>Secundaria</option>
    <option>Bachillerato</option>
    <option>Profesional</option>
    
  </Form.Select>
</Form.Group>

        </Row>




        <div>
          <Button variant="danger" onClick={() => navigate(`/pams/add2`)}>Continuar</Button>
           <Button variant="success" type="submit">
             {mode === "add" ? 'Guardar' : 'Actualizar'}
          </Button>
        </div>
    </Form>
    </div>
    </>
  );
  
  
  
  

  // return (
  //   <div className="AddPam">
  //     <Form onSubmit={handleSubmit}>
  //       <Form.Group className="mb-3" controlId="name">
  //         <Form.Label>Name</Form.Label>
  //         <Form.Control
  //           type="text"
  //           placeholder="Teclea el nombre"
  //           value={name}
  //           onChange={handleChangeName} 
  //         />
  //       </Form.Group>
  //       <Form.Group className="mb-3" controlId="last_name">
  //         <Form.Label>Apellidos</Form.Label>
  //         <Form.Control
  //           type="text"
  //           placeholder="Teclea tus apellidos"
  //           value={last_name}
  //           onChange={handleChangeLastName}
  //         />
  //       </Form.Group>
  //       <Form.Group className="mb-3" controlId="email">
  //         <Form.Label>Correo</Form.Label>
  //         <Form.Control
  //           type="email"
  //           placeholder="Teclea tu correo"
  //           value={email}
  //           onChange={handleChangeEmail}
  //         />
  //       </Form.Group>
  //       <Form.Group className="mb-3" controlId="birth_date">
  //         <Form.Label>Fecha de Nacimiento</Form.Label>
  //         <Form.Control
  //           type="date"
  //           placeholder="Teclea tu fecha de nacimiento"
  //           value={birth_date}
  //           onChange={handleChangeBirthDate}
  //         />
  //       </Form.Group>
  //       <div>
  //         <Button variant="success" type="submit">
  //           {mode === "add" ? 'Agregar' : 'Actualizar'}
  //         </Button>
  //       </div>
  //     </Form>
  //   </div>
  // );
}

export default ManagePam;