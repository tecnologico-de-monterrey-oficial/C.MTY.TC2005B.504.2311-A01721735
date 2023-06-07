const mysql = require("../database/db");

class MainController {
  async getPams(req, res) {
    console.log("Get Pams");
    var sql = `call sp_get_pams()`;
    mysql.query(sql, (error, data, fields) => {
      if (error) {
        res.status(500);
        res.send(error.message);
      } else {
        console.log(data);
        var pams = data[0];
        res.json({
          pams,
        });
      }
    });
  }
  async getPamsGroups(req, res) {
    console.log("Get Pams");
    var sql = `call sp_get_pams_groups()`;
    mysql.query(sql, (error, data, fields) => {
      if (error) {
        res.status(500);
        res.send(error.message);
      } else {
        console.log(data);
        var pams = data[0];
        res.json({
          pams,
        });
      }
    });
  }

  async getPam(req, res) {
    console.log("Get Pam");
    console.log(req.params.id);
    if (req.params.id != null) {
      let pamID = req.params.id;
      var sql = `call sp_get_pam('${pamID}')`;
      mysql.query(sql, (error, data, fields) => {
        if (error) {
          res.status(500);
          res.send(error.message);
          console.log(error.message);
        } else {
          console.log(data);
          var pam = data[0];
          res.json({
            pam,
          });
        }
      });
    } else {
      res.send("Por favor llena todos los datos!");
      console.log("Por favor llena todos los datos!");
    }
  }

  async addPam(req, res) {
    console.log("Add Pams RTQ");
    console.log(req.body);
    if (
      req.body.name != null &&
      req.body.last_name != null &&
      req.body.email != null &&
      req.body.birth_date != null 
    ) {
      let name = req.body.name;
      let last_name = req.body.last_name;
      let email = req.body.email;
      let birth_date = req.body.birth_date;
      let archdiocese = req.body.archdiocese;
      let deanery_id = req.body.deanery_id;
      var sql = `call sp_add_pam('${name}', '${last_name}', '${email}', '${birth_date}', ${archdiocese}, ${deanery_id});`;
      mysql.query(sql, (error, data, fields) => {
        if (error) {
          res.status(500);
          res.send(error.message);
          console.log(error.message);
        } else {
          console.log(data);
          res.json({
            status: 200,
            message: "PAM uploaded successfully",
            affectedRows: data.affectedRows,
          });
        }
      });
    } else {
      res.send("Por favor llena todos los datos!");
      console.log("Por favor llena todos los datos!");
    }
  }

  async updatePam(req, res) {
    console.log("Edit Pams RTQ");
    if (
      req.params.id != null &&
      req.body.name != null &&
      req.body.last_name != null &&
      req.body.email != null &&
      req.body.birth_date != null 
    ) {
      let pamID = req.params.id;
      let name = req.body.name;
      let last_name = req.body.last_name;
      let email = req.body.email;
      let birth_date = req.body.birth_date;
      let archdiocese = req.body.archdiocese;
      let deanery_id = req.body.deanery_id;
      var sql = `call sp_edit_pam(${pamID},'${name}', '${last_name}', '${email}', '${birth_date}', ${archdiocese}, ${deanery_id});`;
      mysql.query(sql, (error, data, fields) => {
        if (error) {
          res.status(500);
          res.send(error.message);
          console.log(error.message);
        } else {
          console.log(data);
          res.json({
            status: 200,
            message: "PAM updated successfully",
            affectedRows: data.affectedRows,
          });
        }
      });
    } else {
      res.send("Por favor llena todos los datos!");
      console.log("Por favor llena todos los datos!");
    }
  }

  async deletePam(req, res) {
    console.log("Delete Pam RTQ");
    console.log(req.params.id);
    if (
      req.params.id != null
    ) {
      let pamID = req.params.id;
      var sql = `call sp_delete_pam(${pamID});`;
      mysql.query(sql, (error, data, fields) => {
        if (error) {
          res.status(500);
          res.send(error.message);
          console.log(error.message);
        } else {
          console.log(data);
          res.json({
            status: 200,
            message: "PAM deleted successfully",
            affectedRows: data.affectedRows,
          });
        }
      });
    } else {
      res.send("Por favor llena todos los datos!");
      console.log("Por favor llena todos los datos!");
    }
  }
}

const pamController = new MainController();
module.exports = pamController;