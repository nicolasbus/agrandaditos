const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;
    if (authHeader) {
      const token = authHeader.split(" ")[1];
      jwt.verify(token, "123", (err, user) => {
        if (err) res.status(403).json("El token es incorrecto!");
        req.user = user;
        next();
      });
    } else {
      return res.status(401).json("Debes autenticarte!");
    }
  };
  
  const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
      if (req.user.id === req.params.id || req.user.isAdmin) {
        next();
      } else {
        res.status(403).json("No puedes hacer eso!");
      }
    });
  };

  const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
      if (req.user.isAdmin) {
        next();
      } else {
        res.status(403).json("No puedes hacer eso!");
      }
    });
  };
  
module.exports = {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin}