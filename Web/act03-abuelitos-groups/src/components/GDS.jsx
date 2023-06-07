import './GDS.css';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';


function GDS() {
  const rows = [
    { question: '¿Está usted satisfecho con su vida?' },
    { question: '¿Ha abandonado sus actividades e intereses?' },
    { question: '¿Siente su vida vacía?' },
    { question: '¿Se aburre a menudo?' },
    { question: '¿Se encuentra de buen humor la mayor parte del tiempo?' },
    { question: '¿Teme que algo malo le ocurra?' },
    { question: '¿Esta usted feliz la mayor parte del tiempo?' },
    { question: '¿A menudo siente que su situación no tiene remedio?' },
    { question: '¿Prefiere quedarse en casa que salir?' },
    { question: '¿Cree que tiene más problemas de memoria que otros?' },
    { question: '¿Piensa que es maravilloso vivir?' },
    { question: '¿Se siente inútil?' },
    { question: '¿Se siente lleno de energía?' },
    { question: '¿Ha perdido toda la esperanza?' },
    { question: '¿Piensa que los demás están mejor que usted?' }
  ];

  const initialButtonStates = Array.from({ length: rows.length }, () => ({
    isClicked: false,
    isNoClicked: false,
  }));

  const [buttonStates, setButtonStates] = useState(initialButtonStates);

  const handleButtonClick = (rowIndex, buttonType) => {
    setButtonStates((prevButtonStates) => {
      const updatedButtonStates = [...prevButtonStates];
      updatedButtonStates[rowIndex] = {
        isClicked: buttonType === 'SI' ? !prevButtonStates[rowIndex].isClicked : false,
        isNoClicked: buttonType === 'NO' ? !prevButtonStates[rowIndex].isNoClicked : false,
      };
      return updatedButtonStates;
    });
  };

  const renderRows = () => {
    return rows.map((row, index) => (
      <tr key={index}>
        <td>{row.question}</td>
        <td>
          <Button
            variant="light"
            className={`buttons ${buttonStates[index].isClicked ? 'clicked' : ''}`}
            onClick={() => handleButtonClick(index, 'SI')}
            active={buttonStates[index].isClicked}
          >
            SI
          </Button>
        </td>
        <td>
          <Button
            variant="light"
            className={`buttons ${buttonStates[index].isNoClicked ? 'clicked' : ''}`}
            onClick={() => handleButtonClick(index, 'NO')}
            active={buttonStates[index].isNoClicked}
          >
            NO
          </Button>
        </td>
      </tr>
    ));
  };

  return (
    <div className="todoGDS">
      <Table>
        <tbody>
          <tr>
            <td>
              <h1>Prueba de GDS</h1>
              <h2>Mide la detección y presencia de síntomas depresivos graves.</h2>
              <div className="parrafosGDS">
                <p>¡Bienvenido a Abuelitos ABP!</p>
                <p>
                  En esta prueba podemos saber cómo te encuentras en la
                  realización de diferentes actividades básicas de la vida
                  diaria.
                </p>
                <p>Selecciona la opción más cercana a tu situación.</p>
              </div>
            </td>
            <td className="fotoKatz">
            <img
              alt=""
              src="/afectiva.png"
              height="300"
              align="left"
            />{' '}
        </td>
          </tr>
        </tbody>
      </Table>
  
      <Container className = 'containerGDS'>
        <Table bordered className="custom-table">
          <tbody>{renderRows()}</tbody>
          
        </Table>
      </Container>

      <Button className="button" variant="secondary" size="lg" >Enviar Respuestas</Button>{' '}
    </div>
  );
}

export default GDS;