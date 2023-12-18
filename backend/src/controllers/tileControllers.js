const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    // Fetch all titles from the database
    const titles = await tables.tile.readAll();

    // Respond with the titles in JSON format
    res.status(200).json(titles);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

module.exports = {
  browse,
};
