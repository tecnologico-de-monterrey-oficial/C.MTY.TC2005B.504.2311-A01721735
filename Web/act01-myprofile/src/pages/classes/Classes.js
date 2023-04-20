import { Container, Row, Col, Button} from 'react-bootstrap';
import classesData from '../../data/classesData.js'
import {useState} from 'react';
import AddCourse from '../addCourse/AddCourse.js';


function Classes(){

const [classes, setClasses] = useState(classesData);
const [modalShow, setModalShow] = useState(false);

const handleDelete = (id) => {
    console.log(id);
    setClasses( (prevClasses) => {
        return prevClasses.filter((course) => course.id !== id);
    })
    
    
}

const addCourse = (course) => {
    console.log("Course");
    setClasses( (prevClasses) => {
        return [...prevClasses, course];
    });
}
    
const handleShow = () => {
  setModalShow(true);

}

const handleClose = () => {
  setModalShow(false);
}

    return(
        <>  
    
            
    
            <Container>
      <Row>
        <Col>Course</Col>
        <Col>Teacher</Col>
        <Col>Classroom</Col>
        <Col><Button variant = "success" onClick = {handleShow}>Agregar</Button></Col>
      </Row>

      {classes.length === 0 && 
        <Row>
            <Col>No hay clases</Col>
        </Row>
      }
      {classes.map((course) => (
        <Row key = {course.id}>
        <Col>{course.name}</Col>
        <Col>{course.teacher}</Col>
        <Col>{course.classroom}</Col>
        <Col><Button variant = "danger" onClick = {() => {handleDelete(course.id)}}>Borrar</Button></Col>
      </Row>
        ))}
    </Container>
    <AddCourse
    show = {modalShow}
    onHide = {handleClose}
    handleAddCourse = {addCourse}
    />
    </>
   
    );
}

export default Classes;