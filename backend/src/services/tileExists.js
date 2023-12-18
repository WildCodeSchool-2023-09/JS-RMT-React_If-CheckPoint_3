/* eslint-disable consistent-return */
/* eslint-disable camelcase */
const tables = require("../tables");

const tileExists = async (req, res) => {
  try {
    const { coord_x, coord_y } = req.body.coord_y;

    const existTile = await tables.tile.find(coord_x, coord_y);
    if (!existTile) {
      return res.status(404);
    }
  } catch (error) {
    console.error(error);
    return res.status(500);
  }
};

module.exports = tileExists;
