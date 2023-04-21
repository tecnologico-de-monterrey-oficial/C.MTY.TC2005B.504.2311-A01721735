import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

function AddCourse({show, onhide, course, modalMode, handleCourse}) {
  const [id, setID] = useState(course.id);
  const [name, setName] = useState(course.name);
  const [teacher, setTeacher] = useState(course.teacher);
  const [classroom, setClassroom] = useState(course.classroom);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCourse = {
      id: id,
      name: name,
      teacher: teacher,
      classroom: classroom
    };
    handleCourse(newCourse); // Llamada a la función que está en Classes.js
    onhide();
  };

  return (
    <Modal
      show={show}
      onHide={onhide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {modalMode === 'add' ? 'Agregar un nuevo curso' : 'Editar un nuevo curso'}
        </Modal.Title>
      </Modal.Header>
    <Modal.Body>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="id">
        <Form.Label>ID</Form.Label>
        <Form.Control
          type="text"
          placeholder="Teclea el ID"
          value={id}
          onChange={(event) => {setID(event.target.value)}}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Teclea tu nombre"
          value={name}
          onChange={(event) => {setName(event.target.value)}}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="teacher">
        <Form.Label>Profesor</Form.Label>
        <Form.Control
          type="text"
          placeholder="Teclea el nombre del profesor"
          value={teacher}
          onChange={(event) => {setTeacher(event.target.value)}}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="classroom">
        <Form.Label>Salón</Form.Label>
        <Form.Control
          type="text"
          placeholder="Teclea el salón de la clase"
          value={classroom}
          onChange={(event) => {setClassroom(event.target.value)}}
        />
      </Form.Group>
      <Modal.Footer>
      <Button onClick={onhide} variant="danger">Cerrar</Button>
      <Button variant="success" type="submit">
      {modalMode === 'add' ? 'Actualizar' : 'Editar'}
      </Button>
      </Modal.Footer>
    </Form>
    </Modal.Body>
    </Modal>
  );
}

export default AddCourse;