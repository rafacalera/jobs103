import { TextField } from "@mui/material";
import Layout from "../Layout";

export default ({ setarCampos, campos }) => {
  return (
    <Layout titulo="Endereço">
      <TextField
        id="cep"
        label="Cep"
        variant="standard"
        type="number"
        value={campos.cep}
        onChange={(e) => setarCampos(e.target.id, e.target.value)}
      />
      <TextField
        id="bairro"
        label="Bairro"
        variant="standard"
        value={campos.bairro}
        onChange={(e) => setarCampos(e.target.id, e.target.value)}
      />
      <TextField
        id="logradouro"
        label="Rua"
        variant="standard"
        value={campos.logradouro}
        onChange={(e) => setarCampos(e.target.id, e.target.value)}
      />
      <TextField
        id="numero"
        label="Número"
        variant="standard"
        type="number"
        value={campos.numero}
        onChange={(e) => setarCampos(e.target.id, e.target.value)}
      />
      <TextField
        id="cidade"
        label="Cidade"
        variant="standard"
        value={campos.cidade}
        onChange={(e) => setarCampos(e.target.id, e.target.value)}
      />
      <TextField
        id="uf"
        label="Estado"
        variant="standard"
        value={campos.uf}
        onChange={(e) => setarCampos(e.target.id, e.target.value)}
      />
      <TextField
        id="complemento"
        label="Complemento"
        variant="standard"
        sx={{ minWidth: 300 }}
        helperText="Não obrigatório"
        value={campos.complemento}
        onChange={(e) => setarCampos(e.target.id, e.target.value)}
      />
    </Layout>
  );
};
