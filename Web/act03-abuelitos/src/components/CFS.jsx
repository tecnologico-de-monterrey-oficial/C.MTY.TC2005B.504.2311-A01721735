import Grid from '@mui/material/Grid';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './CFS.css'

function CFS() {
    return (
        <>
        <div className='divTest'>
            <h1>Prueba CFS</h1>
        </div>

        <Container>
      <Row>
        
        <Col>¿Esta usted cansado?</Col>

        
      </Row>
        <Row>
        <Col>1 of 2</Col>
        </Row>

    </Container>
    <div className='divTesting'>
            <h1>Prueba CFS</h1>
      </div>

        </>
    );
}

export default CFS;