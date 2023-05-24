const mysql = require("../database/db");

class MainController {
  async getDeaneries(req, res) {
    console.log("Get Deaneries");
    console.log(req.params.id);
    if (req.params.id != null) {
      let deaneryID = req.params.id;
      var sql = `call sp_get_deaneries('${deaneryID}')`;
      mysql.query(sql, (error, data, fields) => {
        if (error) {
          res.status(500);
          res.send(error.message);
          console.log(error.message);
        } else {
          console.log(data);
          var deaneries = data[0];
          res.json({
            deaneries,
          });
        }
      });
    } else {
      res.send("Por favor llena todos los datos!");
      console.log("Por favor llena todos los datos!");
    }
  }

}

const archdioceseController = new MainController();
module.exports = archdioceseController;