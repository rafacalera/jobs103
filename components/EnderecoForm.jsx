import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

export default (props) => {
  const endereco = props.enderecoController.endereco;
  const setEndereco = props.enderecoController.setEndereco;
  const enderecoError = props.enderecoController.enderecoError;
  const setEnderecoError = props.enderecoController.setEnderecoError;

  const checarCep = async (e) => {
    const eventCep = e.target.value.replace(/\D/g, '')

    setEnderecoError(prev => ({
      ...prev,
      cep: ""
    }))

    if (eventCep.trim() == "") {
      return false
    }

    fetch(`https://viacep.com.br/ws/${eventCep}/json/`)
      .then(res => res.json())
      .then(data => {
        setEndereco(prev => ({
          ...prev,
          logradouro: data.logradouro,
          bairro: data.bairro,
          cidade: data.localidade,
          estado: data.uf,
          complemento: data.complemento
        }))
      })
      .catch(() => {
        setEnderecoError(prev => ({
          ...prev,
          cep: "Cep Inválido"
        }))
        setEndereco(prev => ({
          ...prev,
          logradouro: "",
          bairro: "",
          cidade: "",
          estado: "",
          complemento: ""
        }))
      });
  }

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
          value={endereco.cep}
          onChange={(event) => {
            setEndereco((prev) => ({
              ...prev,
              cep: event.target.value,
            }));
          }}
          onBlur={checarCep}
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
          fullWidth
          id="estado"
          label="Estado"
          name="estado"
          value={endereco.estado}
          onChange={(event) => {
            setEndereco((prev) => ({
              ...prev,
              estado: event.target.value,
            }));
          }}
          helperText={enderecoError.estado}
        />
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
