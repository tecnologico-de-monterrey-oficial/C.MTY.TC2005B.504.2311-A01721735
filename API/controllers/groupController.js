const mysql = require("../database/db");

class MainController {
  async getGroupArchdioceses(req, res) {
    console.log("Get group archdioceses");
    var sql = `call sp_get_group_archdioceses()`;
    mysql.query(sql, (error, data, fields) => {
      if (error) {
        res.status(500);
        res.send(error.message);
      } else {
        console.log(data);
        var archdioceses = data[0];
        res.json({
          archdioceses,
        });
      }
    });
  }

  async getGroupData(req, res) {
    console.log("Get Pam");
    console.log(req.params.id);
    if (req.params.id != null) {
      let parentID = req.params.id;
      var sql = `call sp_get_group_data('${parentID}')`;
      mysql.query(sql, (error, data, fields) => {
        if (error) {
          res.status(500);
          res.send(error.message);
          console.log(error.message);
        } else {
          console.log(data);
          var groupData = data[0];
          res.json({
            groupData,
          });
        }
      });
    } else {
      res.send("Por favor llena todos los datos!");
      console.log("Por favor llena todos los datos!");
    }
  }
}

const groupController = new MainController();
module.exports = groupController;