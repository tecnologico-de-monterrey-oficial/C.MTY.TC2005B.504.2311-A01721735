//import "./PersonaAdultasMayores.css";
import { Table, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useFetchPamsGroupsQuery, changePam, useDeletePamMutation, resetPamValues } from "../store";
import { Link, useNavigate } from "react-router-dom";
import { AiTwotoneEdit, AiFillDelete, AiFillFileAdd } from "react-icons/ai";

function PersonasAdultasMayores() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, error, isFetching } = useFetchPamsGroupsQuery();
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
                <Link to="/Registro">
                <Button variant="success" onClick = {resetPamValues()}>
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
                  <td>{pam.first_name}</td>
                  <td>{pam.last_name}</td>
                  <td>{pam.email}</td>
                  <td>{pam.birth_date}</td>
                  <td>
                    {console.log(pam)}
                    <Button 
                    variant="warning"
                    onClick={() => {handleEdit(
                      
                      {

                        pam_id: pam.pam_id,
                        first_name: pam.first_name,
                        last_name: pam.last_name,
                        gender_id: pam.gender_id,
                        role_id: pam.role_id,
                        phone: pam.phone,
                        email: pam.email,
                        country: pam.country,
                        state: pam.state,
                        city: pam.city,
                        address_1: pam.address_1,
                        address_2: pam.address_2,
                        zip_code: pam.zip_code,
                        birth_date: pam.birth_date,
                        deceased_date: pam.deceased_date,
                        guardian_id: pam.guardian_id,
                        doctor_id: pam.doctor_id,
                        belongs_to_archdiocese: pam.belongs_to_archdiocese,
                        pam_group_id: pam.pam_group_id,
                        
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