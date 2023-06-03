
import { Table, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useFetchPamsQuery, changePamId, changePam, useDeletePamMutation } from "../store";
import { Link, useNavigate } from "react-router-dom";
import { AiTwotoneEdit, AiFillDelete, AiFillFileAdd } from "react-icons/ai";
import { useState } from "react";
import ConfirmDelete from "./ConfirmDelete";

function PersonasAdultasMayores() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, error, isFetching } = useFetchPamsQuery();
  const [deletePam, resultsDelete] = useDeletePamMutation();
  const { pam_id } = useSelector((state) => state.pam);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);

  const handleEdit = (pam) => {
    dispatch(changePam(pam));
    navigate(`/pams/edit/${pam.pam_id}`);
  };

  const handleDelete = () => {
    deletePam(pam_id);
    setShowConfirmDelete(false);
  };

  const handleConfirmDelete = (pam_id) => {
    dispatch(changePamId(pam_id));
    setShowConfirmDelete(true);
  };

  const onHide = () => {
    setShowConfirmDelete(false);
  };

  if (error) {
    return (
      <div>
        <h1>Personas Adultas Mayores</h1>
        <h3>Error: {error}</h3>
      </div>
    );
  }

  return (
    <>
      <div>
        <h1>Listado de Personas Adultas Mayores</h1>
        <Table striped bordered hover>
          <thead className="PamHeader">
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Correo</th>
              <th>Fecha de Nacimiento</th>
              <th>
                <Link to="/pams/add">
                <Button variant="success">
                  <AiFillFileAdd />
                </Button>
                </Link>
              </th>
            </tr>
          </thead>
          <tbody>
            {isFetching && (
              <tr>
                <td>Cargando...</td>
              </tr>
            )}

            {!isFetching &&
              data.pams.map((pam) => (
                <tr className="PamsDetail" key={pam.pam_id}>
                  <td>{pam.name}</td>
                  <td>{pam.last_name}</td>
                  <td>{pam.email}</td>
                  <td>{pam.birth_date}</td>
                  <td>
                    <Button 
                    variant="warning"
                    onClick={() => {handleEdit(
                      {
                        pam_id: pam.pam_id,
                        name: pam.name,
                        last_name: pam.last_name,
                        email: pam.email,
                        birth_date: pam.birth_date,
                        archdiocese: pam.archdiocese,
                        deanery_id: pam.deanery_id,
                        zone_id: pam.zone_id,
                        archdiocese_id: pam.archdiocese_id
                      }
                    )}}
                    >
                      <AiTwotoneEdit />
                    </Button>
                    <Button 
                    variant="danger"
                    onClick={() => handleConfirmDelete(pam.pam_id)}
                    >
                      <AiFillDelete />
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
      {showConfirmDelete && (
        <ConfirmDelete
          show={showConfirmDelete}
          onHide={onHide}
          title="Eliminar Persona Adulta Mayor"
          message="¿Está seguro que desea eliminar esta Persona Adulta Mayor?"
          handleDelete={handleDelete}
        />
      )}
    </>
  );
}

export default PersonasAdultasMayores;