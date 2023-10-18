const database = require("../../../infra/db");
const User = require("../../../models/user");

export default async function post(req, res) {
  const userId = req.query.id;
  if (req.method === "GET") {
    await database.sync();
    // READ
    const usuario = await User.findByPk(userId);

    usuario
      ? res.status(200).send(usuario)
      : res.status(400).send("User not found");
  }

  // FILTER SELECT
  //   const usuario = await User.findAll({
  //     where: {
  //       nome: "Rafael",
  //     },
  //   });

  // Update
  //   const usuario = await User.findByPk(userId);
  //   usuario.nome = "Claudio";
  //   await usuario.save();

  // DELETE
  // const usuario = await User.findByPk(userId);
  //   await usuario.destroy();
  // OU
  // await Usuario.destroy({where:{id: [id]}})
}
