var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "zero",
  database: "mysql",
});

con.connect(function (error) {
  if (error) throw error;
  console.log("Koneksi berhasil");
});

module.exports = con;
