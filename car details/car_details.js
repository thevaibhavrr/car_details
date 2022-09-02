const client = require("./car_connection.js");
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

client.connect();

app.get("/car", (req, res) => {
  client.query(`SELECT * FROM  car_details`, (err, result) => {
    if (err) console.error(err), res.send(err);
    else {
      res.send(result.rows);
    }
  });
  client.end;
});

app.get("/car/:id", (req, res) => {
  client.query(
    `SELECT * FROM car_details where id=${req.params.id}`,
    (err, result) => {
      if (err) console.error(err), res.send(err);
      else res.send(result.rows);
    }
  );
  console.log("vaibhav");
});

app.post("/car/new", (req, res) => {
  const car = req.body;
  console.log(car);
  let inserquery = `INSERT INTO car_details(id,model,launch_year,fule_type,engine_cc,rating,total_seats,car_type)
                    VALUES (${car.id},'${car.model}',${car.launch_year},'${car.fule_type}',${car.engine_cc},${car.rating},${car.total_seats},'${car.car_type}')`;

  client.query(inserquery, (err, result) => {
    if (err) console.error(err);
    else res.send("inset successful");
  });
  client.end;
});

app.put("/car/:id", (req, res) => {
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
  client.end;
});

app.delete("/car/:id", (req, res) => {
  let insertQuery = `delete from car_details where id=${req.params.id}`;

  client.query(insertQuery, (err, result) => {
    if (!err) {
      res.send("Deletion was successful");
    } else {
      console.log(err.message);
    }
  });
  client.end;
});

app.listen(8000, () => {
  console.log("8000");
});
