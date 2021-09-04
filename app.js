// Import sequelize connection and the initialized Recipe model from './db.js'
const { sequelize, Recipe } = require("./db");
// Import array with data from './data.json'
const recipesData = require("./data.json");


// Verify the connection to the DB
sequelize
  .authenticate()
  .then(() => console.log("Connected to the DB."))
  // Before adding any recipes to the database, we sync the models.
  // The { force: true } creates the table, dropping it first if it already existed.
  .then(() => sequelize.sync({ force: true }))
  .then(() => {
    // Run your code here, after you have verified the connection and synced models
  })
  .catch((err) => console.error("Something went wrong:", err));
