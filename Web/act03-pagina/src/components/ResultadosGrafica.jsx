import './ResultadosGrafica.css';
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

function ResultadosGrafica() {
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

  const labels = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
  const data2 = {
    labels: labels,
    datasets: [{
      label: '',
      data: [65, 59, 80, 81, 56],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)'
      ],
      borderWidth: 1
    }]
  };

  const options = {
    plugins: {
      legend: {
        labels: {
            display: false,
        }
      }
    },
    scales: {
      x: {
        ticks: {
          display: true,
          font: {
            size: 40,
            family: 'Lato'
            }
        },
        beginAtZero: true
      },
      y: {
        beginAtZero: true
      }
    }
  };
  
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
            <Bar data={data2} options={options} />
        </div>
        <div className="botonContainerRegresarGrafica">
          <Button className="botonRegresarGrafica" variant="secondary" size="lg" onClick={handleOnClickRegresar}>
            <h2>REGRESAR</h2>
          </Button>
        </div>
    </>
  );
}

export default ResultadosGrafica;
