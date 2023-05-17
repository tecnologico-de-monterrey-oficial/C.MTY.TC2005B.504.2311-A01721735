const mysql = require("../database/db");

class MainController {
    async getRoles(req, res) {
        console.log("Get Roles");
        var sql = `call sp_get_roles()`;
        mysql.query(sql, (error, data, fields) => {
            if (error) {
                res.status(500);
                res.send(error.message);
            } else {
                console.log("Roles Data:")
                var roles = data[0];
                res.json({
                    roles,
                });
            }
        });
    }

}

const roleController = new MainController();
module.exports = roleController;