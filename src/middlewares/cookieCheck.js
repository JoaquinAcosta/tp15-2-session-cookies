module.exports = (req, res, next) => {
  if (req.cookies.colores) {
    req.session.user = req.cookies.colores;
  }
  next();
};
