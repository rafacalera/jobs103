const database = require("../../../infra/db");
const User = require("../../../models/user");
import verifyJWT from "../middleware";

export async function getInfos(req, res) {
  const userId = req.id;
  if (req.method === "GET") {
    await database.sync();
    const usuario = await User.findByPk(userId, {
      attributes: { exclude: ["senha", "createdAt", "updatedAt"] },
    });

    usuario
      ? res.status(200).json(usuario)
      : res.status(400).send("User not found");
    return;
  }
  res.status(400).send("Method not allowed");
}

export const config = {
  api: {
    bodyParser: false,
  },
};

export default verifyJWT(getInfos);
