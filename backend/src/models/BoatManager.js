const AbstractManager = require("./AbstractManager");

class BoatManager extends AbstractManager {
  constructor() {
    super({ table: "boat" });
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all boats from the "boat" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of boats
    return rows;
  }

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific boat from the "boat" table
    const [rows] = await this.database.query(`SELECT * FROM ${this.table} WHERE id = ?`, [id]);

    // Check if a boat with the specified ID was found
    if (rows.length === 0) {
      return null;
    }

    // Return the first (and should be the only) row
    return rows[0];
  }

  async update(id, coordX, coordY) {

    // Execute the SQL UPDATE query to update a specific boat in the "boat" table
    const [result] = await this.database.query(
      `UPDATE ${this.table} SET coord_x = ?, coord_y = ? WHERE id = ?`,
      [coordX, coordY, id]
    );

    if (result.affectedRows === 0) {
      return { affectedRows: 0, success: false };
    }

    return { affectedRows: result.affectedRows, success: true };
  }
}

module.exports = BoatManager;
