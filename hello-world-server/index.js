const express = require('express')
const app = express()
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors')
const { json } = require('body-parser')

//local mysql db connection

//MySQL details
var mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'nodejs_test',
  multipleStatements: true
});


mysqlConnection.connect((err) => {
  if (!err)
    console.log('Connection Established Successfully');
  else
    console.log('Connection Failed!' + JSON.stringify(err, undefined, 2));
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());



app.get('/api/get', (req, res) => {
  const sqlSelect = "select * from `node_crud_test`"
  mysqlConnection.query(sqlSelect, (err, result) => {

    //console.log(result);
    res.send(result)
  })

})

app.post('/api', (req, res) => {

  const nameIt = req.body.nameIt
  const review = req.body.review

  const sqlInsert = "INSERT INTO `node_crud_test` (`name`, `review`) VALUES (?,?)"
  mysqlConnection.query(sqlInsert, [nameIt, review], (err, result) => {

    //console.log(result);
  })

})
app.listen(3001, () => {

  console.log('Backend running on 3001');

})



//app.get('/', (req, res) => {

//const sqlInsert = "insert into node_crud_test (NAME, REVIEW) values ('Avengers', 'Best Movie');"
// const sqlInsert = "INSERT INTO `node_crud_test` (`name`, `review`) VALUES ('inception', 'good movie');"
// mysqlConnection.query(sqlInsert);
// res.send('hallo sent');
// mysqlConnection.query(sqlInsert, (err, result) => {

//   if (!err)
//     // res.send(rows);
//     res.send('Data Inserted');

//   else
//     console.log(err);
// })





//})