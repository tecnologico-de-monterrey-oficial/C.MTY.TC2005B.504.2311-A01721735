import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Registro.css';
import Contacto from './Contacto';
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {useNavigate,useParams} from 'react-router-dom';
import {
  changeName, 
    changeLastName, 
    changeGenderId,
    changeRoleId,
    changePhone,
    changeEmail,
    changeCountry,
    changeState,
    changeCity,
    changeAddress1,
    changeAddress2,
    changeZipCode,
    changeBirthDate,
    changeDeceasedDate,
    changeGuardianId,
    changeDoctorId,
    changeBelongsToArchdiocese,
    changePamGroupId,
    changePam, 
    resetPamValues ,
  useAddPamMutation,
  useEditPamMutation,
  useFetchGroupArchdiocesesQuery,
  useFetchGroupDataQuery,
  useFetchDeaneriesQuery,
  useFetchZonesQuery,
} from "../store";

function Registro() {
  const params = useParams();
    const [isFinished, setIsFinished] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const {first_name, last_name,gender_id,role_id,phone,email,country,state,city,address_1,address_2,zip_code,birth_date,deceased_date,guardian_id,doctor_id,belongs_to_archdiocese,pam_group_id} = 
    useSelector((state) => state.pam);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [addPam, resultsAdd] = useAddPamMutation();
  const [editPam, resultsEdit] = useEditPamMutation();

  useEffect(() => {
    if (params.id) {
    }
  }, [params.id]);

  
      
const handleChangeName = (event) => {
      console.log(event.target.value);
      dispatch(changeName(event.target.value));
    };
    const handleChangeLastName = (event) => {
      dispatch(changeLastName(event.target.value));
    };
    const handleChangeGenderId = (event) => {
      const selectedValue = event.target.value;
      const newGenderId = selectedValue === "Masculino" ? 1 : 2; 
    
      dispatch(changeGenderId(newGenderId));
    };
    
    const handleChangeRoleId = (event) => {
      dispatch(changeRoleId(event.target.value));
    };

    const handleChangePhone = (event) => {
      dispatch(changePhone(event.target.value));
    };
    const handleChangeEmail = (event) => {
      dispatch(changeEmail(event.target.value));
    };
    const handleChangeCountry = (event) => {
      dispatch(changeCountry(event.target.value));
    };
    const handleChangeState = (event) => {
      dispatch(changeState(event.target.value));
    };
    const handleChangeCity = (event) => {
      dispatch(changeCity(event.target.value));
    };
    const handleChangeAddress1 = (event) => {
      dispatch(changeAddress1(event.target.value));
    };

    const handleChangeAddress2 = (event) => {
      dispatch(changeAddress2(event.target.value));
    };

    const handleChangeZipCode = (event) => {
      dispatch(changeZipCode(event.target.value));
    };

    const handleChangeBirthDate = (event) => {
      dispatch(changeBirthDate(event.target.value));
    };

    const handleChangeDeceasedDate = (event) => {
      dispatch(changeDeceasedDate(event.target.value));
    };

    const handleChangeGuardianId = (event) => {

      dispatch(changeGuardianId(event.target.value));
    };

    const handleChangeDoctorId = (event) => {

      dispatch(changeDoctorId(event.target.value));
    };

    const handleChangeBelongsToArchdiocese = (event) => {
      if (event.target.checked) {
        dispatch(changeBelongsToArchdiocese(1));
        
      } else {
        dispatch(changeBelongsToArchdiocese(0));
       
      }
    
    };

    const handleChangePamGroupId = (event) => {
      
      dispatch(changePamGroupId(event.target.value));
    };

    const handleSubmit = (event) => {
  event.preventDefault();
  console.log('EDIT ENVIADO');
  console.log('Nombre: ' + first_name);
  console.log('Apellido: ' + last_name);
  console.log("PAM GROUP ID: " + pam_group_id);
  editPam({
    pam_id: params.pam_id,
    first_name: first_name,
    last_name: last_name,
    gender_id: gender_id,
    role_id: role_id,
    phone: phone,
    email: email,
    country: country,
    state: state,
    city: city,
    address_1: address_1,
    address_2: address_2,
    zip_code: zip_code,
    birth_date: birth_date,
    deceased_date: deceased_date,
    guardian_id: guardian_id,
    doctor_id: doctor_id,
    belongs_to_archdiocese: belongs_to_archdiocese,
    pam_group_id: pam_group_id,
  })
    .then(() => {
      console.log("EDITADO");
      dispatch(resetPamValues());
      setIsFinished(true);
    })
    .catch((error) => {
      console.log(error);
    });
    
};



    const handleFinalizarClick = () => {
      setShowMessage(true);
    };
  return (
    <>
      <h1 className='headerIzqRegistro'>CAMBIOS</h1>
      <Container className='container-borderRegistro'>
      
        <h3 className='headerIzqRegistro2'>EDITAR CAMPOS</h3>
        <Form className='form-label-left' onSubmit = {handleSubmit}>
          <Row>
            <Col md={5}>
              <Form.Group controlId='formNombre'>
                <Form.Label  >Nombre</Form.Label>
                <Form.Control type='text' 
                placeholder='Teaclea Nombre'
                value = {first_name}
                onChange = {handleChangeName} />
              </Form.Group>

              <Form.Group controlId='formApellido'>
                <Form.Label className='form-label'>Apellido</Form.Label>
                <Form.Control type='text'
                 placeholder='Teclea Apellido'
                  value = {last_name}
                  onChange = {handleChangeLastName} 
                 />
              </Form.Group>

              <Row>
                <Col md={6}>
                  <Form.Group controlId='formDateOfBirth'>
                    <Form.Label className='form-label'>Fecha de Nacimiento</Form.Label>
                    <Form.Control type='date' placeholder = 'DD/MM/YYYY' 
                    value = {birth_date}
                    onChange = {handleChangeBirthDate} 
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId='formSexo'>
                    <Form.Label className='form-label'>Sexo</Form.Label>
                    <Form.Select
  className="form-selectRegistro"
  placeholder="Seleccione una opción"
  value={gender_id === 1 ? "Masculino" : "Femenino"}
  onChange={handleChangeGenderId}
>
  <option disabled value="">
    Seleccione una opción
  </option>
  <option value="Masculino">Masculino</option>
  <option value="Femenino">Femenino</option>
</Form.Select>

                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group controlId='formEmail'>
                    <Form.Label className='form-label'>Email</Form.Label>
                    <Form.Control type='email' placeholder='Teclea tu correo' 
                    value = {email}
                    onChange = {handleChangeEmail}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId='formTelefono'>
                    <Form.Label className='form-label'>Telefono</Form.Label>
                    <Form.Control type='text' placeholder='Teclea tu telefono' 
                    phone = {phone}
                    onChange = {handleChangePhone}

                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group controlId='formGuardianID'>
                    <Form.Label>Guardian ID</Form.Label>
                    <Form.Control type='number' placeholder='Teclea ID de guardian' 
                    value = {guardian_id}
                    onChange = {handleChangeGuardianId}
                    />
                  </Form.Group>
            </Col>

            {/* Espacio vacio*/}
            <Col md={2}></Col>

            {/* Lado derecho*/}
            <Col md={5}>
              <Form.Group controlId='formPais'>
                <Form.Label>Pais</Form.Label>
                <Form.Select className = 'form-selectRegistro' placeholder='Seleccione una opción'
                value = {country}
                onChange = {handleChangeCountry}
                >
                  <option value='' disabled selected>Seleccione una opción</option>
                  <option>Pais 1</option>
                  <option>Pais 2</option>
                </Form.Select>
              </Form.Group>

              <Form.Group controlId='formEstado'>
                <Form.Label>Estado</Form.Label>
                <Form.Select className = 'form-selectRegistro' placeholder='Seleccione una opción'
                value = {state}
                onChange = {handleChangeState}
                >
                  <option value='' disabled selected>Seleccione una opción</option>
                  <option>Estado 1</option>
                  <option>Estado 2</option>
                </Form.Select>
              </Form.Group>

              <Form.Group controlId='formCiudad'>
                <Form.Label>Ciudad</Form.Label>
                <Form.Select className = 'form-selectRegistro' placeholder='Seleccione una opción'
                value = {city}
                onChange = {handleChangeCity}
                >
                  <option value='' disabled selected>Seleccione una opción</option>
                  <option>Ciudad 1</option>
                  <option>Ciudad 2</option>
                </Form.Select>
              </Form.Group>

              <Row>
                <Col md={6}>
                  <Form.Group controlId='formDireccion1'>
                    <Form.Label>Direccion 1</Form.Label>
                    <Form.Control type='text' placeholder='Teclea direccion 1' 
                    value = {address_1}
                    onChange = {handleChangeAddress1}
  
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId='formDireccion2'>
                    <Form.Label>Direccion 2</Form.Label>
                    <Form.Control type='text' placeholder='Teclea direccion 2'
                    value = {address_2}
                    onChange = {handleChangeAddress2}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                <Form.Group controlId='formDoctorID'>
                    <Form.Label>Doctor ID</Form.Label>
                    <Form.Control type='number' placeholder='Teclea ID de doctor' 
                    value = {doctor_id}
                    onChange =  {handleChangeDoctorId}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId='formCodigoPostal'>
                    <Form.Label>Codigo Postal</Form.Label>
                    <Form.Control type='text' placeholder='Teclea tu codigo postal' 
                    value = {zip_code}
                    onChange = {handleChangeZipCode}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
          <Form.Group controlId='formPamGroupId'>
                    <Form.Label>PAM Group ID</Form.Label>
                    <Form.Control type='number' placeholder='Teclea PAM Group ID' 
                    value = {pam_group_id}
                    onChange = {handleChangePamGroupId}
                    />
                  </Form.Group>
                  <Form.Group controlId='formDeceasedDate'>
                    <Form.Label className='form-label'>Fecha de Fallecimiento</Form.Label>
                    <Form.Control type='date' placeholder = 'DD/MM/YYYY' 
                    value = {deceased_date}
                    onChange = {handleChangeDeceasedDate}
                    />
                  </Form.Group>
                  </Row>

          <Form.Group className="mb-3" controlId="belongsArchdiocese">
          <Form.Label>¿Perteneces a una arquidiócesis?</Form.Label>
          <Form.Check
            type="switch"
            checked={belongs_to_archdiocese}
            onChange={handleChangeBelongsToArchdiocese}
          />
        </Form.Group>
        <Button
          className='buttonPruebaRegistro'
          variant='secondary'
          size='lg'
          type='submit'
          
        >
          Actualizar
        </Button>
        </Form>
        
      </Container>

      {isFinished && (
        <Container className='container-messageRegistro'>
          <h3> CAMBIOS HECHOS</h3>
          <h4> HAS HECHO CAMBIOS</h4>
        </Container>
      )}

      {!isFinished && (
        <Button
          className='buttonPruebaRegistro'
          variant='secondary'
          size='lg'
          type='submit'
          onClick={() => setIsFinished(true)}
          disabled={isFinished}
        >
          Finalizar
        </Button>
      )}
    
    <Contacto/>
    </>
  );
}

export default Registro;