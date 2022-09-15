const express = require("express");
const route = express.Router();
const daoo = require("./dao");

route.get("/get-all-sale", async (req, res) => {
  const data = await daoo.getallSale();
  res.send(data.rows);
});


route.get("/sale-by-id/:id", async (req, res) => {
  const saleById = await daoo.getById(req.params.id);
  res.send(saleById.rows);
});

route.get("/sale-by-company/:tourist_company", async (req, res) => {
  const saleByCompany = await daoo.getdetilsbycompany(
    req.params.tourist_company
  );
  res.send(saleByCompany.rows);
});

module.exports = route;
