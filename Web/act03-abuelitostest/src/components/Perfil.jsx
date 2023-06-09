import './Perfil.css'
import { Container, Row, Col } from 'react-bootstrap';
import Contacto from './Contacto';

function Perfil() {

    return (

        <>
            <div className="primerDivPerfil">
                <h1 className="text-container">Mi Perfil</h1>
            </div>
            <div className="perfilDiv">

                <div className="tripeDiv">
                    <img src="harold.png" alt="Button Image" className="profilePic" />

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
                                <h2 className="textPerfil2">81-1233-4566</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs lg="2">  
                                <img src="email-icon.png" alt="Button Image" className="perfilIconImgE"/>
                            </Col>
                            <Col>
                                <h2 className="textPerfil">Correo</h2>
                                <h2 className="textPerfil2">correo@gmail.com</h2>
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
                <h1 className="textoNombrePerfil">Hermenegildo Pérez</h1>
            </div>

            <Contacto />
        
        </>
    );
}


export default Perfil;