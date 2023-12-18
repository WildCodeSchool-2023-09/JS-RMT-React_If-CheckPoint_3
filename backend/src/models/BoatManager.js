const AbstractManager = require("./AbstractManager");

class BoatManager extends AbstractManager {
  constructor() {
    super({ table: "boat" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    const [rows] = await this.database.query(
      `select boat.id, boat.name, boat.coord_x, boat.coord_y, tile.type, tile.has_treasure from ${this.table} inner join tile on boat.coord_x = tile.coord_x and boat.coord_y = tile.coord_y`
    );

    // Return the array of boats
    return rows;
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
