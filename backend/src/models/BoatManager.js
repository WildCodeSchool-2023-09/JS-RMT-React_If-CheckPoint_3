const AbstractManager = require("./AbstractManager");

class BoatManager extends AbstractManager {
  constructor() {
    super({ table: "boat" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    const url = `select boat.id, tile.id, boat.coord_x, boat.coord_y, boat.name, tile.type, tile.has_treasure from ${this.table} INNER JOIN tile`;

    const [rows] = await this.database.query(url);

    // Return the array of boats
    return rows;
  }

  async update(id, coordX, coordY) {
    const [result] = await this.database.query(
      `update ${this.table} SET coord_x = ?, coord_y = ? WHERE id = ?`,
      [coordX, coordY, id]
    );

    return result;
  }
}

module.exports = BoatManager;
