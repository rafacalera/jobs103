const User = require("../../../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

export default async function handlePasswordChange(req, res) {
  if (req.method !== "PATCH")
    return res.status(405).json({ message: "Método não permitido" });

  const { token } = req.query;
  const saltRounds = 10;
  const hashedSenha = await bcrypt.hash(req.body.senha, saltRounds);

  try {
    const decoded = jwt.verify(token, process.env.API_SECRET);
    var userId = decoded.id;
  } catch (err) {
    if (err instanceof jwt.TokenExpiredError) {
      return res.status(401).send("Token expired");
    }
    return res.status(401).send("Unauthorized");
  }

  const user = await User.findByPk(userId);
  if (!user) return res.status(404).send("Usuário não encontrado");

  try {
    user.senha = hashedSenha;
    await user.save();
    return res.status(200).send("Senha alterada com sucesso");
  } catch (err) {
    console.log(err);
    return res.status(500).send("Ocorreu um erro ao alterar a senha");
  }
}
