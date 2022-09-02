const express = require("express");
const client = require("../db-connection.js");

const route = express.Router();


route.get("/get-by-id/:id", (req, res) => {
  client.query(
    `SELECT * FROM car_sales where id = ${req.params.id}`,
    (err, result) => {
      if (err) console.error(err), res.send(err);
      else res.send(result.rows);
    }
  );
});

route.get("/get-by-tourist-company/:tourist_company", (req, res) => {
  client.query(
    `SELECT * FROM car_sales where tourist_company = '${req.params.tourist_company}'`,
    (err, result) => {
      if (err) console.error(err), res.send(err);
      else res.send(result.rows);
    }
  );
});

route.get("/get-all-sale", (req, res) => {
  client.query(`SELECT * FROM  car_sales`, (err, result) => {
    if (err) console.error(err), res.send(err);
    else {
      res.send(result.rows);
    }
  });
});


module.exports = route;
