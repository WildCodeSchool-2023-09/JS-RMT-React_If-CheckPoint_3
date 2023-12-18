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
    const result = await tables.boat.update(req.params.id, req.body.coord_x, req.body.coord_y);

    if (result.affectedRows === 0) {
      // If no rows were affected, the boat with the specified ID was not found
      return res.status(404).send("Bateau non trouvé");
    }

    // Respond with a 204 status for a successful update
    res.status(204).send();
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
}

module.exports = {
  browse,
  edit
};
