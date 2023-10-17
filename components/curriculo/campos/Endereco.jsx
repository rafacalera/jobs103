import { TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import Layout from "../Layout";

export default ({ currentUser }) => {
  return (
    <Layout titulo="Endereço">
      <TextField
        id="cep"
        label="Cep"
        variant="standard"
        type="number"
        value={currentUser ? currentUser.address.cep : null}
      />
      <TextField
        id="bairro"
        label="Bairro"
        variant="standard"
        value={currentUser ? currentUser.address.bairro : ""}
      />
      <TextField
        id="logradouro"
        label="Rua"
        variant="standard"
        value={currentUser ? currentUser.address.logradouro : ""}
      />
      <TextField
        id="numero"
        label="Número"
        variant="standard"
        type="number"
        value={currentUser ? currentUser.address.numero : null}
      />
      <TextField
        id="cidade"
        label="Cidade"
        variant="standard"
        value={currentUser ? currentUser.address.cidade : ""}
      />
      <TextField
        id="estado"
        label="Estado"
        variant="standard"
        value={currentUser ? currentUser.address.estado : ""}
      />
      <TextField
        id="complemento"
        label="Complemento"
        variant="standard"
        sx={{ minWidth: 300 }}
        helperText="Não obrigatório"
        value={currentUser ? currentUser.address.complemento : ""}
      />
    </Layout>
  );
};
