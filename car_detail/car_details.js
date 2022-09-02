const client = require("../db-connection.js");
const express = require("express");

const route = express.Router();



route.get("/get-all", (req, res) => {
  client.query(`SELECT * FROM  car_details`, (err, result) => {
    if (err) console.error(err), res.send(err);
    else {
      res.send(result.rows);
    }
  });
  
});

route.get("/get-by-id/:id", (req, res) => {
  client.query(
    `SELECT * FROM car_details where id=${req.params.id}`,
    (err, result) => {
      if (err) console.error(err), res.send(err);
      else res.send(result.rows);
    }
  );
});

route.get("/car-model-uniqe", (req, res) => {
  client.query(`SELECT DISTINCT model, *  FROM  car_sales`, (err, result) => {
    if (err) console.error(err), res.send(err);
    else {
      res.send(result.rows);
    }
  });
});


route.post("/new", (req, res) => {
  const car = req.body;
  let inserquery = `INSERT INTO car_details(id,model,launch_year,fule_type,engine_cc,rating,total_seats,car_type)
                    VALUES (${car.id},'${car.model}',${car.launch_year},'${car.fule_type}',${car.engine_cc},${car.rating},${car.total_seats},'${car.car_type}')`;

  client.query(inserquery, (err, result) => {
    if (err) console.error(err);
    else res.send("inset successful");
  });
});

route.put("/:id", (req, res) => {
  let car = req.body;
  let updateQuery = `update car_details                       
                       set model = '${car.model}',
                       launch_year = '${car.launch_year}',
                       engine_cc = '${car.engine_cc}',
                        rating = '${car.rating}',
                         total_seats = '${car.total_seats}',
                       car_type = '${car.car_type}'
                       where id = '${car.id}'`;

  client.query(updateQuery, (err, result) => {
    if (!err) {
      res.send("Update was successful");
    } else {
      console.log(err.message);
    }
  });
});

route.delete("/:id", (req, res) => {
  let insertQuery = `delete from car_details where id=${req.params.id}`;

  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send("Deletion was successful");
    } else {
      console.log(err.message);
    }
  });
});

module.exports = route;

