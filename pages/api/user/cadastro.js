const database = require("../../../infra/db");
const User = require("../../../models/user");

export default async function POST(req, res) {
  if (req.method === "POST") {
    await database.sync();
    const requisicao = req.body;

    const emailCadastrado = await User.findOne({
      where: {
        email: requisicao.email,
      },
    });

    if (!emailCadastrado) {
      const novoUser = await User.create({
        nome: requisicao.nome,
        email: requisicao.email,
        senha: requisicao.senha,
        dataNascimento: requisicao.dataNascimento,

        genero: requisicao.genero,

        cep: requisicao.cep,
        logradouro: requisicao.logradouro,
        bairro: requisicao.bairro,
        numero: requisicao.numero,
        uf: requisicao.uf,
        cidade: requisicao.cidade,
        complemento: requisicao.complemento,
        telefone: requisicao.telefone,
        nascidoEm: requisicao.nascidoEm,
        estadoCivil: requisicao.estadoCivil,
      });
      res.status(201).json({ id: novoUser.id });
      return;
    }
    res.status(400).send("Email in use");
  }
}
