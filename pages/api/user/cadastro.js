const database = require("../../../infra/db");
const User = require("../../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

export default async function POST(req, res) {
  if (req.method === "POST") {
    await database.sync();
    const requisicao = req.body;
    const saltRounds = 10;
    const hashedSenha = await bcrypt.hash(requisicao.senha, saltRounds);

    const emailCadastrado = await User.findOne({
      where: {
        email: requisicao.email,
      },
    });

    if (!emailCadastrado) {
      const novoUser = await User.create({
        nome: requisicao.nome,
        email: requisicao.email,

        senha: hashedSenha,
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
      const token = jwt.sign({ id: novoUser.id }, process.env.API_SECRET, {
        expiresIn: 30 * 60,
      });
      res.status(201).json({ auth: true, token });
      return;
    }
    res.status(400).json({ error: "email" });
  }
}
