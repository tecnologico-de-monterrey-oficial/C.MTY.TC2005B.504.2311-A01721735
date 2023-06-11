import './GDS.css';
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

import { useFetchPamsGroupsQuery } from "../store";

function GDS() {
  const { data, error, isFetching } = useFetchPamsGroupsQuery();
  const [selectedOption, setSelectedOption] = useState('');
  const [buttonResponses, setButtonResponses] = useState([]);

  const handleDropdownSelect = (eventKey) => {
    setSelectedOption(eventKey);
  };

  const handleButtonClick = (rowIndex, buttonType) => {
    setButtonResponses((prevButtonResponses) => {
      const updatedButtonResponses = [...prevButtonResponses];
      updatedButtonResponses[rowIndex] = buttonType;
      return updatedButtonResponses;
    });
  };

  const handleSubmitResponses = () => {
    console.log(selectedOption);
    console.log(selectedOption.first_name)

    setButtonResponses([]);
  };

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

  const renderRows = () => {
    return rows.map((row, index) => (
      <tr key={index}>
        <td>{row.question}</td>
        <td>
          <Button
            variant="light"
            className={`buttons ${buttonResponses[index] === 'SI' ? 'clicked' : ''}`}
            onClick={() => handleButtonClick(index, 'SI')}
            active={buttonResponses[index] === 'SI'}
          >
            SI
          </Button>
        </td>
        <td>
          <Button
            variant="light"
            className={`buttons ${buttonResponses[index] === 'NO' ? 'clicked' : ''}`}
            onClick={() => handleButtonClick(index, 'NO')}
            active={buttonResponses[index] === 'NO'}
          >
            NO
          </Button>
        </td>
      </tr>
    ));
  };

  return (
    <>
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
                />
              </td>
            </tr>
          </tbody>
        </Table>

        <Dropdown
          variant="success"
          onSelect={handleDropdownSelect}
          className="custom-dropdown"
        >
          <Dropdown.Toggle variant="light" id="dropdown-basic">
            {selectedOption || 'Select an option'}
          </Dropdown.Toggle>

          <Dropdown.Menu className="custom-dropdown-menu">
            {!isFetching &&
              data.pams.map((pam) => (
                <Dropdown.Item key={pam.pam_id} eventKey={pam.first_name}>
                  {pam.first_name} {pam.last_name}
                </Dropdown.Item>
              ))}
            {error && <p>Error...</p>}
          </Dropdown.Menu>
        </Dropdown>

        <Container className="contGDS">
          <Table bordered className="custom-table">
            <tbody>{renderRows()}</tbody>
          </Table>
        </Container>

        <Button
          className="button"
          variant="secondary"
          size="lg"
          onClick={handleSubmitResponses}
        >
          Enviar Respuestas
        </Button>{' '}
      </div>
    </>
  );
}

export default GDS;
