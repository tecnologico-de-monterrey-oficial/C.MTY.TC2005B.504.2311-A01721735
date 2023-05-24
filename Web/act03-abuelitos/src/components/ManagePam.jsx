import { Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeName,
  changeLastName,
  changeEmail,
  changeBirthDate,
  changeArchdiocese,
  changeDeaneryId,
  changeZoneId,
  changeArchdioceseId,
  resetPamValues,
  useAddPamMutation,
  useEditPamMutation,
  useFetchArchdiocesesQuery,
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
  const { 
    name, 
    last_name, 
    email, 
    birth_date, 
    archdiocese, 
    deanery_id,
    zone_id,
    archdiocese_id,  
  } =
    useSelector((state) => state.pam);
  const [addPam, resultsAdd] = useAddPamMutation();
  const [editPam, resultsEdit] = useEditPamMutation();
  const [archdioceses, setArchdioceses] = useState([]);
  const [zones, setZones] = useState([]);
  const dataArchdioceses = useFetchArchdiocesesQuery();
  const dataZones = useFetchZonesQuery(archdiocese_id);
  const dataDeaneries = useFetchDeaneriesQuery(zone_id);
  const [deaneries, setDeaneries] = useState([]);
  const [showSelectArchdiocese, setShowSelectArchdiocese] = useState(false);
  const [showSelectZone, setShowSelectZone] = useState(false);
  const [showSelectDeanery, setShowSelectDeanery] = useState(false);

  useEffect(() => {
    if (params.pam_id) {
      setMode("edit");
      if (archdiocese) {
        setShowSelectArchdiocese(true);
        setShowSelectZone(true);
        setShowSelectDeanery(true);
      }
    } else {
      setMode("add");
    }
    
  }, [params]);

  useEffect(() => {
    if (dataArchdioceses.data) {
      setArchdioceses(dataArchdioceses.data.archdioceses);
    }
  }, [dataArchdioceses.data]);

  useEffect(() => {
    if (dataZones.data) {
      setZones(dataZones.data.zones);
    }
  }, [dataZones.data]);

  useEffect(() => {
    if (dataDeaneries.data) {
      setDeaneries(dataDeaneries.data.deaneries);
    }
  }, [dataDeaneries.data]);


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
      setShowSelectArchdiocese(true);
    } else {
      dispatch(changeArchdiocese(false));
      setShowSelectArchdiocese(false);
    }
  };

  const handleChangeArchdioceseID = (event) => {
    if (event.target.value) {
      dispatch(changeArchdioceseId(event.target.value));
      setShowSelectZone(true);
    } else {
      dispatch(changeArchdioceseId(0));
      setShowSelectZone(false);
    }
  };

  const handleChangeZoneID = (event) => {
    if (event.target.value) {
      dispatch(changeZoneId(event.target.value));
      setShowSelectDeanery(true);
    } else {
      dispatch(changeZoneId(0));
      setShowSelectDeanery(false);
    }
  };

  const handleChangeDeaneryID = (event) => {
    if (event.target.value) {
      dispatch(changeDeaneryId(event.target.value));
    } else {
      dispatch(changeDeaneryId(0));
    }
  };

  const isValidate = () => {
    return (
      name.length > 0 &&
      last_name.length > 0 &&
      email.length > 0 &&
      birth_date.length > 0 && 
      (archdiocese && deanery_id > 1 || !archdiocese)
    );
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
        deanery_id: archdiocese ? deanery_id : 1
      });
    } else {
      editPam({
        pam_id: params.pam_id,
        name: name,
        last_name: last_name,
        email: email,
        birth_date: birth_date,
        archdiocese: archdiocese,
        deanery_id: archdiocese ? deanery_id : 1
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
        {showSelectArchdiocese &&  (
          <>
              <Form.Group className="mb-3" controlId="archdiocese_id">
                <Form.Label>Arquidiócesis</Form.Label>
                <Form.Select
                  value={archdiocese_id}
                  onChange={handleChangeArchdioceseID}
                >
                  <option value="">Selecciona una arquidócesis</option>
                  {archdioceses.map((arch) => {
                    return (
                      <option
                        key={arch.archdiocese_id}
                        value={arch.archdiocese_id}
                      >
                        {arch.name}
                      </option>
                    );
                  })}
                </Form.Select>
              </Form.Group>
              {showSelectZone && (
                  <Form.Group className="mb-3" controlId="zone_id">
                    <Form.Label>Zona</Form.Label>
                    <Form.Select value={zone_id} onChange={handleChangeZoneID}>
                      <option value="">Selecciona una zona</option>
                      {zones.map((zone) => {
                        return (
                          <option key={zone.zone_id} value={zone.zone_id}>
                            {zone.name}
                          </option>
                        );
                      })}
                    </Form.Select>
                  </Form.Group>
              )}
              {showSelectDeanery && (
                  <Form.Group className="mb-3" controlId="deanery_id">
                    <Form.Label>Decanato</Form.Label>
                    <Form.Select value={deanery_id} onChange={handleChangeDeaneryID}>
                      <option value="">Selecciona una decanato</option>
                      {deaneries.map((deanery) => {
                        return (
                          <option key={deanery.deanery_id} value={deanery.deanery_id}>
                            {deanery.name}
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
          <Button 
          className="ManageButtons" 
          variant="success" 
          type="submit"
          disabled={!isValidate()}
          >
            {mode === "add" ? "Agregar" : "Actualizar"}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default ManagePam;