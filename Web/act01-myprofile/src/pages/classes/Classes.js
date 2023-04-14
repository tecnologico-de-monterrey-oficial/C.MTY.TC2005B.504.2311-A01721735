import { Container, Row, Col} from 'react-bootstrap';


function Classes(){

    const classes = [{
        id: 1,
        name: 'Construccion de software',
        teacher: 'David Cantu',
        salon: 'A3-305'

    },
    {
        id: 2,
        name: 'Construccion de software - Videojuegos',
        teacher: 'Claudia Solis',
        salon: 'A3-305'
    },
    {
        id: 3,
        name: 'Construccion de software - BD',
        teacher: 'Juan Carlos Lavarriega',
        salon: 'A3-305'
    }

    ]

    return(
    
            
    
            <Container>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
      {classes.map((clase) => (
        <Row key = {clase.id}>
        <Col>{clase.name}</Col>
        <Col>{clase.teacher}</Col>
        <Col>{clase.salon}</Col>
      </Row>
        ))}
    </Container>
    
   
    );
}

export default Classes;