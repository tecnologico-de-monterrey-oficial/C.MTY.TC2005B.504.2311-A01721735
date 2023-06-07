const mysql = require("../database/db");

class MainController {
  async getZones(req, res) {
    console.log("Get Zones");
    console.log(req.params.id);
    if (req.params.id != null) {
      let archdioceseID = req.params.id;
      var sql = `call sp_get_zones('${archdioceseID}')`;
      mysql.query(sql, (error, data, fields) => {
        if (error) {
          res.status(500);
          res.send(error.message);
          console.log(error.message);
        } else {
          console.log(data);
          var zones = data[0];
          res.json({
            zones,
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