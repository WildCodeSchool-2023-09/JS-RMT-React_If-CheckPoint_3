const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const boatControllers = require("./controllers/boatControllers");
const tileExists = require("./services/tileExists");

router.get("/boats", boatControllers.browse);
router.put("/boats/:id", tileExists, boatControllers.edit);

const gameControllers = require("./controllers/gameControllers");

router.post("/games", gameControllers.add);

const titleControllers = require("./controllers/tileControllers");

router.get("/tiles", titleControllers.browse);
/* ************************************************************************* */

module.exports = router;
