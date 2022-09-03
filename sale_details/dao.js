const dbClient = require("../db-connection.js");


const getallSale = ()=>{
    return dbClient.query(`SELECT * FROM  car_sales`);
}
const getById = (id)=>{
    return dbClient.query(`SELECT * FROM  car_sales where id = ${id}`);
}

const getdetilsbycompany = (tourist_company) => {
  return dbClient.query(
    `SELECT * FROM car_sales where tourist_company = '${tourist_company}'`
  );
};


module.exports = {
    getallSale,
    getById,
    getdetilsbycompany
}