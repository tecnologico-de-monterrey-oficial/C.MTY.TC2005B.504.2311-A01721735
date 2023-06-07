import Carousel from 'react-bootstrap/Carousel';
import './CarouselMain.css';

function CarouselMain(){
    return (
        <div className = "carousel-container">
        <Carousel>
          <Carousel.Item>
            <img
              
              src="img1test.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h2>Objetivo</h2>
              <p>Contribuir a la toma de decisiones eficiente para el cuidado de personas de la tercera edad.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              
              src="img2test.jpg"
              alt="Second slide"
            />
    
            <Carousel.Caption>
              <h2>Mision</h2>
              <p>Mejorar la calidad de vida de las personas de la tercera edad.</p>
            </Carousel.Caption>
          </Carousel.Item>
          
          <Carousel.Item>
            <img
              
              src="img3test.jpg"
              alt="Second slide"
            />
    
            <Carousel.Caption>
              <h2>Vision</h2>
              <p>Ser la aplicación líder en brindar empoderamiento y herramientas para que las personas de la tercera edad vivan plenamente.</p>
            </Carousel.Caption>
          </Carousel.Item>
          
        </Carousel>
        </div>
      );
}

export default CarouselMain;