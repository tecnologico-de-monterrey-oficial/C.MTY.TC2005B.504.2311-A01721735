import Title from "../../components/Title";
import CarouselMain from "../../components/CarouselMain";
import "./AbuelitosABP.css";



function AbuelitosABP() {
  return (
    <div className="AbuelitosABP">
      <div 
      className="fondo" style={{ backgroundImage: "url(/fondo.jpg)" , width:'100%', height:'100%', backgroundSize: 'cover' , opacity: '1',  }}>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Title />
       <h2> "Cambiando vidas un paso a la vez..."</h2>
      <br></br>
      <CarouselMain />
      </div>

      
   
    </div>
  );
}

export default AbuelitosABP;