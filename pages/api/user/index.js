const database = require("../../../infra/db");
const User = require("../../../models/user");

export default async function post(req, res) {
  if (req.method === "GET") {
    await database.sync();
    // READ
    const usuarios = await User.findAll();

    //console.log(usuarios);
    res.status(200).send(usuarios);
  }
}
