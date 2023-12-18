const express = require("express");
const router = express.Router();
const boatControllers = require("./controllers/boatControllers");
const gameControllers = require("./controllers/gameControllers");
const tileControllers = require("./controllers/tileControllers");

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Boat Routes
router.get("/boats", boatControllers.browse);
router.put("/boats/:id", boatControllers.edit);


// Game Routes
router.post("/games", gameControllers.add);

// Tile Routes
router.get("/tiles", tileControllers.browse);

/* ************************************************************************* */

module.exports = router;
