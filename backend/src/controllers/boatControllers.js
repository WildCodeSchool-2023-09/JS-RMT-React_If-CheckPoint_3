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

// eslint-disable-next-line consistent-return
const updateById = async (req, res, next) => {
  const { id } = req.params;
  const { coordX, coordY } = req.body;
  try {
    const boat = await tables.boat.readById(id);

    if (!boat) {
      return res.status(404).json({ message: "Boat not found" });
    }

    await tables.boat.updateCoordinates(id, coordX, coordY);

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

// eslint-disable-next-line no-unused-vars
const edit = async () => {};

module.exports = {
  browse,
  updateById,
  edit,
};
