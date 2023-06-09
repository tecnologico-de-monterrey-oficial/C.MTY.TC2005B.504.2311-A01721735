import { Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeName,
  changeLastName,
  changeEmail,
  changeBirthDate,
  changeArchdiocese,
  changeArchdioceseId,
  changeZoneId, 
  changeDeaneryId,
  changeChurchId,
  resetPamValues,
  useAddPamMutation,
  useEditPamMutation,
  useFetchGroupArchdiocesesQuery,
  useFetchGroupDataQuery,
  useFetchDeaneriesQuery,
  useFetchZonesQuery,
} from "../store";
import "./ManagePam.css";
import { useNavigate, useParams } from "react-router-dom";

function ManagePam() {
  const params = useParams();
  const [mode, setMode] = useState("add");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name, last_name, email, birth_date, archdiocese, archdiocese_id, zone_id, deanery_id, church_id } =
    useSelector((state) => state.pam);
  const [addPam, resultsAdd] = useAddPamMutation();
  const [editPam, resultsEdit] = useEditPamMutation();
  const dataArchdioceses = useFetchGroupArchdiocesesQuery();
  const [archdioceses, setArchdioceses] = useState([]);
  const dataZones = useFetchGroupDataQuery(archdiocese_id);
  const [zones, setZones] = useState([]);
  const dataDeaneries = useFetchGroupDataQuery(zone_id);
  const [deaneries, setDeaneries] = useState([]);
  const dataChurchs = useFetchGroupDataQuery(deanery_id);
  const [churchs, setChurchs] = useState([]);
  const [showArchdiocese, setShowArchdiocese] = useState(false);
  const [showZone, setShowZone] = useState(false);
  const [showDeanery, setShowDeanery] = useState(false);
  const [showChurch, setShowChurch] = useState(false);

  useEffect(() => {
    if (dataDeaneries.data) {
      setDeaneries(dataDeaneries.data.groupData);
    }
  }, [dataDeaneries.data]);

  useEffect(() => {
    if (dataArchdioceses.data) {
      setArchdioceses(dataArchdioceses.data.archdioceses);
    }
  }, [dataArchdioceses.data]);

  useEffect(() => {
    if (dataZones.data) {
      setZones(dataZones.data.groupData);
    }
  }, [dataZones.data]);

  useEffect(() => {
    if (dataChurchs.data) {
      setChurchs(dataChurchs.data.groupData);
    }
  }, [dataChurchs.data]);
      

  useEffect(() => {
    if (params.pam_id) {
      setMode("edit");
      if (archdiocese) {
        setShowArchdiocese(true);
        setShowZone(true);
        setShowDeanery(true);
        setShowChurch(true);
      }
    } else {
      setMode("add");
    }
  }, [params]);

  const handleChangeName = (event) => {
    dispatch(changeName(event.target.value));
  };
  const handleChangeLastName = (event) => {
    dispatch(changeLastName(event.target.value));
  };
  const handleChangeEmail = (event) => {
    dispatch(changeEmail(event.target.value));
  };
  const handleChangeBirthDate = (event) => {
    dispatch(changeBirthDate(event.target.value));
  };
  const handleChangeArchdiocese = (event) => {
    if (event.target.checked) {
      dispatch(changeArchdiocese(true));
      setShowArchdiocese(true);
    } else {
      dispatch(changeArchdiocese(false));
      setShowArchdiocese(false);
    }
  };

  const handleChangeArchdioceseID = (event) => {
    dispatch(changeArchdioceseId(event.target.value));
    if (event.target.value != 1) {
      setShowZone(true);
    } else {
      setShowZone(false);
      setShowDeanery(false);
      setShowChurch(false);
    }
  };

  const handleChangeZoneID = (event) => {
    dispatch(changeZoneId(event.target.value));
    if (event.target.value != 1) {
      setShowDeanery(true);
    } else {
      setShowDeanery(false);
      setShowChurch(false);
    }
  };

  const handleChangeDeaneryID = (event) => {
    dispatch(changeDeaneryId(event.target.value));
    if (event.target.value != 1) {
      setShowChurch(true);
    } else {
      setShowDeanery(false);
    }

  };

  const handleChangeChurchID = (event) => {
    dispatch(changeChurchId(event.target.value));

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (mode === "add") {
      addPam({
        name: name,
        last_name: last_name,
        email: email,
        birth_date: birth_date,
        archdiocese: archdiocese,
        deanery_id: archdiocese ? church_id : 1
      });
    } else {
      editPam({
        pam_id: params.pam_id,
        name: name,
        last_name: last_name,
        email: email,
        birth_date: birth_date,
        archdiocese: archdiocese,
        deanery_id: archdiocese ? church_id : 1
      });
    }
    dispatch(resetPamValues());
    navigate("/pams");
  };

  const handleCancel = () => {
    dispatch(resetPamValues());
    navigate("/pams");
  };

  return (
    <div className="ManagePam">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Teclea el nombre"
            value={name}
            onChange={handleChangeName}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="last_name">
          <Form.Label>Apellidos</Form.Label>
          <Form.Control
            type="text"
            placeholder="Teclea tus apellidos"
            value={last_name}
            onChange={handleChangeLastName}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Correo</Form.Label>
          <Form.Control
            type="email"
            placeholder="Teclea tu correo"
            value={email}
            onChange={handleChangeEmail}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="birth_date">
          <Form.Label>Fecha de Nacimiento</Form.Label>
          <Form.Control
            type="date"
            placeholder="Teclea tu fecha de nacimiento"
            value={birth_date}
            onChange={handleChangeBirthDate}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="archdiocese">
          <Form.Label>¿Perteneces a una arquidiócesis?</Form.Label>
          <Form.Check
            type="switch"
            checked={archdiocese}
            onChange={handleChangeArchdiocese}
          />
        </Form.Group>
        {showArchdiocese && (
          <>
        <Form.Group className="mb-3" controlId="archdiocese_id">
          <Form.Label>Arquidiócesis</Form.Label>
          <Form.Select
            value={archdiocese_id}
            onChange={handleChangeArchdioceseID}
          >
            <option value={1}>Selecciona una arquidócesis</option>
            {archdioceses.map((arch) => {
              return (
                <option key={arch.pam_group_id} value={arch.pam_group_id}>
                  {arch.group_name}
                </option>
              );
            })}
          </Form.Select>
        </Form.Group>
        
        {showZone && (
        <Form.Group className="mb-3" controlId="zone_id">
          <Form.Label>Zona</Form.Label>
          <Form.Select
            value={zone_id}
            onChange={handleChangeZoneID}
          >
            <option value={1}>Selecciona una zona</option>
            {zones.map((zone) => {
              return (
                <option key={zone.pam_group_id} value={zone.pam_group_id}>
                  {zone.group_name}
                </option>
              );
            })}
          </Form.Select>
        </Form.Group>
        )}
        {showDeanery  && (
        <Form.Group className="mb-3" controlId="deanery_id">
          <Form.Label>Decanato</Form.Label>
          <Form.Select
            value={deanery_id}
            onChange={handleChangeDeaneryID}
          >
            <option value={1}>Selecciona una decanato</option>
            {deaneries.map((deanery) => {
              return (
                <option key={deanery.pam_group_id} value={deanery.pam_group_id}>
                  {deanery.group_name}
                </option>
              );
            })}
          </Form.Select>
        </Form.Group>
        )}
        {showChurch  && (
        <Form.Group className="mb-3" controlId="church_id">
          <Form.Label>Iglesia/Capilla</Form.Label>
          <Form.Select
            value={church_id}
            onChange={handleChangeChurchID}
          >
            <option value={1}>Selecciona una iglesia o capilla</option>
            {churchs.map((church) => {
              return (
                <option key={church.pam_group_id} value={church.pam_group_id}>
                  {church.group_name}
                </option>
              );
            })}
          </Form.Select>
        </Form.Group>
        )}
        </>
        )}
        <div>
          <Button
            className="ManageButtons"
            variant="danger"
            type="reset"
            onClick={handleCancel}
          >
            {"Cancelar"}
          </Button>
          <Button className="ManageButtons" variant="success" type="submit">
            {mode === "add" ? "Agregar" : "Actualizar"}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default ManagePam;