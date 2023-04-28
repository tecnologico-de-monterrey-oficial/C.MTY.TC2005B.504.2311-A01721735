import { Container, Row, Col, Button } from 'react-bootstrap';
import classesData from '../../data/classesData';
import { useEffect, useState } from 'react';
import AddCourse from '../addCourse/AddCourse';

function Classes() {

    const [classes, setClasses] = useState(classesData);
    const [modalShow, setModalShow] = useState(false);
    const [modalMode, setModalMode] = useState('add'); // 'add' | 'edit'
    const [course, setCourse] = useState(
        {
            id: 0, 
            name: '', 
            teacher: '', 
            classroom: ''
        });    
    const handleDelete = (id) => {
        console.log('Hola -' + id);
        setClasses( (prevClasses) => {
            return prevClasses.filter((course) => course.id !== id);
        });
    }

    useEffect(() => {
        console.log('useEffect');
    }, [course]);

    const handleEdit = (index) => {
        console.log(classes[index])
        setCourse(classes[index]);
        setModalMode('edit');
        setModalShow(true);
    }
    
    const handleAdd = () => {
        setCourse({
            id: 0, 
            name: '', 
            teacher: '', 
            classroom: ''
        });
        setModalMode('add');
        setModalShow(true);
    }

    const addEditCourse = (course) => {
        console.log(course);
        if (modalMode === 'add') {
            setClasses( (prevClasses) => {
                return [
                    ...prevClasses, 
                    course
                ];
            });
        } else {
            setClasses( (prevClasses) => {
                return prevClasses.map((prevCourse) => {
                    if (prevCourse.id === course.id) {
                        return course;
                    } else {
                        return prevCourse;
                    }
                });
            });
        };
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
            <Col><Button variant="success" onClick={handleAdd}>Agregar</Button></Col>
        </Row>
        {classes.length === 0 &&
            <Row>
                <Col>No hay clases</Col>
            </Row>
        }
        {classes.map((course, index) => (
            <Row key={course.id}>
                <Col>{course.name}</Col>
                <Col>{course.teacher}</Col>
                <Col>{course.classroom}</Col>
                <Col>
                <Button variant="primary" size="sm" onClick={() => {handleEdit(index)}}>Editar</Button>
                <Button variant="danger" size="sm" onClick={() => {handleDelete(course.id)}}>Borrar</Button>
                </Col>
            </Row>
        ))}
    </Container>
    <AddCourse 
    show={modalShow} 
    onhide={handleClose} 
    course={course}
    modalMode={modalMode}
    handleCourse={addEditCourse}/>
    </>
    );
}

export default Classes;