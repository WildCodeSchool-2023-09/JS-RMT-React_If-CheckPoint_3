const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const boatControllers = require("./controllers/boatControllers");

router.get("/boats", boatControllers.browse);

router.put("/boats/:id", boatControllers.updateById);

const gameControllers = require("./controllers/gameControllers");

router.post("/games", gameControllers.add);

const albumControllers = require("./controllers/albumControllers");

router.get("/album", albumControllers.browse);

const tileControllers = require("./controllers/tileControllers");

router.get("/tiles", tileControllers.browse);

/* ************************************************************************* */

module.exports = router;
