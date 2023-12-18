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

const update = async (req, res) => {
  const { id } = req.params;
  const { coordX, coordY } = req.body;

  try {
    await tables.boat.update(
      "UPDATE boat SET coord_x=?, coord_y=? WHERE id=?",
      [coordX, coordY, id]
    );

    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.sendStatus(404);
  }
};

const edit = async (req, res, next) => {
  const { id, coordX, coordY } = req.body;

  try {
    await tables.boat.update(
      "UPDATE boat SET coord_x=?, coord_y=? WHERE id=?",
      [coordX, coordY, id]
    );
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  update,
  edit,
};
