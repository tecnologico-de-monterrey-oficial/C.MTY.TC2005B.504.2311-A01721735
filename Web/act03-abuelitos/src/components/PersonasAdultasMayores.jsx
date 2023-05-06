import './PersonasAdultasMayores.css'
import { Table, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useFetchPamsQuery } from "../store";
import { AiTwotoneEdit, AiFillDelete, AiFillFileAdd } from "react-icons/ai";

function PersonasAdultasMayores() {
    const dispatch = useDispatch();
    const { data, error, isFetching } = useFetchPamsQuery();

    if (error) {
        return 
        <div>
            <h1>Peronas Adultas Mayores</h1>
            <h3>Error: {error}</h3>
        </div>;
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
                  <Button variant="danger">
                    <AiFillFileAdd  />
                  </Button>
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
                data.data[0].map((pam) => (
                  <tr className="PamsDetail" key={pam.pam_id}>
                    <td>{pam.name}</td>
                    <td>{pam.last_name}</td>
                    <td>{pam.email}</td>
                    <td>{pam.birth_date}</td>
                    <td>
                      <Button variant="warning">
                        <AiTwotoneEdit />
                      </Button>
                      <Button variant="danger">
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