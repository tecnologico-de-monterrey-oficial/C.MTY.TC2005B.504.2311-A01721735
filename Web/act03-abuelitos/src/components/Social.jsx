import './Social.css'
import Contacto from './Contacto';
import Button from 'react-bootstrap/Button';



function Social() {

    return (
        <>
            <div className="containerPrueba">
                <div className="div-border" >
            
                    <h1 className="text-container">Social</h1>
                    <h2 className="textMide">Tener relaciones saludables con amigos, familiares y la comunidad, y tener interés o preocupación por los demás.</h2>
                    <h3 className="textchico">¡Bienvenido al área social! </h3>
                    <h3 className="textchico">En esta área recordaremos la importancia del aspecto social.</h3>
                    <h3 className="textchico">Si deseas continuar, sigue moviéndote hacia abajo.</h3>
                </div>

            
                <div className="divImg">
                    <img className="imgBrain" src="socialpng.png" alt="1" border="0"></img>

                </div>

                

            </div>
            <h1 className="text-container">Pruebas</h1>
            <div>
                
                <Button className="buttonPrueba" variant='secondary' size="lg">
                    <img src="socialimg.png" alt="Button Image" className="iconImg"/>

                </Button>
                
                <h2 className="headerUnderButton">Gijón</h2>
                <h3 className="textUnderButton">Selecione para iniciar la prueba de Gijón</h3>


            </div>
            <Contacto />
            
        </>
    );
}

export default Social;