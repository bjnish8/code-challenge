// handle 404 routes
function handleNotFoundError(req, res, next) {
    next(createError(404, "Resource Not Found"));
  }
  
// handle rest of the errors
function handleErrors(err, req, res, next) {
    err = req.app.get("env") === "development" ? err : {};
    res.status(err.status || 500).json({ message: err.message });
    }

module.exports = {
    handleErrors,
    handleNotFoundError
}