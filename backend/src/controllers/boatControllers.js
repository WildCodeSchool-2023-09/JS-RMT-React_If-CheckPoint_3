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

const edit = async (req, res, next) => {
  try {
    const boat = await tables.boat.update(
      req.params.id,
      req.body.coord_x,
      req.body.coord_y
    );

    if (boat.affectedRows > 0) {
      res.status(204).send();
    } else {
      res.status(404).send();
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = {
  browse,
  edit,
};
