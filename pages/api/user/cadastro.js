const database = require("../../../infra/db");
const User = require("../../../models/user");
export default async function post(req, res) {
  if (req.method === "GET") {
    await database.sync();

    // CREATE
    const novoUser = await User.create({
      nome: "Rafael Calera",
      email: "rafa_calera@hotmail.com",
      senha: "123456",
      dataNascimento: "2004-02-16",

      genero: "Masculino",

      cep: 15991290,
      logradouro: "Rua Aldo Aldano Botura",
      bairro: "Park Imperador",
      numero: 1830,
      uf: "SP",
      cidade: "Matao",
      complemento: "Pertinho",
      nascidoEm: "Matão",
      estadoCivil: "Solteiro",
    });

    console.log(novoUser);
    res.send(201);
  }
}
