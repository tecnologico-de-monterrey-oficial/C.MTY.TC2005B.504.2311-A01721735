const mysql = require("../database/db");

class MainController {
  async getArchdioceses(req, res) {
    console.log("Get archdioceses");
    var sql = `call sp_get_archdioceses()`;
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

}

const archdioceseController = new MainController();
module.exports = archdioceseController;