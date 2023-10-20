const database = require("../../../infra/db");
const User = require("../../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

export default async function POST(req, res) {
  if (req.method === "POST") {
    await database.sync();

    const usuario = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!usuario) {
      res.status(400).json({ error: "email" });
      return;
    }

    const senhaCoincide = await bcrypt.compare(req.body.senha, usuario.senha);

    if (!senhaCoincide) {
      res.status(400).json({ error: "senha" });
      return;
    }

    res.status(200).json({ id: usuario.id });
  }
}
