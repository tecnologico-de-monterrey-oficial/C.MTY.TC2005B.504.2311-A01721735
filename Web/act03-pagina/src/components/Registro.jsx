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
    changeArchdioceseId,
    changeZoneId,
    changeDeaneryId,
    changeChurchId,
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
    const {first_name, last_name,gender_id,role_id,phone,email,country,state,city,address_1,address_2,zip_code,birth_date,deceased_date,guardian_id,doctor_id,belongs_to_archdiocese,pam_group_id,archdiocese_id, zone_id, deanery_id, church_id} = 
    useSelector((state) => state.pam);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [addPam, resultsAdd] = useAddPamMutation();
  const dataArchdioceses = useFetchGroupArchdiocesesQuery();
  const [archdioceses, setArchdioceses] = useState([]);
  const dataZones = useFetchGroupDataQuery(archdiocese_id);
  const [zones, setZones] = useState([]);
  const dataDeaneries = useFetchGroupDataQuery(zone_id);
  const [deaneries, setDeaneries] = useState([]);
  const dataChurchs = useFetchGroupDataQuery(deanery_id);
  const [churchs, setChurchs] = useState([]);
  const [showArchdiocese, setShowArchdiocese] = useState(false);
  const [showZone, setShowZone] = useState(false);
  const [showDeanery, setShowDeanery] = useState(false);
  const [showChurch, setShowChurch] = useState(false);
  

  useEffect(() => {
  
      if (belongs_to_archdiocese) {
        setShowArchdiocese(true);
        setShowZone(true);
        setShowDeanery(true);
        setShowChurch(true);
      }
     
  }, [params]);
  useEffect(() => {
    if (dataDeaneries.data) {
      setDeaneries(dataDeaneries.data.groupData);
    }
  }, [dataDeaneries.data]);

  useEffect(() => {
    if (dataArchdioceses.data) {
      setArchdioceses(dataArchdioceses.data.archdioceses);
    }
  }, [dataArchdioceses.data]);

  useEffect(() => {
    if (dataZones.data) {
      setZones(dataZones.data.groupData);
    }
  }, [dataZones.data]);

  useEffect(() => {
    if (dataChurchs.data) {
      setChurchs(dataChurchs.data.groupData);
    }
  }, [dataChurchs.data]);
      


  


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
        setShowArchdiocese(true);
        
      } else {
        dispatch(changeBelongsToArchdiocese(0));
        setShowArchdiocese(false);
       
      }
      console.log(showArchdiocese);
    
    };

    const handleChangePamGroupId = (event) => {
      
      dispatch(changePamGroupId(event.target.value));
    };

    const handleChangeArchdioceseID = (event) => {
      dispatch(changeArchdioceseId(event.target.value));
      if (event.target.value != 1) {
        setShowZone(true);
      } else {
        setShowZone(false);
        setShowDeanery(false);
        setShowChurch(false);
      }
    };
  
    const handleChangeZoneID = (event) => {
      dispatch(changeZoneId(event.target.value));
      if (event.target.value != 1) {
        setShowDeanery(true);
      } else {
        setShowDeanery(false);
        setShowChurch(false);
      }
    };
  
    const handleChangeDeaneryID = (event) => {
      dispatch(changeDeaneryId(event.target.value));
      if (event.target.value != 1) {
        setShowChurch(true);
      } else {
        setShowDeanery(false);
      }
  
    };
  
    const handleChangeChurchID = (event) => {
      dispatch(changeChurchId(event.target.value));
  
    };

    const handleSubmit = (event) => {
  event.preventDefault();
  console.log('Formulario enviado');
  console.log('Nombre: ' + first_name);
  console.log('Apellido: ' + last_name);
  console.log("PAM GROUP ID: " + pam_group_id);
  addPam({
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
    pam_group_id: deanery_id
  })
    .then(() => {
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
      <h1 className='headerIzqRegistro'>Registro</h1>
      <Container className='container-borderRegistro'>
      
        <h3 className='headerIzqRegistro2'>Llena los campos con tu informacion</h3>
        <Form className='form-label-left' onSubmit = {handleSubmit}>
          <Row>
            <Col md={5}>
              <Form.Group controlId='formNombre'>
                <Form.Label  >Nombre</Form.Label>
                <Form.Control type='text' 
                placeholder='Teclea Nombre'
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
                    <Form.Select className = 'form-selectRegistro' placeholder='Seleccione una opción'
                    value={gender_id === 1 ? "Femenino" : "Masculino"}
                    onChange={handleChangeGenderId}
                    >
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
                    value = {phone}
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
          

          <Form.Group className="mb-3" controlId="belongsArchdiocese">
          <Form.Label>¿Perteneces a una arquidiócesis?</Form.Label>
          <Form.Check
            type="switch"
            checked={belongs_to_archdiocese}
            onChange={handleChangeBelongsToArchdiocese}
          />
        </Form.Group>
        {showArchdiocese && (
          <>
        <Form.Group className="mb-3" controlId="archdiocese_id">
          <Form.Label>Arquidiócesis</Form.Label>
          <Form.Select
            value={archdiocese_id}
            onChange={handleChangeArchdioceseID}
          >
            <option value={1}>Selecciona una arquidócesis</option>
            {archdioceses.map((arch) => {
              return (
                <option key={arch.pam_group_id} value={arch.pam_group_id}>
                  {arch.group_name}
                </option>
              );
            })}
          </Form.Select>
        </Form.Group>
        
        {showZone && (
        <Form.Group className="mb-3" controlId="zone_id">
          <Form.Label>Zona</Form.Label>
          <Form.Select
            value={zone_id}
            onChange={handleChangeZoneID}
          >
            <option value={1}>Selecciona una zona</option>
            {zones.map((zone) => {
              return (
                <option key={zone.pam_group_id} value={zone.pam_group_id}>
                  {zone.group_name}
                </option>
              );
            })}
          </Form.Select>
        </Form.Group>
        )}
        {showDeanery  && (
        <Form.Group className="mb-3" controlId="deanery_id">
          <Form.Label>Decanato</Form.Label>
          <Form.Select
            value={deanery_id}
            onChange={handleChangeDeaneryID}
          >
            <option value={1}>Selecciona una decanato</option>
            {deaneries.map((deanery) => {
              return (
                <option key={deanery.pam_group_id} value={deanery.pam_group_id}>
                  {deanery.group_name}
                </option>
              );
            })}
          </Form.Select>
        </Form.Group>
        )}
        {showChurch  && (
        <Form.Group className="mb-3" controlId="church_id">
          <Form.Label>Iglesia/Capilla</Form.Label>
          <Form.Select
            value={church_id}
            onChange={handleChangeChurchID}
          >
            <option value={1}>Selecciona una iglesia o capilla</option>
            {churchs.map((church) => {
              return (
                <option key={church.pam_group_id} value={church.pam_group_id}>
                  {church.group_name}
                </option>
              );
            })}
          </Form.Select>
        </Form.Group>
        )}
        </>
        )}

       
      

        <Button
          className='buttonPruebaRegistro'
          variant='secondary'
          size='lg'
          type='submit'
          
        >
          Finalizar
        </Button>
        </Form>
        
      </Container>

      {isFinished && (
        <Container className='container-messageRegistro'>
          <h3> REGISTRO FINALIZADO</h3>
          <h4> !Gracias por registrarte en Abuelitos ABP!</h4>
        </Container>
      )}

      
    
    <Contacto/>
    </>
  );
}

export default Registro;