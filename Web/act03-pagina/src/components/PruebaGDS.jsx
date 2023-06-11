import "./PruebaGDS.css"
import Contacto from "./Contacto";


function PruebaGDS() {
    return (
        <>
        <div className="containerPrueba">
            <div className="div-border" >
        
                <h1 className="text-container">Test de GDS</h1>
                <h2 className="textMide">Mide la capacidad de la persona para la realización de diez actividades básicas de la vida diaria.</h2>
                <h3 className="textchico">¡Bienvenido a Abuelitos ABP!</h3>
                <h3 className="textchico">En esta prueba podemos saber cómo te encuentras en la realización de diferentes actividades básicas de la vida diaria.</h3>
                <h3 className="textchico">Selecciona la opción más cercana a tu situación.</h3>
            </div>
        
            <div className="divImg">
                <img className="imgBrain" src="brainpng.png" alt="1" border="0"></img>

            </div>
            
        </div>
        <Contacto/>
        </>
    );
}

export default PruebaGDS;