import './Fisica.css'
import Contacto from './Contacto';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function Fisica() {

    const navigate = useNavigate();
    const handleOnClickSarcF = () => navigate('/SarcF');
    const handleOnClickSPPB = () => navigate('/SPPB');
    const handleOnClickCircPantorilla = () => navigate('/CircPantorilla');
    const handleOnClickUpAndGo = () => navigate('/UpAndGo');
    const handleOnClickCFS = () => navigate('/CFS');
    const handleOnClickFuerza= () => navigate('/ChairStand');
   

    return (
        <>
            <div className="containerPrueba">
                <div className="div-border" >
            
                    <h1 className="text-container">Física</h1>
                    <h2 className="textMide">Bienestar del cuerpo y el óptimo funcionamiento del organismo, que se encuentran en buen estado físico, mental, emocional</h2>
                    <h3 className="textchico">¡Bienvenido al área física!</h3>
                    <h3 className="textchico">En esta área recordaremos la importancia del aspecto físico para llevar una vida saludable y plena.</h3>
                    <h3 className="textchico">Si deseas continuar, sigue moviéndote hacia abajo.</h3>
                    
                </div>

            
                <div className="divImg">
                    <img className="imgFisica" src="fisicapng.png" alt="1" border="0"></img>

                </div>

                

            </div>
            <h1 className="text-container">Pruebas</h1>
            <div className="buttonFlex">
                
                <div className="buttonDivs">
                <Button className="buttonPrueba" variant='secondary' size="lg">
                    <img src="testt.png" alt="Button Image" className="iconImg" onClick = {handleOnClickSarcF}/>

                </Button>
                
                <h2 className="headerUnderButton">Sarc-F</h2>
                <h3 className="textUnderButton">Selecione para iniciar la prueba de Sarc-F</h3>
                </div>
                <div className="buttonDivs">
                <Button className="buttonPrueba" variant='secondary' size="lg">
                    <img src="perf.png" alt="Button Image" className="perfImg" onClick = {handleOnClickSPPB}/>

                </Button>
                
                <h2 className="headerUnderButton">SPPB</h2>
                <h3 className="textUnderButton">Selecione para iniciar la prueba de SPPB</h3>
                </div>
                <div className="buttonDivs">
                <Button className="buttonPrueba" variant='secondary' size="lg">
                    <img src="measure.png" alt="Button Image" className="clockImg" onClick = {handleOnClickCircPantorilla}/>

                </Button>
                
                <h2 className="headerUnderButton">Circ-Pantorilla</h2>
                <h3 className="textUnderButton">Selecione para iniciar la prueba de Circ-Pantorilla</h3>
                </div>
                
                

            </div>
            <div className="buttonFlex">
                
                <div className="buttonDivs">
                <Button className="buttonPrueba" variant='secondary' size="lg">
                    <img src="chair.png" alt="Button Image" className="iconImg" onClick = {handleOnClickUpAndGo}/>

                </Button>
                
                <h2 className="headerUnderButton">Up & Go</h2>
                <h3 className="textUnderButton">Selecione para iniciar la prueba de Up & Go</h3>
                </div>
                <div className="buttonDivs">
                <Button className="buttonPrueba" variant='secondary' size="lg">
                    <img src="bone.png" alt="Button Image" className="clockImg" onClick = {handleOnClickCFS}/>

                </Button>
                
                <h2 className="headerUnderButton">CFS</h2>
                <h3 className="textUnderButton">Selecione para iniciar la prueba CFS</h3>
                </div>
                <div className="buttonDivs">
                <Button className="buttonPrueba" variant='secondary' size="lg">
                    <img src="strength.png" alt="Button Image" className="clockImg" onClick = {handleOnClickCFS}/>

                </Button>
                
                <h2 className="headerUnderButton">Fuerza</h2>
                <h3 className="textUnderButton">Selecione para iniciar la prueba de Fuerza</h3>
                </div>
                
            </div>
            <Contacto />
            
        </>
    );
}

export default Fisica;