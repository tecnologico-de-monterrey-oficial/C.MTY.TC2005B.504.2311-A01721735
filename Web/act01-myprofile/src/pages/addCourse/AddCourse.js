import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';
import Modal from 'react-bootstrap/Modal';

function AddCourse(show, onHide, handleAddCourse){

    const [id,setId] = useState('');
    const [name, setName] = useState('');
    const [teacher, setTeacher] = useState('');
    const [classroom, setClassroom] = useState('');
    const [course, setCourse] = useState({
        id: 0,
        name: '',
        teacher: '',
        classroom: ''
    })


    const handleChangeName = (event) => {

        setName (event.target.value);
        setCourse (prevCourse => {
            
            return {...prevCourse, name: event.target.value}
            })
        //console.log(event.target.value);
    }

    const handleChangeId = (event) => {
        setId (event.target.value);
        setCourse(prevCourse => {
            return {...prevCourse, id: event.target.value}
            })
        //console.log(event.target.value);
    }

    const handleChangeTeacher = (event) => {
        setCourse(prevCourse => {
            return {...prevCourse, teacher: event.target.value}
            })
        setTeacher (event.target.value);
       // console.log(event.target.value);
    }

    const handleChangeClassroom = (event) => {
        setClassroom (event.target.value);
        setCourse(prevCourse => {   
            return {...prevCourse, classroom: event.target.value}
            })
        //console.log(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Id: " + id);
        console.log("Name: " + name);
        console.log("Teacher: " + teacher);
        console.log("Classroom: " + classroom);

        const newCourse = {
            id: id,
            name: name,
            teacher: teacher,
            classroom: classroom
        }

        handleAddCourse(course);
        setCourse(newCourse);
        console.log(course);
        onHide();
        
    }

    return (

        <Modal
      show = {show}
      onhide = {onHide}
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
  <h4>Centered Modal</h4>
  <p>
    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
    consectetur ac, vestibulum at eros.
  </p>
</Modal.Body>
        <Form.Group className="mb-3" controlId="id">
          <Form.Label>Id</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Teclea el id" 
            value = {id}
            onChange = {handleChangeId}/>
            
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Teclea el nombre de la clase" 
        value = {name}
        onChange = {handleChangeName}/>
    
  <Form.Text className="text-muted">
  </Form.Text>
</Form.Group>
        <Form.Group className="mb-3" controlId="Profesor">
  <Form.Label>Profesor</Form.Label>
    <Form.Control 
    type="text" 
    placeholder="Teclea el profesor" 
    value = {teacher}
    onChange = {handleChangeTeacher}/>
    
  <Form.Text className="text-muted">
  </Form.Text>
</Form.Group>
        <Form.Group className="mb-3" controlId="Salon">
  <Form.Label>Salon</Form.Label>
    <Form.Control 
    type="text" 
    placeholder="Teclea el salon" 
    value = {classroom}
    onChange = {handleChangeClassroom}/>
    
  <Form.Text className="text-muted">
  </Form.Text>
</Form.Group>
       
<Modal.Footer>
<Button onClick={onHide}>Close</Button>
        <Button variant="primary" type="submit">
          Submit
        </Button>
       
    
    </Modal.Footer>
      </Form>
    
      </Modal>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    );
}

export default AddCourse