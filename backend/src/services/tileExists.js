const tables = require("../tables");

const tileExists = async (req, res, next) => {
  const { coordX, coordY } = req.body;

  if (Number.isNaN(Number(coordX)) || Number.isNaN(Number(coordY))) {
    res.sendStatus(422);
  } else {
    try {
      const existingTile = await tables.tile.readByCoordinates(coordX, coordY);

      if (!existingTile) {
        res.status(404).json({ message: "Tile not found" });
      } else {
        req.tile = existingTile;
        next();
      }
    } catch (err) {
      next(err);
    }
  }
};

module.exports = tileExists;
