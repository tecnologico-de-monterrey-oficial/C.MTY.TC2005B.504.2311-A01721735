import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import './Registro.css';
import Contacto from './Contacto';
import { useSelector, useDispatch } from "react-redux";

import {
  changeName, 
    changeLastName, 
    changeGenderId,
    changeEmail, 
    changeBirthDate, 
    changeBelongsToArchdiocese,
    changeRoleId,
    changePhone,
    changeCountry,
    changeState,
    changeCity,
    changeAddress1,
    changeAddress2,
    changeZipCode,
    changeDeceasedDate,
    changeGuardianId,
    changeDoctorId,
    changePamGroupId,
    changePam, 
    resetPamValues,
  useAddPamMutation,
  useEditPamMutation,
  useFetchGroupArchdiocesesQuery,
  useFetchGroupDataQuery,
  useFetchDeaneriesQuery,
  useFetchZonesQuery,
} from "../store";

const { first_name, last_name,gender_id, email, birth_date, role_id, belongs_to_archdiocese, phone, country,state,city,address_1,address_2,zip_code,deceased_date,guardian_id,doctor_id,pam_group } =
useSelector((state) => state.pam);
function EditRegistro() {
    const [isFinished, setIsFinished] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    const handleFinalizarClick = () => {
      setShowMessage(true);
      console.log("AAAAA");
      console.log(first_name);
      console.log(last_name);
      console.log(gender_id);
      console.log(email);
      console.log(birth_date);
      console.log(role_id);
      console.log(belongs_to_archdiocese);
    };
  return (
    <>
      <h1 className='headerIzqRegistro'>CAMBIO REGISTRO</h1>
      <Container className='container-borderRegistro'>
      
        <h3 className='headerIzqRegistro2'>Modificar los campos</h3>
        <Form className='form-label-left'>
          <Row>
            <Col md={5}>
              <Form.Group controlId='formNombre'>
                <Form.Label  >Nombre</Form.Label>
                <Form.Control type='text' placeholder='Teclea Nombre' />
              </Form.Group>

              <Form.Group controlId='formApellido'>
                <Form.Label className='form-label'>Apellido</Form.Label>
                <Form.Control type='text' placeholder='Teclea Apellido' />
              </Form.Group>

              <Row>
                <Col md={6}>
                  <Form.Group controlId='formDateOfBirth'>
                    <Form.Label className='form-label'>Fecha de Nacimiento</Form.Label>
                    <Form.Control type='date' placeholder = 'DD/MM/YYYY' />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId='formSexo'>
                    <Form.Label className='form-label'>Sexo</Form.Label>
                    <Form.Select className = 'form-selectRegistro' placeholder='Seleccione una opción'>
                      <option value='' disabled selected>Seleccione una opción</option>
                      <option>Masculino</option>
                      <option>Femenino</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group controlId='formEmail'>
                    <Form.Label className='form-label'>Email</Form.Label>
                    <Form.Control type='email' placeholder='Teclea tu correo' />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId='formTelefono'>
                    <Form.Label className='form-label'>Telefono</Form.Label>
                    <Form.Control type='text' placeholder='Teclea tu telefono' />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group controlId='formEscolaridad'>
                <Form.Label className='form-label'>Escolaridad</Form.Label>
                <Form.Select className = 'form-selectRegistro' placeholder='Selecciona Escolaridad'>
                  <option value='' disabled selected>Selecciona Escolaridad..</option>
                  <option>Escolaridad 1</option>
                  <option>Escolaridad 2</option>
                </Form.Select>
              </Form.Group>
            </Col>

            {/* Espacio vacio*/}
            <Col md={2}></Col>

            {/* Lado derecho*/}
            <Col md={5}>
              <Form.Group controlId='formPais'>
                <Form.Label>Pais</Form.Label>
                <Form.Select className = 'form-selectRegistro' placeholder='Seleccione una opción'>
                  <option value='' disabled selected>Seleccione una opción</option>
                  <option>Pais 1</option>
                  <option>Pais 2</option>
                </Form.Select>
              </Form.Group>

              <Form.Group controlId='formEstado'>
                <Form.Label>Estado</Form.Label>
                <Form.Select className = 'form-selectRegistro' placeholder='Seleccione una opción'>
                  <option value='' disabled selected>Seleccione una opción</option>
                  <option>Estado 1</option>
                  <option>Estado 2</option>
                </Form.Select>
              </Form.Group>

              <Form.Group controlId='formCiudad'>
                <Form.Label>Ciudad</Form.Label>
                <Form.Select className = 'form-selectRegistro' placeholder='Seleccione una opción'>
                  <option value='' disabled selected>Seleccione una opción</option>
                  <option>Ciudad 1</option>
                  <option>Ciudad 2</option>
                </Form.Select>
              </Form.Group>

              <Row>
                <Col md={6}>
                  <Form.Group controlId='formCalle'>
                    <Form.Label>Calle</Form.Label>
                    <Form.Control type='text' placeholder='Teclea tu calle' />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId='formNumero'>
                    <Form.Label>Numero</Form.Label>
                    <Form.Control type='text' placeholder='Teclea tu numero' />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group controlId='formColonia'>
                    <Form.Label>Colonia</Form.Label>
                    <Form.Control type='text' placeholder='Teclea tu colonia' />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId='formCodigoPostal'>
                    <Form.Label>Codigo Postal</Form.Label>
                    <Form.Control type='text' placeholder='Teclea tu codigo postal' />
                  </Form.Group>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
        
      </Container>

      {isFinished && (
        <Container className='container-messageRegistro'>
          <h3> REGISTRO FINALIZADO</h3>
          <h4> !Gracias por registrarte en Abuelitos ABP!</h4>
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

export default EditRegistro;