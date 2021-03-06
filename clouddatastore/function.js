let SL_GCP = require('slappforge-sdk-gcp');
let sqlConnMgr = require('./SqlConnMgr');
const sql = new SL_GCP.SQL(sqlConnMgr);

exports.handler = function (request, response) {
    // You can pass the existing connection to this function.
    // A new connection will be created if it's not present as the third param.
    // You must always end/destroy the DB connection after it's used.
    sql.query({
        instanceIdentifier: 'instance10',
        query: 'INSERT INTO DATA(ID,NAME,AGE)',
        inserts: [12, "TEST123", 22]
    }, function (error, results, connection) {
        if (error) {
            throw error;
        } else {
            // use `results` to do your magic
        }
        connection.end();
    });

    response.send({ "message": "Successfully executed" });
}