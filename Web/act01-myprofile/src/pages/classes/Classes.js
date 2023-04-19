import { Container, Row, Col, Button} from 'react-bootstrap';
import classesData from '../../data/classesData.js'
import {useState} from 'react';

function Classes(){

const [classes, setClasses] = useState(classesData);

const handleDelete = (id) => {
    console.log(id);
    setClasses( (prevClasses) => {
        return prevClasses.filter((course) => course.id !== id);
    })
    
    
}

    

    return(
    
            
    
            <Container>
      <Row>
        <Col>Course</Col>
        <Col>Teacher</Col>
        <Col>Classroom</Col>
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
    
   
    );
}

export default Classes;