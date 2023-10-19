import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Layout from "../Layout";
import { useSelector } from "react-redux";
import { useState } from "react";

export default () => {
  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);
  const [campos, setCampos] = useState({
    primeiroNome: currentUser ? currentUser.nome.split(" ")[0] : "",
    sobrenome: currentUser
      ? currentUser.nome.split(" ").slice(1).join(" ")
      : "",
    estadoCivil: currentUser ? currentUser.estadoCivil : "",
    email: currentUser ? currentUser.email : "",
    telefone: currentUser ? currentUser.telefone : "",
    nascidoEm: currentUser ? currentUser.nascidoEm : "",
  });

  function setarCampos(id, valor) {
    setCampos((prev) => ({
      ...prev,
      [id]: valor,
    }));
  }

  return (
    <Layout titulo="Informações Pessoais">
      <TextField
        id="primeiroNome"
        label="Nome"
        variant="standard"
        value={campos.primeiroNome}
        onChange={(e) => setarCampos(e.target.id, e.target.value)}
      />
      <TextField
        id="sobrenome"
        label="Sobrenome"
        variant="standard"
        value={campos.sobrenome}
        onChange={(e) => setarCampos(e.target.id, e.target.value)}
      />
      <FormControl variant="standard" sx={{ minWidth: 200 }}>
        <InputLabel id="inputEstadoCivl">Estado Civil</InputLabel>
        <Select labelId="inputEstadoCivl" id="estadoCivil" label="Estado Civil">
          <MenuItem value="Solteiro">Solteiro</MenuItem>
          <MenuItem value="Casado">Casado</MenuItem>
          <MenuItem value="Outro">Outro</MenuItem>
        </Select>
      </FormControl>
      <TextField
        id="email"
        label="E-mail"
        variant="standard"
        value={campos.primeiroNome}
        onChange={(e) => setarCampos(e.target.id, e.target.value)}
        InputProps={{
          readOnly: true,
        }}
      />
      <TextField
        id="telefone"
        label="Telefone para contato"
        variant="standard"
      />
      <TextField
        id="nascidoEm"
        label="Cidadade natal"
        variant="standard"
        value={campos.primeiroNome}
        onChange={(e) => setarCampos(e.target.id, e.target.value)}
      />
    </Layout>
  );
};
