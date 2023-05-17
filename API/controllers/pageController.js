const mysql = require("../database/db");

class MainController {
  async getPages(req, res) {
    console.log("Get Pages");
    var sql = `call sp_get_pages()`;
    mysql.query(sql, (error, data, fields) => {
      if (error) {
        res.status(500);
        res.send(error.message);
      } else {
        console.log(data);
        var pages = data[0];
        res.json({
          pages,
        });
      }
    });
  }

  async getPage(req, res) {
    console.log("Get Page");
    console.log(req.params.id);
    if (req.params.id != null) {
      let pageID = req.params.id;
      var sql = `call sp_get_page(${pageID})`;
      mysql.query(sql, (error, data, fields) => {
        if (error) {
          res.status(500);
          res.send(error.message);
        } else {
          console.log(data);
          var page = data[0];
          res.json({
            page,
          });
        }
      });
    } else {
      res.send("Por favor llena todos los datos!");
      console.log("Por favor llena todos los datos!");
    }
  }

  async getPageNo(req, res) {
    console.log("Get Page By Number");
    console.log(req.params.id);
    console.log(req.params.no);
    if (req.params.id != null && req.params.no != null) {
      let pageID = req.params.id;
      let pageNo = req.params.no;
      var sql = `call sp_get_page_no(${pageID}, ${pageNo})`;
      mysql.query(sql, (error, data, fields) => {
        if (error) {
          res.status(500);
          res.send(error.message);
        } else {
          console.log(data);
          var page = data[0];
          res.json({
            page,
          });
        }
      });
    } else {
      res.send("Por favor llena todos los datos!");
      console.log("Por favor llena todos los datos!");
    }
  }

  async getBookPages(req, res) {
    console.log("Get Book Pages");
    console.log(req.params.id);
    if (req.params.id != null) {
      let bookID = req.params.id;
      var sql = `call sp_get_book_pages(${bookID})`;
      mysql.query(sql, (error, data, fields) => {
        if (error) {
          res.status(500);
          res.send(error.message);
        } else {
          console.log(data);
          var pages = data[0];
          res.json({
            pages,
          });
        }
      });
    } else {
      res.send("Por favor llena todos los datos!");
      console.log("Por favor llena todos los datos!");
    }
  }

    async addPage(req, res) {
        console.log("Add Page");
        console.log(req.body);
        if (
            req.body.book_id != null &&
            req.body.page_no != null &&
            req.body.page != null
        ) {
            let book_id = req.body.book_id;
            let page_no = req.body.page_no;
            let page = req.body.page;
            var sql = `call sp_add_page(${book_id}, ${page_no}, '${page}');`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                    console.log(error.message);
                } else {
                    console.log(data);
                    res.json({
                        status: 200,
                        message: "Page uploaded successfully",
                        affectedRows: data.affectedRows,
                    });
                }
            });
        } else {
            res.send("Por favor llena todos los datos!");
            console.log("Por favor llena todos los datos!");
        }
    }

    async updatePage(req, res) {
        console.log("Update Page");
        console.log(req.body);
        if (
            req.params.id != null &&
            req.body.book_id != null &&
            req.body.page_no != null &&
            req.body.page != null
        ) {
            let pageID = req.params.id;
            let book_id = req.body.book_id;
            let page_no = req.body.page_no;
            let page = req.body.page;
            var sql = `call sp_edit_page(${pageID}, ${book_id}, ${page_no}, '${page}');`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                    console.log(error.message);
                } else {
                    console.log(data);
                    res.json({
                        status: 200,
                        message: "Page updated successfully",
                        affectedRows: data.affectedRows,
                    });
                }
            });
        } else {
            res.send("Por favor llena todos los datos!");
            console.log("Por favor llena todos los datos!");
        }
    }

    async deletePage(req, res) {
        console.log("Delete Page");
        console.log(req.params.id);
        if (req.params.id != null) {
            let pageID = req.params.id;
            var sql = `call sp_delete_page(${pageID});`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                    console.log(error.message);
                } else {
                    console.log(data);
                    res.json({
                        status: 200,
                        message: "Page deleted successfully",
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

const pageController = new MainController();
module.exports = pageController;
