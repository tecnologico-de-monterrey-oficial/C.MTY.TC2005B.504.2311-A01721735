import { Modal, Button } from 'react-bootstrap';
import './ConfirmDelete.css';

function ConfirmDelete ({show, onHide, title, message, handleDelete}) {

  return (
    <>
      <Modal show={show} onHide={onHide} className="confirmDelete">
        <Modal.Header closeButton>
          <Modal.Title className='confirmDelete-title'>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ConfirmDelete;