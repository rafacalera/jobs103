import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { MenuItem } from "@mui/material";
import checarCep from "./checarCep";

export default (props) => {
  const endereco = props.enderecoController.endereco;
  const setEndereco = props.enderecoController.setEndereco;
  const enderecoError = props.enderecoController.enderecoError;
  const setEnderecoError = props.enderecoController.setEnderecoError;

  const estados = [
    { nome: "Acre", sigla: "AC" },
    { nome: "Alagoas", sigla: "AL" },
    { nome: "Amapá", sigla: "AP" },
    { nome: "Amazonas", sigla: "AM" },
    { nome: "Bahia", sigla: "BA" },
    { nome: "Ceará", sigla: "CE" },
    { nome: "Distrito Federal", sigla: "DF" },
    { nome: "Espírito Santo", sigla: "ES" },
    { nome: "Goiás", sigla: "GO" },
    { nome: "Maranhão", sigla: "MA" },
    { nome: "Mato Grosso", sigla: "MT" },
    { nome: "Mato Grosso do Sul", sigla: "MS" },
    { nome: "Minas Gerais", sigla: "MG" },
    { nome: "Pará", sigla: "PA" },
    { nome: "Paraíba", sigla: "PB" },
    { nome: "Paraná", sigla: "PR" },
    { nome: "Pernambuco", sigla: "PE" },
    { nome: "Piauí", sigla: "PI" },
    { nome: "Rio de Janeiro", sigla: "RJ" },
    { nome: "Rio Grande do Norte", sigla: "RN" },
    { nome: "Rio Grande do Sul", sigla: "RS" },
    { nome: "Rondônia", sigla: "RO" },
    { nome: "Roraima", sigla: "RR" },
    { nome: "Santa Catarina", sigla: "SC" },
    { nome: "São Paulo", sigla: "SP" },
    { nome: "Sergipe", sigla: "SE" },
    { nome: "Tocantins", sigla: "TO" },
  ];

  return (
    <Grid
      container
      spacing={2}
      style={props.submitController.submitStage ? {} : { display: "none" }}
    >
      <Grid item xs={12} sm={4}>
        <TextField
          error={enderecoError.cep && enderecoError.cep.length ? true : false}
          required
          fullWidth
          id="cep"
          label="CEP"
          name="cep"
          type="number"
          value={endereco.cep}
          onChange={(event) => {
            setEndereco((prev) => ({
              ...prev,
              cep: event.target.value,
            }));
          }}
          onBlur={(e) => checarCep(e, setEndereco, setEnderecoError)}
          helperText={enderecoError.cep}
        />
      </Grid>
      <Grid item xs={12} sm={8}>
        <TextField
          error={
            enderecoError.bairro && enderecoError.bairro.length ? true : false
          }
          required
          fullWidth
          id="bairro"
          label="Bairro"
          name="bairro"
          value={endereco.bairro}
          onChange={(event) => {
            setEndereco((prev) => ({
              ...prev,
              bairro: event.target.value,
            }));
          }}
          helperText={enderecoError.bairro}
        />
      </Grid>
      <Grid item xs={12} sm={8}>
        <TextField
          error={
            enderecoError.logradouro && enderecoError.logradouro.length
              ? true
              : false
          }
          required
          fullWidth
          id="logradouro"
          label="Rua"
          name="logradouro"
          value={endereco.logradouro}
          onChange={(event) => {
            setEndereco((prev) => ({
              ...prev,
              logradouro: event.target.value,
            }));
          }}
          helperText={enderecoError.logradouro}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          error={
            enderecoError.numero && enderecoError.numero.length ? true : false
          }
          required
          fullWidth
          id="numero"
          label="Número"
          name="numero"
          type="number"
          value={endereco.numero}
          onChange={(event) => {
            setEndereco((prev) => ({
              ...prev,
              numero: event.target.value,
            }));
          }}
          helperText={enderecoError.numero}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          error={
            enderecoError.cidade && enderecoError.cidade.length ? true : false
          }
          required
          fullWidth
          id="cidade"
          label="Cidade"
          name="cidade"
          value={endereco.cidade}
          onChange={(event) => {
            setEndereco((prev) => ({
              ...prev,
              cidade: event.target.value,
            }));
          }}
          helperText={enderecoError.cidade}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          error={
            enderecoError.estado && enderecoError.estado.length ? true : false
          }
          required
          id="estado"
          name="estado"
          label="Estado"
          value={endereco.estado}
          onChange={(event) => {
            setEndereco((prev) => ({
              ...prev,
              estado: event.target.value,
            }));
          }}
          select
          fullWidth
          helperText={enderecoError.estado}
        >
          {estados.map((estado) => {
            return <MenuItem value={estado.sigla}>{estado.sigla}</MenuItem>;
          })}
        </TextField>
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          id="complemento"
          label="Complemento"
          name="complemento"
          value={endereco.complemento}
          onChange={(event) => {
            setEndereco((prev) => ({
              ...prev,
              complemento: event.target.value,
            }));
          }}
        />
      </Grid>
    </Grid>
  );
};
