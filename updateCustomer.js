var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "shail",
  password: "Chindichor1@",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "UPDATE customers SET address = 'duncan street' WHERE address = '6467 cork Street'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
});
