const mysql = require("../database/db");

class MainController {
  async getQuestionsGDS(req, res) {
    console.log("Get Questions GDS");
    console.log(req.params.id);
      var sql = `call sp_get_questions_GDS`;
      mysql.query(sql, (error, data, fields) => {
        if (error) {
          res.status(500);
          res.send(error.message);
          console.log(error.message);
        } else {
          console.log(data);
          var questions = data[0];
          res.json({
            questions,
          });
        }
      });
    
  }

  async getQuestions(req, res) {
    console.log("Get Questions");
    console.log(req.params.id);
    if (req.params.id != null) {
      let testID = req.params.id;
      var sql = `call sp_get_question('${testID}')`;
      mysql.query(sql, (error, data, fields) => {
        if (error) {
          res.status(500);
          res.send(error.message);
          console.log(error.message);
        } else {
          console.log(data);
          var questions = data[0];
          res.json({
            questions,
          });
        }
      });
    } else {
      res.send("Por favor llena todos los datos!");
      console.log("Por favor llena todos los datos!");
    }
  }

  async getQuestionsAns(req, res) {
    console.log("Get Questions");
    console.log(req.params.id);
    if (req.params.id != null) {
      let questionID = req.params.id;
      var sql = `call sp_get_question_ans('${questionID}')`;
      mysql.query(sql, (error, data, fields) => {
        if (error) {
          res.status(500);
          res.send(error.message);
          console.log(error.message);
        } else {
          console.log(data);
          var questions = data[0];
          res.json({
            questions,
          });
        }
      });
    } else {
      res.send("Por favor llena todos los datos!");
      console.log("Por favor llena todos los datos!");
    }
  }


}

const testController = new MainController();
module.exports = testController;