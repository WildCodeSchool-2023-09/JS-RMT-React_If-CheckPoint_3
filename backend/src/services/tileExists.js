const TileManager = require("../models/TileManager");

const tileExists = async (req, res, next) => {
  const { coordX, coordY } = req.body;

  if (coordX >= 0 && coordX <= 11 && coordY >= 0 && coordY <= 5) {
    next();
  } else {
    res.status(422).json({ error: "Coordonnées invalides" });
  }

  const tileManager = new TileManager();
  const tiles = await tileManager.readByCoordinates(coordX, coordY);

  if (tiles.length === 0) {
    res
      .status(422)
      .json({ error: "Aucune tuile trouvée avec ces coordonnées" });
  } else {
    next();
  }
};

module.exports = tileExists;
