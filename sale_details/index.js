const express = require("express");
const route = express.Router();
const daoo = require("./dao");

route.get("/get-all-sale", async (req, res) => {
  const data = await daoo.getallSale();
  res.send(data.rows);
});
// push

route.get("/sale-by-id/:id", async (req, res) => {
  const saleById = await daoo.saleById(req.params.id);
  res.send(saleById.rows);
});

route.get("/sale-by-company", async (req, res) => {
  const saleByCompany = await daoo.getdetilsbycompany(
    req.params.tourist_compan
  );
  res.send(saleByCompany.rows);
});

module.exports = route;
