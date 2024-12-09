const express = require("express"); // Import Express
const router = express.Router();
const {
  homeFunction,
  homeFunction2,
} = require("../controllers/home.controller");
router.get("/", homeFunction);
router.get("/asd", homeFunction2);

module.exports = router;
