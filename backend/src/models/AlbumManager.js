const AbstractManager = require("./AbstractManager");

class AlbumManager extends AbstractManager {
  constructor() {
    super({ table: "albums" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of boats
    return rows;
  }
}

module.exports = AlbumManager;
