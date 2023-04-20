import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

function AddCourse({show, onhide, handleAddCourse}) {
  const [id, setID] = useState(0);
  const [name, setName] = useState("");
  const [teacher, setTeacher] = useState("");
  const [classroom, setClassroom] = useState("");
  // const [course, setCourse] = useState({
  //   id: 0,
  //   name: "",
  //   teacher: "",
  //   classroom: ""
  // });

  const handleChangeName = (event) => {
    setName(event.target.value);
    // setCourse( (prevCourse) => {
    //   return {
    //     ...prevCourse,
    //     name: event.target.value
    //     }
    //   })
    // console.log(event.target.value);
  };
  const handleChangeID = (event) => {
    setID(event.target.value);
    // setCourse( (prevCourse) => {
    //   return {
    //     ...prevCourse,
    //     id: event.target.value
    //     }
    //   })
    // console.log(event.target.value);
  };
  const handleChangeTeacher = (event) => {
    setTeacher(event.target.value);
    // setCourse( (prevCourse) => {
    //   return {
    //     ...prevCourse,
    //     teacher: event.target.value
    //     }
    //   })
    // console.log(event.target.value);
  };
  const handleChangeClassroom = (event) => {
    setClassroom(event.target.value);
    // setCourse( (prevCourse) => {
    //   return {
    //     ...prevCourse,
    //     classroom: event.target.value
    //     }
    //   })
    // console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCourse = {
      id: id,
      name: name,
      teacher: teacher,
      classroom: classroom
    };
    // setCourse(newCourse);
    
    handleAddCourse(newCourse);

    setName("");
    setID(0);
    setTeacher("");
    setClassroom("");
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
          Agregar un nuevo curso
        </Modal.Title>
      </Modal.Header>
    <Form onSubmit={handleSubmit}>
    <Modal.Body>
      <Form.Group className="mb-3" controlId="id">
        <Form.Label>ID</Form.Label>
        <Form.Control
          type="text"
          placeholder="Teclea el ID"
          value={id}
          onChange={handleChangeID}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Teclea tu nombre"
          value={name}
          onChange={handleChangeName}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="teacher">
        <Form.Label>Profesor</Form.Label>
        <Form.Control
          type="text"
          placeholder="Teclea el nombre del profesor"
          value={teacher}
          onChange={handleChangeTeacher}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="classroom">
        <Form.Label>Salón</Form.Label>
        <Form.Control
          type="text"
          placeholder="Teclea el salón de la clase"
          value={classroom}
          onChange={handleChangeClassroom}
        />
      </Form.Group>
      <Modal.Footer>
      <Button onClick={onhide}>Close</Button>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Modal.Footer>
    </Modal.Body>
    </Form>
    </Modal>
  );
}

export default AddCourse;