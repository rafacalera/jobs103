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
        value={currentUser ? currentUser.address.cep : undefined}
      />
      <TextField
        id="bairro"
        label="Bairro"
        variant="standard"
        value={currentUser ? currentUser.address.bairro : undefined}
      />
      <TextField
        id="logradouro"
        label="Rua"
        variant="standard"
        value={currentUser ? currentUser.address.logradouro : undefined}
      />
      <TextField
        id="numero"
        label="Número"
        variant="standard"
        type="number"
        value={currentUser ? currentUser.address.numero : undefined}
      />
      <TextField
        id="cidade"
        label="Cidade"
        variant="standard"
        value={currentUser ? currentUser.address.cidade : undefined}
      />
      <TextField
        id="estado"
        label="Estado"
        variant="standard"
        value={currentUser ? currentUser.address.estado : undefined}
      />
      <TextField
        id="complemento"
        label="Complemento"
        variant="standard"
        sx={{ minWidth: 300 }}
        helperText="Não obrigatório"
        value={currentUser ? currentUser.address.complemento : undefined}
      />
    </Layout>
  );
};
