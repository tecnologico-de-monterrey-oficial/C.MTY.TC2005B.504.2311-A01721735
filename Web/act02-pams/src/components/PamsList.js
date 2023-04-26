
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removePam, changeName, changeLastName, changeEmail, changeBirthDate } from "../store";

import "./PamsList.css";

function PamsList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pams } = useSelector((state) => state.pams);

  const handleRemovePam = (id) => {
    dispatch(removePam(id));
  };

  const handleEditPam = (index) => {
    dispatch(changeName(pams[index].name));
    dispatch(changeLastName(pams[index].last_name));
    dispatch(changeEmail(pams[index].email));
    dispatch(changeBirthDate(pams[index].birth_date));
    navigate(`/pams/edit/${pams[index].id}`);
  }

  return (
    <>
      <div className="PamsList">
        <h2>Listado de Personas Adultas Mayores</h2>
        <Container>
          <Row className="align-items-center">
            <Col sm={2}>
              <h3>Nombre</h3>
            </Col>
            <Col sm={2}>
              <h3>Apellido</h3>
            </Col>
            <Col sm={2}>
              <h3>Correo</h3>
            </Col>
            <Col sm={2}>
              <h3>Fecha de Nacimiento</h3>
            </Col>
            <Col sm={4}>
            <Link to="add">
              <Button variant="success">Agregar</Button>
              </Link>
            </Col>
          </Row>
          {pams.map((pam, index) => (
            <Row key={pam.id}>
              <Col>{pam.name}</Col>
              <Col>{pam.last_name}</Col>
              <Col>{pam.email}</Col>
              <Col>{pam.birth_date}</Col>
              <Col>
                <Button variant="warning" onClick={() => {handleEditPam(index)}}>Editar</Button>
                <Button variant="danger" onClick={() => {handleRemovePam(pam.id)}}>Eliminar</Button>
              </Col>
            </Row>
          ))}
        </Container>
      </div>
    </>
  );
}

export default PamsList;