import { Container, Row, Col, Button } from 'react-bootstrap';
import classesData from '../../data/classesData';
import { useState } from 'react';
import AddCourse from '../addCourse/AddCourse';

function Classes() {

    const [classes, setClasses] = useState(classesData);
    const [modalShow, setModalShow] = useState(false);


    const handleDelete = (id) => {
        console.log('Hola -' + id);
        setClasses( (prevClasses) => {
            return prevClasses.filter((course) => course.id !== id);
        });
    }

    const addCourse = (course) => {
        console.log('Hola Crayola');
        console.log(course);
        setClasses( (prevClasses) => {
            return [
                ...prevClasses, 
                course
            ];
        });
    }

    const handleShow = () => {
        setModalShow(true);
    }

    const handleClose = () => {
        setModalShow(false);
    }

    return (
        <>
    <Container>
        <Row>
            <Col>Clase</Col>
            <Col>Profesor</Col>
            <Col>Salón</Col>
            <Col><Button variant="success" onClick={handleShow}>Agregar</Button></Col>
        </Row>
        {classes.length === 0 &&
            <Row>
                <Col>No hay clases</Col>
            </Row>
        }
        {classes.map((course) => (
            <Row key={course.id}>
                <Col>{course.name}</Col>
                <Col>{course.teacher}</Col>
                <Col>{course.classroom}</Col>
                <Col><Button variant="danger" onClick={() => {handleDelete(course.id)}}>Borrar</Button></Col>
            </Row>
        ))}
    </Container>
    <AddCourse 
    show={modalShow} 
    onhide={handleClose} 
    handleAddCourse={addCourse}/>
    </>
    );
}

export default Classes;