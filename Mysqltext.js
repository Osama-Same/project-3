const connection = require("./MySql");


const AllData = () => {
    const query = `SELECT * FROM Login`;
    connection.query(query, (err, result, fields) => {
      if (err) throw err;
      // result are the data returned by mysql server
      console.log(result);
      // fields are extra meta data about result
      console.log(fields);
    });
  };
  AllData();


  const addLogin = (email,password) => {
    const query = `INSERT INTO users (email, password) VALUES (?, ?)`;
    const data = [ email.email,password.password];
    connection.query(query, data, (err, results) => {
      console.log(results);
    });
  };
  addLogin("osamama","1234");