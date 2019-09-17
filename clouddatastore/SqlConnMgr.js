module.exports = function() {
    this.dbConnections = [];

    this.dbConnections["instance10"] = {
        host: "34.74.106.203",
        port: "3306",
        user: "mysql.sys",
        password: process.env.Password_sqlinstance10,
        database: "information_schema"
    };
};