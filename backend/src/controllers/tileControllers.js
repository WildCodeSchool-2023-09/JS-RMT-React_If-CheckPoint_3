const tables = require("../tables");

const browser = async (req, res, next) => {
  try {
    // Fetch all tile from the database
    const tile = await tables.boat.readAll();

    // Respond with the tile in JSON format
    res.json(tile);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

module.exports = {
  browser,
};

module.exports = {};
