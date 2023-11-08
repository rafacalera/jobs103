const User = require("../../../../models/user");
const sendEmail = require("../../../../helpers/utils/email");
const jwt = require("jsonwebtoken");

export default async function handlerPasswordRecovery(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ message: "Método não permitido" });

  const user = await User.findOne({
    where: { email: req.body.email },
  });

  if (!user) return res.status(404).send("Usuário não encontrado");

  const token = jwt.sign({ id: user.id }, process.env.API_SECRET, {
    expiresIn: 10 * 60,
  });

  const resetUrl = `http://${req.headers.host}/api/user/recuperar-senha/${token}`;

  try {
    await sendEmail({
      to: user.email,
      subject: "Recuperação de senha",
      message: `Olá ${user.nome}, clique no link para recuperar sua senha: \n\n${resetUrl}\n\nEste link será valido por somente 10 minutos.`,
    });
    return res
      .status(200)
      .send("Um email foi enviado para você com as instruções");
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .send("Ocorreu um erro ao enviar o email, tente novamente mais tarde");
  }
}
