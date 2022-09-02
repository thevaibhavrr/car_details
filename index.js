const express = require("express");
const app = express();
const PORT = 8000;

const car_route = require("./car_detail/car_details");
const sale_route = require("./sale_details/sale");

app.use("/car", car_route);
app.use("/sale", sale_route);

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
