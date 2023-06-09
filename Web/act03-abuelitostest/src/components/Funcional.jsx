import './Funcional.css';
import Contacto from './Contacto';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


function Funcional() {

    const navigate = useNavigate();
    const handleOnClickLawton = () => {
        navigate('/LWB');
    }

    const handleOnClickKatz = () => {
        navigate('/Katz');
    }

    return (
        <>
            <div className="containerPrueba">
                <div className="div-border" >
            
                    <h1 className="text-container">Funcional</h1>
                    <h2 className="textMide">Nivel al que una persona se mantiene a sí misma</h2>
                    <h3 className="textchico">¡Bienvenido al área funcional!</h3>
                    <h3 className="textchico">En esta área te daremos tips de como seguir teniendo una vida plena y funcional.</h3>
                    <h3 className="textchico">Si deseas continuar, sigue moviéndote hacia abajo.</h3>
                    <h2 className="textMide">¿Qué esperar?</h2>
                    <h3 className="textchico">Se presentarán diferentes formularios donde se tendrá que elegir la respuesta más cercana a su situación y en base a eso se cálculara un puntaje.</h3>
                </div>

            
                <div className="divImg">
                    <img className="imgBrain" src="funcionalpng.png" alt="1" border="0"></img>

                </div>

                

            </div>
            <h1 className="text-container">Pruebas</h1>
            <div className="buttonFlex">
                
                <div className="buttonDivs">
                <Button className="buttonPrueba" variant='secondary' size="lg">
                    <img src="braintransparent.png" alt="Button Image" className="iconImg" onClick = {handleOnClickLawton}/>

                </Button>
                
                <h2 className="headerUnderButton">Test de Lawton</h2>
                <h3 className="textUnderButton">Selecione para iniciar la prueba de Lawton</h3>
                </div>
                <div className="buttonDivs">
                <Button className="buttonPrueba" variant='secondary' size="lg">
                    <img src="braintransparent.png" alt="Button Image" className="iconImg" onClick = {handleOnClickKatz}/>

                </Button>
                
                <h2 className="headerUnderButton">Test de Katz</h2>
                <h3 className="textUnderButton">Selecione para iniciar la prueba de Katz</h3>
                </div>
                

            </div>
            <Contacto />
            
        </>
    );
}

export default Funcional;