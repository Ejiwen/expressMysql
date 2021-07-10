var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


module.exports.dbConnection = mysql.createConnection({
  host: 'localhost', // new line added
  user: 'root',
  password: '',
  database: 'test_db'
});


module.exports.dbConnection.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log('Connected to db');
  }
});

// module.exports.dbConnection.query(`INSERT INTO todo (item) values ('heyyy');`, function (err, rows, fields) {
//   if (err) throw err

//   console.log('BRAVOOOOOOO !!!!');
// });





/*
module.exports.dbConnection.query(`INSERT INTO todo (item) values ('heyyy');`, function (err, rows, fields) {
  if (err) throw err

  console.log('BRAVOOOOOOO !!!!');
});
*/




//connection.end()


// module.exports.dbConnection = mysql.createConnection({
//   host: 'localhost', // new line added
//   user: 'root',
//   password: '',
//   database: 'test_db'
// });

// module.exports.dbConnection.connect((err) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log('Connected to db');
//   }
// });
