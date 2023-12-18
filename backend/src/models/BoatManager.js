const AbstractManager = require("./AbstractManager");

class BoatManager extends AbstractManager {
  constructor() {
    super({ table: "boat" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all boats with tile information
    const [rows] = await this.database.query(`
      SELECT boat.id as boat_id, boat.name, boat.coord_x, boat.coord_y, tile.id as tile_id, tile.type, tile.coord_x as tile_coord_x, tile.coord_y as tile_coord_y, tile.has_treasure
      FROM ${this.table} AS boat
      JOIN tile ON boat.tile_id = tile.id
    `);

    // Return the array of boats with tile information
    return rows;
  }

  async update(id, coordX, coordY) {
    // Execute the SQL UPDATE query to update the coordinates of a boat in the "boat" table
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET coord_x = ?, coord_y = ? WHERE id = ?`,
      [coordX, coordY, id]
    );

    // Return the number of affected rows
    return { affectedRows: result.affectedRows };
  }
}

module.exports = BoatManager;
