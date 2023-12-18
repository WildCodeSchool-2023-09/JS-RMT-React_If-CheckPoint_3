/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class BoatManager extends AbstractManager {
  constructor() {
    super({ table: "boat" });
  }

  async readAll(where) {
    let query = `select boat.id, tile.id, boat.coord_x, boat.coord_y, boat.name, tile.type, tile.has_treasure from ${this.table} inner join tile on boat.coord_x = tile.coord_x and boat.coord_y = tile.coord_y`;
    const value = [];

    if (where && where.name) {
      query += " where name = ?";
      value.push(where.name);
    }

    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    const [rows] = await this.database.query(query, value);

    // Return the array of boats
    return rows;
  }

  async update(id, coord_x, coord_y) {
    const [rows] = await this.database.query(
      `UPDATE ${this.table} SET coord_x = ?, coord_y = ? WHERE id = ?`,
      [coord_x, coord_y, id]
    );
    return rows;
  }
}

module.exports = BoatManager;
