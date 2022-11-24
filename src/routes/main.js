const router = require("express").Router();
const { index, formulario, borrar, next } = require("../controllers/mainController");
const formValidator = require("../validators/formValidator");

router
  .get("/", index)
  .get("/next", next)
  .post("/", formValidator, formulario)
  .get("/borrar", borrar);

module.exports = router;
