import './Contacto.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Contacto() {
    return (
        <>
        <div className="containerContacto">
        <div>
        <h2 className="contHead">CONTÁCTANOS</h2>
        </div>
        <div className="Contacto">
        <div className="Cont1">
            
            <h3 className="contText">E-mail: abuelitosabp@gmail.com</h3>
            <h3 className="contText">Teléfono: 55 1234 5678</h3>
            <h3> </h3>
            <h3 className="contText2">Monterrey, Nuevo León, México</h3>
        </div>
        <div className="Cont2">
            <Form className="contactForm">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className="contText3">Introduce tu nombre (obligatorio)</Form.Label>
                    <Form.Control className="fadeControl" type="text" placeholder="Nombre" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className="contText3">Introduce tu apellido (obligatorio)</Form.Label>
                    <Form.Control className="fadeControl" type="text" placeholder="Apellido" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className="contText3">Introduce tu correo electrónico (obligatorio)</Form.Label>
                    <Form.Control className="fadeControl" type="email" placeholder="nombre@ejemplo.com" />
                </Form.Group>
            </Form>

        </div>
        <div className="Cont3">
            <Form className="contactForm">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className="contText3">Escribe su comentario</Form.Label>
                    <Form.Control className="fadeControl" as="textarea" placeholder="Comentario" rows={4} />
                </Form.Group>
            </Form>

            <Button className="contactEnviarButton" variant="secondary">
                Enviar
            </Button>

        </div>
    </div>

    </div>
    </>
    )
}

export default Contacto;