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
              <h3>Objetivo</h3>
              <p>Contribuir a la toma de decisiones eficiente para el cuidado de personas de la tercera edad.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              
              src="img2test.jpg"
              alt="Second slide"
            />
    
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          
          
        </Carousel>
        </div>
      );
}

export default CarouselMain;