import './ResultadosPregunta.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector, useDispatch} from "react-redux";
import { useEffect, useState } from "react";
import {useFetchPamByEmailQuery} from "../store";
import { setRole } from '../store/slices/authSlice';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { Bar } from 'react-chartjs-2';

function ResultadosPregunta() {
  const navigate = useNavigate();
  const handleOnClickRegresar = () => navigate('/ResultadosAdministrador');
  const handleOnClickResultadosGrafica = () => navigate('/ResultadosGrafica');

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
            <div className="todoResultadoGrafica">
                <h1>Resultados</h1> 
                <h2>Horacio Pérez</h2>
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
                                <h2 className="textPerfil2">hola</h2>
                                
                            </Col>
                        </Row>
                        <Row>
                            <Col xs lg="2">  
                                <img src="email-icon.png" alt="Button Image" className="perfilIconImgE"/>
                            </Col>
                            <Col>
                                <h2 className="textPerfil">Correo</h2>
                                <h2 className="textPerfil2">hola</h2>
                               
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
                            <Col className="headerPerfil">Mis Contactos de Emergencia</Col>
                        </Row>
                        <Row>
                            <Col>
                                <h2 className="textPerfil">Nombre</h2>
                                <h2 className="textPerfil2">Sultano Quintanilla</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h2 className="textPerfil">Relación</h2>
                                <h2 className="textPerfil2">Yerno</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h2 className="textPerfil">Correo</h2>
                                <h2 className="textPerfil2">randomcitizen@example.com</h2>
                            </Col>
                        </Row>
                    </Container>
                </div>
              </div>
            <div>
                <h1 className="textoNombrePerfil"></h1>
            </div>
            {/*
            {isFetching && <h1 className = "textPamStatus" >Cargando...</h1>}
            {error && <h1 className = "textPamStatus">Hubo un error: {error}</h1>}
            {!isFetching && pamFound && user && <h1 className = "textPamStatus">El usuario {user.email} es PAM</h1>}
            {!isFetching && !pamFound && user && <h1 className = "textPamStatus">El usuario {user.email} no es PAM</h1>}
  */}
        <div className="todoResultadoGrafica">
            <h2>Test de Lawton</h2>
        </div>

        <div className="containerResultadoPrueba">
            <Table className="tablaResultadosPregunta">
                <thead>
                    <tr>
                        <th>PREGUNTA</th>
                        <th>RESPUESTA</th>
                        <th>RESULTADO</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Télefono</td>
                        <td>Marca solo números conocidos.</td>
                        <td>1</td>
                    </tr>

                    <tr>
                        <td>Compras</td>
                        <td>Vigila sus necesidades independientemente.</td>
                        <td>1</td>
                    </tr>

                    <tr>
                        <td>Preparación de la comida</td>
                        <td>Necesita que le preparen y sirvan la comida.</td>
                        <td>0</td>
                    </tr>

                    <tr>
                        <td>Cuidado de la casa</td>
                        <td>Necesita ayuda en todas las labores de la casa.</td>
                        <td>1</td>
                    </tr>

                    <tr>
                        <td>Lavado de la ropa</td>
                        <td>Lava por si solo pequeñas prendas.</td>
                        <td>1</td>
                    </tr>

                    <tr>
                        <td>Uso de medios de transporte</td>
                        <td>No viaja.</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>Responsabilidad respecto a su medicación</td>
                        <td>Es capaz de tomar su medicación a la hora y con la dosis correcta.</td>
                        <td>1</td>
                    </tr>
                    
                    <tr>
                        <td>Manejo de sus asuntos económicos</td>
                        <td>Incapaz de manejar dinero.</td>
                        <td>0</td>
                    </tr>

                    <tr  className = "totalResultadosPregunta">
                        <td ></td>
                        <td className = "totalPalabraResultadosPregunta">Total:</td>
                        <td  className = "totalNumeroResultadosPregunta">5</td>
                    </tr>   
                </tbody>
            </Table>
        </div>  

       <Container className="buttonContainerResultadosGrafica"> 
          <Button className="botonRegresarPregunta1" variant="secondary" size="lg" onClick={handleOnClickRegresar}>
            <h2>REGRESAR</h2>
          </Button>

          <Button className="botonRegresarPregunta2" variant="secondary" size="lg" onClick={handleOnClickResultadosGrafica}>
            <h2>Observar rendimiento...</h2>
          </Button>
        </Container> 
    </>
  );
}

export default ResultadosPregunta;
