const mysql = require("../database/db");

class MainController {
    async getBooks(req, res) {
        console.log("Get Books");
        var sql = `call sp_get_books()`;
        // var sql = `select * from book`;
        mysql.query(sql, (error, data, fields) => {
            if (error) {
                res.status(500);
                res.send(error.message);
            } else {
                console.log("Books Data:")
                console.log(data);
                var books = data[0];
                res.json({
                    books,
                });
            }
        });
    }

    async getBook(req, res) {
        console.log("Get Book");
        console.log(req.params.id);
        if (req.params.id != null) {
            let bookID = req.params.id;
            var sql = `call sp_get_book('${bookID}')`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                } else {
                    console.log(data);
                    var book = data[0];
                    res.json({
                        book,
                    });
                }
            });
        } else {
            res.send("Por favor llena todos los datos!");
            console.log("Por favor llena todos los datos!");
        }
    }   

    async addBook(req, res) {
        console.log("Add Book");
        console.log(req.body);
        if (
            req.body.name != null &&
            req.body.author != null
        ) {
            let name = req.body.name;
            let author = req.body.author;
            let cover = req.body.cover;
            var sql = `call sp_add_book('${name}', '${author}', '${cover}');`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                    console.log(error.message);
                } else {
                    console.log(data);
                    res.json({
                        status: 200,
                        message: "Book uploaded successfully",
                        affectedRows: data.affectedRows,
                    });
                }
            });
        } else {
            res.send("Por favor llena todos los datos!");
            console.log("Por favor llena todos los datos!");
        }
    }

    async updateBook(req, res) {
        console.log("Update Book");
        console.log(req.body);
        if (
            req.params.id != null &&
            req.body.name != null &&
            req.body.author != null
        ) {
            let bookID = req.params.id;
            let name = req.body.name;
            let author = req.body.author;
            let cover = req.body.cover;
            var sql = `call sp_edit_book('${bookID}', '${name}', '${author}', '${cover}');`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                    console.log(error.message);
                } else {
                    console.log(data);
                    res.json({
                        status: 200,
                        message: "Book updated successfully",
                        affectedRows: data.affectedRows,
                    });
                }
            });
        } else {
            res.send("Por favor llena todos los datos!");
            console.log("Por favor llena todos los datos!");
        }
    }

    async deleteBook(req, res) {
        console.log("Delete Book");
        console.log(req.params.id);
        if (req.params.id != null) {
            let bookID = req.params.id;
            var sql = `call sp_delete_book('${bookID}')`;
            mysql.query(sql, (error, data, fields) => {
                if (error) {
                    res.status(500);
                    res.send(error.message);
                } else {
                    console.log(data);
                    res.json({
                        status: 200,
                        message: "Book deleted successfully",
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

const bookController = new MainController();
module.exports = bookController;