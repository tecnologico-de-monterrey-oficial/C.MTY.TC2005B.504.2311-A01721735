import './ResultadosPrueba.css'
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch} from "react-redux";
import { useEffect, useState } from "react";
import {useFetchPamByEmailQuery} from "../store";
import { setRole } from '../store/slices/authSlice';
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom'; 
import Button from 'react-bootstrap/Button';

function ResultadoPrueba() {
    const navigate = useNavigate();
    const handleOnClickRegresar = () => navigate('/ResultadosAdministrador');
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const {data, error, isFetching} = useFetchPamByEmailQuery(user ? user.email : " ");
    const [pamFound, setPamFound] = useState(false);
    const [pamData, setPamData] = useState(null);
    useEffect(() => {
        if (data) {
            if(data.pam.length > 0){
                dispatch(setRole(data.pam[0].role));
                setPamFound(true);
                setPamData(data.pam[0]);
            }
            else{
                setPamFound(false);
            }
        }
    }, [data]);
 
    return (
        <>
            <div className="todoResultadoPrueba">
                <h1>Mi Perfil</h1> 
                
            </div>

            <div className="containerResultadoPrueba">
              <div className="fotoResultadoPrueba">
                  <img
                  alt=""
                  src="/fotoperfil.jpg"
                  height="300"
                  align="left"
                />{' '}
               </div>
               
                <div className="tripeDiv">
                    <Container className="custom-cobtainer">
                        <Row>
                            <Col className="headerPerfil">Mis Datos de Contacto</Col>
                           
                        </Row>
                        <Row>
                            <Col xs lg="2">  
                                <img src="cellphone.png" alt="Button Image" className="perfilIconImg"/>
                            </Col>
                            <Col>
                                <h2 className="textPerfil">Teléfono</h2>
                                <h2 className="textPerfil2">{pamData?.phone}</h2>
                                
                            </Col>
                        </Row>
                        <Row>
                            <Col xs lg="2">  
                                <img src="email-icon.png" alt="Button Image" className="perfilIconImgE"/>
                            </Col>
                            <Col>
                                <h2 className="textPerfil">Correo</h2>
                                <h2 className="textPerfil2">{pamData?.email}</h2>
                               
                            </Col>
                        </Row>
                        <Row>
                            <Col xs lg="2">  
                                <img src="house.png" alt="Button Image" className="perfilIconImg"/>
                            </Col>
                            <Col>
                                <h2 className="textPerfil">Domicilio</h2>
                                <h2 className="textPerfil2">Blvd. Metropolitan Axis 3403</h2>
                            </Col>
                        </Row>
                    </Container>

                </div>
                <div className="tripeDiv">
                <Container className="custom-cobtainer">
                        <Row>
                            <Col className="headerPerfil">Informacion</Col>
                        </Row>
                        <Row>
                            <Col>
                                <h2 className="textPerfil">Código Postal</h2>
                                <h2 className="textPerfil2">{pamData?.zip_code}</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h2 className="textPerfil">Fecha de Nacimiento</h2>
                                <h2 className="textPerfil2">{pamData?.birth_date}</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h2 className="textPerfil">Género</h2>
                              
                                <h2 className="textPerfil2">{pamData?.gender_id === 1 ? "Femenino" : "Masculino"}</h2>
                            </Col>
                        </Row>
                    </Container>
                </div>
              </div>
            <div>
                <h1 className="textoNombrePerfil">{pamData?.first_name} {pamData?.last_name}</h1>
            </div>

            {isFetching && <h1 className = "textPamStatus" >Cargando...</h1>}
            {error && <h1 className = "textPamStatus">Hubo un error: {error}</h1>}
            {!isFetching && pamFound && user && <h1 className = "textPamStatus">El usuario {user.email} es PAM</h1>}
            {!isFetching && !pamFound && user && <h1 className = "textPamStatus">El usuario {user.email} no es PAM</h1>}

    <div className="ResultadosPruebaButons">
      <div className="topButtonsResultadosPrueba">
        <div className="buttonContainerResultadosPrueba">
         <div className="buttonResultadosPrueba">
             <img src="braintransparent.png" alt="Button Image" className="iconImg" />
        </div>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                FUNCIONAL
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Katz</Dropdown.Item>
                <Dropdown.Item href="#/action-2">LWB</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Barthel</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>

        <div className="buttonContainerResultadosPrueba">
        <div className="buttonResultadosPrueba">
            <img src="calendar.png" alt="Button Image" className="iconImg" />
        </div>
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
            COGNITIVA
            </Dropdown.Toggle>
            <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">MMSE</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Reloj</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        </div>

      <div className="buttonContainerResultadosPrueba">
       <div className="buttonResultadosPrueba">
            <img src="social.png" alt="Button Image" className="iconImg" />
      </div>
            <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
            SOCIAL
            </Dropdown.Toggle>
            <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Gijón</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        </div>
     </div>

  <div className="bottomButtonsResultadosPrueba">
    <div className="buttonContainerResultadosPrueba">
        <div className="buttonResultadosPrueba">
            <img src="Heart.png" alt="Button Image" className="iconImg" />
        </div>
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
            AFECTIVA
            </Dropdown.Toggle>
            <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">GDS</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
     </div>

        <div className="buttonContainerResultadosPrueba">
        <div className="buttonResultadosPrueba">
            <img src="ejercicio.png" alt="Button Image" className="iconImg" />
        </div>
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
            FISICA
            </Dropdown.Toggle>
            <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">SarcF</Dropdown.Item>
            <Dropdown.Item href="#/action-2">SPPB</Dropdown.Item>
            <Dropdown.Item href="#/action-3">CFS</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        </div>
  </div>
</div>
  <div className = 'botonContainerRegresarAdministradorPam'>
        <Button className="botonRegresarAdministradorPam" variant="secondary" size="lg" onClick = {handleOnClickRegresar}>
        <h4>REGRESAR</h4>
      </Button>
  </div>
        </>
    );
}


export default ResultadoPrueba;