const database = require("../../../infra/db");
const User = require("../../../models/user");

export default async function post(req, res) {
  const userId = req.query.id;
  if (req.method === "GET") {
    await database.sync();
    // READ
    const usuario = await User.findByPk(userId, {
      attributes: { exclude: ["senha", "createdAt", "updatedAt"] },
    });

    usuario
      ? res.status(200).json(usuario)
      : res.status(400).send("User not found");
    return;
  }
}
