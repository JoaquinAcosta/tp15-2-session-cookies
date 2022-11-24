const { validationResult } = require("express-validator");

module.exports = {
  index: (req, res) => {
    return res.render("index");
  },
  next: (req, res) => {
    return res.render("next");
  },
  formulario: (req, res) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      let { nombre, email, colores, recordar, edad } = req.body;

      req.session.user = {
        colores,
        nombre,
        email,
        edad
      };

      if (recordar) {
        res.cookie("colores", req.session.user, {
          maxAge: 1000 * 60 * 60 * 24,
        });
      }

      return res.redirect("/next");
    } else {
      return res.render("index", {
        errors: errors.mapped(),
      });
    }
  },
  borrar: (req, res) => {
    req.session.destroy();
    res.cookie("colores", null, { maxAge: -1 });
    return res.redirect("/");
  },
};
