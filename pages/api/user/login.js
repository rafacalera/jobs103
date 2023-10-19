require("dotenv/config");
const database = require("../../../infra/db");
const User = require("../../../models/user");
const jwt = require("jsonwebtoken");

export default async function POST(req, res) {
  if (req.method === "POST") {
    await database.sync();

    const usuario = await User.findOne({
      where: {
        email: req.body.email,
        senha: req.body.senha,
      },
    });

    if (!usuario) {
      res.status(400).send("User not found");
      return;
    }

    res.status(200).json({ id: usuario.id });
  }
}
