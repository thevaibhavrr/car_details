// const bodyParser = require('body-parser')
// const express =  require('express')
// const app  = express()
// const client =  require('./sale_connection.js')

const express = require('express')
const app =  express()
const client =  require('./sale_connection')


const bodyParser = require("body-parser");
app.use(bodyParser.json());

client.connect();

app.get("/sale/company/:id", (req, res) => {
  client.query(
    `SELECT * FROM car_sales where id = ${req.params.id}`,
    (err, result) => {
      if (err) console.error(err), res.send(err);
      else res.send(result.rows);
    }
  );
});

app.get("/sale/:tourist_company", (req, res) => {
  client.query(
    `SELECT * FROM car_sales where tourist_company = '${req.params.tourist_company}'`,
    (err, result) => {
      if (err) console.error(err), res.send(err);
      else res.send(result.rows) ;
    }
  );
});

// app.get("/sal/:tourist_company", (req, res) => {
//   client.query(
//     `SELECT MIN(price) AS total , id FROM car_sales where tourist_company = '${req.params.tourist_company}'`,
//     (err, result) => {
//       if (err) console.error(err), res.send(err);
//       else res.send(result.rows);
//     }
//   );
// });







app.get("/sale", (req, res) => {
  client.query(`SELECT * FROM  car_sales`, (err, result) => {
    if (err) console.error(err), res.send(err);
    else {
      res.send(result.rows);
    }
  });
  client.end;
});


app.get("/car-model-uniqe", (req, res) => {
  client.query(`SELECT DISTINCT model, *  FROM  car_sales`, (err, result) => {
    if (err) console.error(err), res.send(err);
    else {
      res.send(result.rows);
    }
  });
  client.end;
});







app.listen(4000,()=>{
  console.log('4000')
})