const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    // Fetch all boats from the database
    const boats = await tables.boat.readAll();

    // Respond with the boats in JSON format
    res.json(boats);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
const existTile = await tables.tile.find(coord_x, coord_y);

const putBoat = async (req, res) => {
  try {
    const boat = req.params.id;
    const updatedData = req.body;
    const updatedBoat = await tables.boat.update(id, updatedData);
    if (updatedBoat[0][0]) {
      return res.status(404);
    } else {
    const boats = await tables.boat.readAll();
    res.status(204).json(boats[0]);

    } catch (error) {
      console.error(err);
    res.send.status(500);
    }
  }
};

module.exports = {
  browse,
  putBoat,
};
