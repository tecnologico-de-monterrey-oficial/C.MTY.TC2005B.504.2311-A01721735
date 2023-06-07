import './Cognitiva.css'
import Contacto from './Contacto';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


function Cognitiva() {

    const navigate = useNavigate();
    const handleOnClickMMSE = () => navigate('/MMSE');
    const handleOnClickReloj = () => navigate('/Reloj');
    return (
        <>
            <div className="containerPrueba">
                <div className="div-border" >
            
                    <h1 className="text-container">Cognitiva</h1>
                    <h2 className="textMide">Capacidad del cerebro para procesar, analizar y recordar información de manera efectiva.</h2>
                    <h3 className="textchico">¡Bienvenido al área cognitiva!</h3>
                    <h3 className="textchico"> En esta área recordaremos la importancia del aspecto cognitivo para llevar una vida saludable y plena.</h3>
                    <h3 className="textchico">Si deseas continuar, sigue moviéndote hacia abajo.</h3>
                    
                </div>

            
                <div className="divImg">
                    <img className="imgBrain" src="cognitivapng.png" alt="1" border="0"></img>

                </div>

                

            </div>
            <h1 className="text-container">Pruebas</h1>
            <div className="buttonFlex">
                
                <div className="buttonDivs">
                <Button className="buttonPrueba" variant='secondary' size="lg">
                    <img src="braintransparent.png" alt="Button Image" className="iconImg" onClick ={handleOnClickMMSE}/>

                </Button>
                
                <h2 className="headerUnderButton">MMSE</h2>
                <h3 className="textUnderButton">Selecione para iniciar la prueba de MMSE</h3>
                </div>
                <div className="buttonDivs">
                <Button className="buttonPrueba" variant='secondary' size="lg">
                    <img src="clock.png" alt="Button Image" className="clockImg" onClick ={handleOnClickReloj}/>

                </Button>
                
                <h2 className="headerUnderButton">Reloj</h2>
                <h3 className="textUnderButton">Selecione para iniciar la prueba de Reloj</h3>
                </div>
                

            </div>
            <Contacto />
            
        </>
    );
}

export default Cognitiva;