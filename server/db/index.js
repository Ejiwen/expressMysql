var mysql = require('mysql');

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


    module.exports.getAll = (cb) => {
      module.exports.dbConnection.query('SELECT * FROM todo', (err, results) => {
        if (err) {
          console.log(err);
        } else {
          cb(null,results);
        }
      });
    }


// module.exports = {
//   messages: {
//     get: function (callback) {
//       db.query('SELECT * FROM todo', (err, results) => {
//         if (err) {
//           console.log(err);
//         } else {
//           callback(null, results);
//         }
//       });
//     }
//   }
// }




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
