const AbstractManager = require("./AbstractManager");

class BoatManager extends AbstractManager {
  constructor() {
    super({ table: "boat" });
  }

  async readAll(where) {
    let query = `
      SELECT boat.id, boat.coord_x, boat.coord_y, boat.name, tile.type, tile.has_treasure
      FROM boat
      INNER JOIN tile ON boat.coord_x = tile.coord_x AND boat.coord_y = tile.coord_y
    `;
    const value = [];

    if (where) {
      query += ` WHERE name = ?`;
      value.push(where.name);
    }

    try {
      const [rows] = await this.database.query(query, value);
      return rows;
    } catch (error) {
      throw new Error(`Failed to retrieve boats: ${error.message}`);
    }
  }

  async update(id, coordX, coordY) {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    const [boat] = await this.database.query(
      `update ${this.table} set coord_x = ?, coord_y = ? where id = ?`,
      [coordX, coordY, id]
    );

    // Return the array of boats
    return boat;
  }
}

module.exports = BoatManager;
