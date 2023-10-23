const database = require("../../../infra/db");
const User = require("../../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

export default async function postLogin(req, res) {
  if (req.method === "POST") {
    await database.sync();

    const usuario = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!usuario) {
      res.status(401).json({ error: "email" });
      return;
    }

    const senhaCoincide = await bcrypt.compare(req.body.senha, usuario.senha);

    if (!senhaCoincide) {
      res.status(401).json({ error: "senha" });
      return;
    }

    const token = jwt.sign({ id: usuario.id }, process.env.API_SECRET, {
      expiresIn: 60 * 60,
    });
    return res.status(200).json({ auth: true, token });
  }
  res.status(400).send("Method not allowed");
}
