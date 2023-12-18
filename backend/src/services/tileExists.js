const tables = require("../tables");

const tileExists = async (req, res, next) => {
  const { coordX, coordY } = req.body;

  try {
    const existingTile = await tables.tile.findByCoordinates(coordX, coordY);

    if (!existingTile) {
      return res.status(404).json({ message: "Tile not found" });
    }

    req.tile = existingTile;
    return next();
  } catch (err) {
    return next(err);
  }
};

module.exports = tileExists;
