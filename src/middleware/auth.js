const authHandler = (req, res, next) => {
  if (!req.headers.apikey) {
    return res.status(400).send({ message: "API Key is not provided" });
  }

  if (req.headers.apikey !== "12345678") {
    return res.status(400).send({ message: "API Key is not valid" });
  }
  next();
};

module.exports = authHandler;
