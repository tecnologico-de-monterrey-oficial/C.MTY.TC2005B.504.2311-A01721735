
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removePam, changeName, changeLastName, changeEmail, changeBirthDate } from "../store";
import Table from 'react-bootstrap/Table';

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
        <Table striped bordered hover>
          <thead>
          <tr className="align-items-center">
            <th>
              <h3>Nombre</h3>
            </th>
            <th>
              <h3>Apellido</h3>
              </th>
            <th>
              <h3>Correo</h3>
              </th>
            <th>
              <h3>Fecha de Nacimiento</h3>
              </th>
            <th>
            <Link to="add">
              <Button variant="success">Agregar</Button>
              </Link>
              </th>
          </tr>
          </thead>
          <tbody>
          {pams.map((pam, index) => (
            <tr key={pam.id}>
              <td>{pam.name}</td>
              <td>{pam.last_name}</td>
              <td>{pam.email}</td>
              <td>{pam.birth_date}</td>
              <td>
                <Button variant="warning" onClick={() => {handleEditPam(index)}}>Editar</Button>
                <Button variant="danger" onClick={() => {handleRemovePam(pam.id)}}>Eliminar</Button>
              </td>
            </tr>
          ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default PamsList;