const mysql = require('mysql');

let connection = mysql.createConnection({
  host: "sl-us-south-1-portal.57.dblayer.com",
  user: "admin",
  database: "golden",
  password: "WZTXEIPBYCDLOAMO",
  port:"28337"
});

  connection.connect(function(err) {
    if (err) {
      console.error('Error connecting: ' + err.stack);
      return;
    }
    console.log('Connected as thread id: ' + connection.threadId);
  });

  module.exports = connection;