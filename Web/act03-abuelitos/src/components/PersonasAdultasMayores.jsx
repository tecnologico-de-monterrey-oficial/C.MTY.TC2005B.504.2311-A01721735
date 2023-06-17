import "./PersonaAdultasMayores.css";
import { Table, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useFetchPamsQuery, changePam, useDeletePamMutation } from "../store";
import { Link, useNavigate } from "react-router-dom";
import { AiTwotoneEdit, AiFillDelete, AiFillFileAdd } from "react-icons/ai";

function PersonasAdultasMayores() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, error, isFetching } = useFetchPamsQuery();
  const [deletePam, resultsDelete] = useDeletePamMutation();

  const handleEdit = (pam) => {
    dispatch(changePam(pam));
    navigate(`/pams/edit/${pam.pam_id}`);
  };

  const handleDelete = (pam_id) => {
    deletePam(pam_id);
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
                        archdiocese_id: pam.archdiocese_id,
                        zone_id: pam.zone_id,
                        deanery_id: pam.deanery_id,
                      }
                    )}}
                    >
                      <AiTwotoneEdit />
                    </Button>
                    <Button 
                    variant="danger"
                    onClick={() => handleDelete(pam.pam_id)}
                    >
                      <AiFillDelete />
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default PersonasAdultasMayores;
