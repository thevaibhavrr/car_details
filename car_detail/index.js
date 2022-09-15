const express = require("express");

const route = express.Router();

const dao = require("./dao.js");

route.get("/get-all", async (req, res) => {
  const carList = await dao.getAllCarList();
  res.send(carList.rows);
});

route.get("/get-by-id/:id", async (req, res) => {
  const car = await dao.getById(req.params.id);
  res.send(car.rows[0]);
});

route.get("/get-uniq", async (req,res) => {
  const uniqcar = await dao.getByUniqeModel();
  res.send(uniqcar.rows);
});

route.delete("/delete-data/:id", async (req, res) => {
  
  const deletedata = await dao.deleteData(req.params.id);
  res.send("data deleted successful ");
});



route.post("/add-new-data", async (req, res) => {
  const adddata = await dao.addNewData(req.body);
  res.send(adddata.rows);
});

module.exports = route;
