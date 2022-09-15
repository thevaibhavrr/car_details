const dbClient = require("../db-connection.js");

const getAllCarList = () => {
  return dbClient.query("SELECT * FROM  car_details");
};
// push
const getById = (id) => {
  return dbClient.query(`SELECT * FROM car_details where id=${id}`);
};

const getByUniqeModel = () => {
  return dbClient.query(`SELECT DISTINCT model, *  FROM  car_sales`);
};

const deleteData = (id) => {
  return dbClient.query(`delete from car_details where id=${id}`);
};



const addNewData = ({ id,model,launch_year,engine_cc,rating,total_seats,car_type }) => {
  return dbClient.query(
    `INSERT INTO car_details(id,model,launch_year,engine_cc,rating,total_seats,car_type)
                    VALUES (${id},'${model}',${launch_year},${engine_cc},${rating},${total_seats},'${car_type}')`
  );
};

module.exports = {
  getAllCarList,
  getById,
  getByUniqeModel,
  deleteData,
  addNewData,
};
