import jwt from "jsonwebtoken";

export default function verifyJWT(handler) {
  return async (req, res) => {
    const token = req.headers["x-access-token"];
    try {
      const decoded = jwt.verify(token, process.env.API_SECRET);
      req.id = decoded.id;
      return handler(req, res);
    } catch (err) {
      if (err instanceof jwt.TokenExpiredError) {
        return res.status(401).send("Token expired");
      }
      return res.status(401).send("Unauthorized");
    }
  };
}
