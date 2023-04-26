import { Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeName, changeLastName, changeEmail, changeBirthDate, addPam, editPam } from '../../store'; 
import "./ManagePam.css";
import { useNavigate, useParams } from "react-router-dom";

function ManagePam() {
  const params = useParams();
  console.log(params);
  const [mode, setMode] = useState('add');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name, last_name, email, birth_date  } = useSelector((state) => state.pam);

  useEffect(() => {
    if (params.pam_id) {
      setMode('edit');
    } else {
      setMode('add');
    }
  }, [params]);

  const handleChangeName = (event) => {
    // console.log(event.target.value);
    dispatch(changeName(event.target.value));
  };
  const handleChangeLastName = (event) => {
    // console.log(event.target.value);
    dispatch(changeLastName(event.target.value));
  };
  const handleChangeEmail = (event) => {
    // console.log(event.target.value);
    dispatch(changeEmail(event.target.value));
  };
  const handleChangeBirthDate = (event) => {
    // console.log(event.target.value);
    dispatch(changeBirthDate(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (mode === 'add') {
      dispatch(addPam(
        { 
          name: name, 
          last_name: last_name, 
          email: email, 
          birth_date: birth_date 
        }
      ));
    } else {
      dispatch(editPam(
        {
          id: params.pam_id,
          name: name,
          last_name: last_name,
          email: email,
          birth_date: birth_date
        }
      ));
    }
    navigate('/pams');
  };

  return (
    <div className="AddPam">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Teclea el nombre"
            value={name}
            onChange={handleChangeName}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="last_name">
          <Form.Label>Apellidos</Form.Label>
          <Form.Control
            type="text"
            placeholder="Teclea tus apellidos"
            value={last_name}
            onChange={handleChangeLastName}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Correo</Form.Label>
          <Form.Control
            type="email"
            placeholder="Teclea tu correo"
            value={email}
            onChange={handleChangeEmail}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="birth_date">
          <Form.Label>Fecha de Nacimiento</Form.Label>
          <Form.Control
            type="date"
            placeholder="Teclea tu fecha de nacimiento"
            value={birth_date}
            onChange={handleChangeBirthDate}
          />
        </Form.Group>
        <div>
          <Button variant="success" type="submit">
            {mode === "add" ? 'Agregar' : 'Actualizar'}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default ManagePam;