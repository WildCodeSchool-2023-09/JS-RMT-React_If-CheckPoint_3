const AbstractManager = require("./AbstractManager");

class BoatManager extends AbstractManager {
  constructor() {
    super({ table: "boat" });
  }

  async readAll(where) {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    let rows;
    if (where && where.name) {
      [rows] = await this.database.query(
        `select boat.id, boat.name, boat.coord_x, boat.coord_y, tile.type, tile.coord_x, tile.coord_y, tile.has_treasure from ${this.table} JOIN tile ON boat.coord_x = tile.coord_x AND boat.coord_y = tile.coord_y WHERE boat.name = ?`,
        [where.name]
      );
    } else {
      [rows] = await this.database.query(
        `select boat.id, boat.name, boat.coord_x, boat.coord_y, tile.type, tile.coord_x, tile.coord_y, tile.has_treasure from ${this.table} JOIN tile ON boat.coord_x = tile.coord_x AND boat.coord_y = tile.coord_y`
      );
    }
    // Return the array of boats
    return rows;
  }

  async update(id, coordX, coordY) {
    const [rows] = await this.database.query(
      "UPDATE boat SET coord_x=?, coord_y=? where id=?",
      [coordX, coordY, id]
    );
    return rows;
  }
}

module.exports = BoatManager;
