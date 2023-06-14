import './Perfil.css'
import { Container, Row, Col, Button } from 'react-bootstrap';
import Contacto from './Contacto';
import { useSelector, useDispatch} from "react-redux";
import { useEffect, useState } from "react";
import {useFetchPamByEmailQuery} from "../store";
import { setRole } from '../store/slices/authSlice';
import {useAddPamByEmailMutation} from "../store";

function Perfil() {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const {data, error, isFetching} = useFetchPamByEmailQuery(user ? user.email : " ");
    const [pamFound, setPamFound] = useState(false);
    const [pamData, setPamData] = useState(null);
    const [addPamByEmail, resultsAddByEmail] = useAddPamByEmailMutation();

    const handleAddPamByEmailClick = () => {
        console.log("EMAIL");
        console.log(user.email);
        addPamByEmail({
            email: user.email,
        });
    };
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
   
        
    
            console.log(pamData);

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
                                <h2 className="textPerfil2">{pamData?.address_1}</h2>
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
            {!isFetching && !pamFound && user && (
        <div>
          <h1 className="textPamStatus">El usuario {user.email} no es PAM</h1>
          <Button className = 'buttonPruebaPerfil' onClick={handleAddPamByEmailClick}>Registrar PAM con correo</Button>
        </div>
      )}

        

            <Contacto />
        
        </>
    );
}


export default Perfil;