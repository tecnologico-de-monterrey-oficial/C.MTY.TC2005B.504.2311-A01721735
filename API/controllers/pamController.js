const mysql = require("../database/db");

// Retrieve all Pams from the database.
class MainController{
    async getPams(req, res) {
        console.log("Get Pams");
        var sql = `call sp_get_pams()`;
        mysql.query(sql, (error, data, fields) => {
          if (error) {
            res.status(500);
            res.send(error.message);
          } else {
            console.log(data);
            res.json({
              data,
            });
          }
        });
      }
}

const pamsController = new MainController();
module.exports = pamsController;