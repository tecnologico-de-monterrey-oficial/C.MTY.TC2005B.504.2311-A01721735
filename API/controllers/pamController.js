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

  async getPamByEmail(req, res) {
    console.log("Get Pam By Email");
    console.log("EMAIL: ");
    console.log(req.params.email);
    if (req.params.email != null) {
      let email = req.params.email;
      var sql = `call sp_get_pam_by_email('${email}')`;
      mysql.query(sql, (error, data, fields) => {
        if (error) {
          res.status(500);
          res.send(error.message);
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
      req.body.first_name != null &&
      req.body.last_name != null &&
      req.body.email != null &&
      req.body.birth_date != null 
    ) {
      let first_name = req.body.first_name;
      let last_name = req.body.last_name;
      let gender_id = req.body.gender_id;
      let role_id = req.body.role_id;
      let phone = req.body.phone;
      let email = req.body.email;
      let country = req.body.country;
      let state = req.body.state;
      let city = req.body.city;
      let address_1 = req.body.address_1;
      let address_2 = req.body.address_2;
      let zip_code = req.body.zip_code;
      let birth_date = req.body.birth_date;
      let deceased_date = req.body.deceased_date;
      let guardian_id = req.body.guardian_id;
      let doctor_id = req.body.doctor_id;
      let belongs_to_archdiocese = req.body.belongs_to_archdiocese;
      let pam_group_id = req.body.pam_group_id;
      
      var sql = `call sp_add_pam('${first_name}', '${last_name}', '${gender_id}', '${role_id}', '${phone}', '${email}', '${country}', '${state}', '${city}', '${address_1}', '${address_2}', '${zip_code}', '${birth_date}', '${deceased_date}', '${guardian_id}', '${doctor_id}', '${belongs_to_archdiocese}','${pam_group_id}');`;
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

  async addPamByEmail(req, res) {
    console.log("Add Pam By Email RTQ");
    console.log(req.body);
    if (
      req.body.email != null 
    ) {
     
      let email = req.body.email;
      
      
      var sql = `call sp_add_pam_by_email('${email}');`;
      mysql.query(sql, (error, data, fields) => {
        if (error) {
          res.status(500);
          res.send(error.message);
          console.log(error.message);
        } else {
          console.log(data);
          res.json({
            status: 200,
            message: "PAM uploaded successfully by email",
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
      req.body.first_name != null &&
      req.body.last_name != null &&
      req.body.email != null &&
      req.body.birth_date != null &&
      req.body.deceased_date != null
    ) {
      let pamID = req.params.id;
      let first_name = req.body.first_name;
      let last_name = req.body.last_name;
      let gender_id = req.body.gender_id;
      let role_id = req.body.role_id;
      let phone = req.body.phone;
      let email = req.body.email;
      let country = req.body.country;
      let state = req.body.state;
      let city = req.body.city;
      let address_1 = req.body.address_1;
      let address_2 = req.body.address_2;
      let zip_code = req.body.zip_code;
      let birth_date = req.body.birth_date;
      let deceased_date = req.body.deceased_date;
      let guardian_id = req.body.guardian_id;
      let doctor_id = req.body.doctor_id;
      let belongs_to_archdiocese = req.body.belongs_to_archdiocese;
      let pam_group_id = req.body.pam_group_id;
      var sql = `call sp_edit_pam('${pamID}','${first_name}', '${last_name}', '${gender_id}', '${role_id}', '${phone}', '${email}', '${country}', '${state}', '${city}', '${address_1}', '${address_2}', '${zip_code}', '${birth_date}', '${deceased_date}', '${guardian_id}', '${doctor_id}', '${belongs_to_archdiocese}','${pam_group_id}');`;
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

  async getPamsWithTestResultInRange(req, res) {
    console.log("Get Pams by Score");
    const { test_id, lower_boundary, upper_boundary } = req.query;
  
    if (test_id && lower_boundary && upper_boundary) {
      const sql = `CALL sp_get_pams_with_test_result_in_range(?, ?, ?)`;
      mysql.query(
        sql,
        [test_id, lower_boundary, upper_boundary],
        (error, data, fields) => {
          if (error) {
            res.status(500).send(error.message);
            console.log(error.message);
          } else {
            console.log(data);
            const pams = data[0];
            res.json({ pams });
          }
        }
      );
    } else {
      res.status(400).send("Please provide all parameters!");
      console.log("Please provide all parameters!");
    }
  }

  async sp_get_test_question_results(req, res) {
    console.log("Get Test Question Results");
    const { testId, questionNumber } = req.query;

    if (testId && questionNumber) {
      const sql = `CALL sp_get_test_question_results(?, ?)`;
      mysql.query(sql, [testId, questionNumber], (error, data, fields) => {
        if (error) {
          res.status(500).send(error.message);
          console.log(error.message);
        } else {
          console.log(data);
          const testQuestionResults = data[0];
          res.json({ testQuestionResults });
        }
      });
    } else {
      res.status(400).send("Please provide all parameters!");
      console.log("Please provide all parameters!");
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