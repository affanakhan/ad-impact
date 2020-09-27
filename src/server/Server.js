const express = require("express");
const path = require("path");
var bodyParser = require("body-parser");
var cors = require("cors");
const mysql = require("mysql");
const { Console } = require("console");
const { connect } = require("http2");


var app = express();
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

let surveys = {};



var connection = mysql.createConnection({
    host: "sql3.freesqldatabase.com",
    user: "sql3366900",
    password: "KmY85GkHPy",
    database: "sql3366900",
    // port: 3306,
})

// app.post("/doasurvey", (req, res){
  
// try {
//      connection.query(
//     "INSERT INTO cs370_data (username, data) VALUES (null, '"+ req.body.email +"', '"+ req.body.data +"')"
//     );
//     console.log('inserted');
// } catch (e) {
//     console.log(e);

// }


// });




// app.post('/doasurvey', function(req, res) {
//     // Get sent data.
//     var user = req.body;
//     // Do a MySQL query.
//     var query = connection.query("INSERT INTO cs370_data (username, data) VALUES (null, '"+ req.body.email +"', '"+ req.body.data +"')", user, function(err, result) {
//       // Neat!
//     });
//     res.end('Success');
//   });


  app.post('/doasurvey', function(req, res) {
    // const username = req.body.email;
    // const data = req.body.data;
    // username = ? , data = ?
    // var info = req.body;
    // req.body = JSON.stringify(req.body);
    const username = JSON.stringify(req.body.email);
    const data = JSON.stringify(req.body.data);
  connection.query(`INSERT INTO cs370_data SET username = ? , data = ?`, [username, data], function(err, result) {
  console.log(username);
  if (err) throw err;
      res.send(' successfully');
    });
  });





// app.post("/doasurvey", (req, res) => {
//     if(req.body.email in surveys){
//         surveys[req.body.email].push(req.body.data)
//         console.log(surveys)
//     } else {
//         surveys[req.body.email] = []
//         surveys[req.body.email].push(req.body.data)
//         console.log(surveys)

//     }
//     res.end()
// })

app.get("/:email/surveys", (req, res) => {
    console.log(surveys[req.params.email])

    if(surveys[req.params.email] === undefined){
        res.json([])
    } else {
        res.json(surveys[req.params.email])
    }
})
  

app.get("/", (req, res) => {
    res.send("Hello")
})

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port)


