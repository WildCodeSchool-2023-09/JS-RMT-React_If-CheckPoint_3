const tables = require("../tables");

const tileExists = async (req, res, next) => {
  try {
    // Fetch all boats from the database
    const tile = await tables.tile.readByCoordinates(
      req.body.coord_x,
      req.body.coord_y
    );

    if (tile.length > 0) {
      next();
    } else {
      res.sendStatus(422);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

module.exports = tileExists;
