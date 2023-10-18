import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Layout from "../Layout";

export default ({ currentUser }) => {
  return (
    <Layout titulo="Informações Pessoais">
      <TextField
        id="nome"
        label="Nome"
        variant="standard"
        value={currentUser ? currentUser.personalInfos.primeiroNome : undefined}
      />
      <TextField
        id="sobrenome"
        label="Sobrenome"
        variant="standard"
        value={currentUser ? currentUser.personalInfos.ultimoNome : undefined}
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
        value={currentUser ? currentUser.personalInfos.email : undefined}
        InputProps={{
          readOnly: true,
        }}
      />
      <TextField
        id="telefone"
        label="Telefone para contato"
        variant="standard"
      />
      <TextField id="nascidoEm" label="Nascido em" variant="standard" />
    </Layout>
  );
};
