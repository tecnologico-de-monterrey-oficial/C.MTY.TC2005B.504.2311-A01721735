import './Afectivo.css'
import Contacto from './Contacto';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';



function Afectivo() {


    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate('/GDS');
    }

    return (
        <>
            <div className="containerPrueba">
                <div className="div-border" >
                    
                    <h1 className="text-container">Afectivo</h1>
                    <h2 className="textMide">Capacidad de reacción que presenta una persona ante los estímulos que vengan del medio interno o externo, ya sean en sentimientos o emociones.</h2>
                    <h3 className="textchico">¡Bienvenido al área afectiva! </h3>
                    <h3 className="textchico">En esta área recordaremos la importancia del aspecto afecitvo en nuestro día a día para llevar una vida saludable y plena.</h3>
                    <h3 className="textchico">Si deseas continuar, sigue moviéndote hacia abajo.</h3>
                </div>

            
                <div className="divImg">
                    <img className="imgBrain" src="afectivopng.png" alt="1" border="0"></img>

                </div>

                

            </div>
            <h1 className="text-container">Pruebas</h1>
            <div>
                
                <Button onClick={handleOnClick} className="buttonPrueba" variant='secondary' size="lg">
                    <img src="Heart.png" alt="Button Image" className="iconImg"/>

                </Button>
                
                <h2 className="headerUnderButton">GDS</h2>
                <h3 className="textUnderButton">Selecione para iniciar la prueba GDS</h3>


            </div>
            <Contacto />
            
        </>
    );
}

export default Afectivo;