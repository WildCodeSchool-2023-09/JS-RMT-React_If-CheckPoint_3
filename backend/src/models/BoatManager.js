const AbstractManager = require("./AbstractManager");

class BoatManager extends AbstractManager {
  constructor() {
    super({ table: "boat" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    const [rows] = await this.database.query(`
        SELECT boat.id, boat.coord_x, boat.coord_y, boat.name, tile.type, tile.has_treasure
        FROM boat
        JOIN tile ON boat.coord_x = tile.coord_x AND boat.coord_y = tile.coord_y
      `);

    // Return the array of boats
    return rows;
  }

  async update(id, coordX, coordY) {
    try {
      const result = await this.database.query(
        "UPDATE boat SET coord_x = ?, coord_y = ? WHERE id = ?",
        [coordX, coordY, id]
      );

      return { affectedRows: result[0].affectedRows };
    } catch (error) {
      throw new Error(`Failed to update boat: ${error.message}`);
    }
  }
}

module.exports = BoatManager;
