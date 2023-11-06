import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

import handleEstagio from "../../../helpers/handlers/handleEstagio";

export default ({
  submitController,
  setPessoal,
  pessoal,
  setPessoalError,
  pessoalError,
}) => {
  return (
    <>
      <Grid
        container
        spacing={2}
        style={submitController.submitStage ? { display: "none" } : {}}
      >
        <Grid item xs={12} sm={6}>
          <TextField
            error={
              pessoalError.primeiroNomeError &&
              pessoalError.primeiroNomeError.length
                ? true
                : false
            }
            autoComplete="given-name"
            name="primeiroNome"
            required
            fullWidth
            id="primeiroNome"
            label="Primeiro Nome"
            value={pessoal.primeiroNome}
            onChange={(event) => {
              setPessoal((prev) => ({
                ...prev,
                primeiroNome: event.target.value,
              }));
            }}
            autoFocus
            helperText={pessoalError.primeiroNomeError}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            error={
              pessoalError.ultimoNomeError &&
              pessoalError.ultimoNomeError.length
                ? true
                : false
            }
            required
            fullWidth
            id="ultimoNome"
            label="Sobrenome"
            name="ultimoNome"
            value={pessoal.ultimoNome}
            onChange={(event) => {
              setPessoal((prev) => ({
                ...prev,
                ultimoNome: event.target.value,
              }));
            }}
            autoComplete="family-name"
            helperText={pessoalError.ultimoNomeError}
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <DatePicker
            required
            id="nascimento"
            sx={{ width: "100%" }}
            label="Data de nascimento"
            name="nascimento"
            value={pessoal.nascimento}
            onChange={(newValue) => {
              setPessoal((prev) => ({
                ...prev,
                nascimento: newValue,
              }));
            }}
            disableFuture
            slotProps={{
              textField: {
                helperText: pessoalError.nascimentoError,
              },
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            error={
              pessoalError.generoError && pessoalError.generoError.length
                ? true
                : false
            }
            required
            id="genero"
            name="genero"
            label="Gênero"
            value={pessoal.genero}
            onChange={(event) => {
              setPessoal((prev) => ({
                ...prev,
                genero: event.target.value,
              }));
            }}
            select
            fullWidth
            helperText={pessoalError.generoError}
          >
            <MenuItem value="Masculino">Masculino</MenuItem>
            <MenuItem value="Feminino">Feminino</MenuItem>
            <MenuItem value="Outro">Outro</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            error={
              pessoalError.emailError && pessoalError.emailError.length
                ? true
                : false
            }
            required
            fullWidth
            id="email"
            label="Seu E-mail"
            name="email"
            value={pessoal.email}
            onChange={(event) => {
              setPessoal((prev) => ({
                ...prev,
                email: event.target.value,
              }));
            }}
            autoComplete="email"
            helperText={pessoalError.emailError}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            error={
              pessoalError.senhaError && pessoalError.senhaError.length
                ? true
                : false
            }
            required
            fullWidth
            name="senha"
            label="Sua senha"
            type="password"
            id="senha"
            value={pessoal.senha}
            onChange={(event) => {
              setPessoal((prev) => ({
                ...prev,
                senha: event.target.value,
              }));
            }}
            autoComplete="new-password"
            helperText={pessoalError.senhaError}
          />
        </Grid>
      </Grid>
      <Button
        onClick={(e) =>
          handleEstagio(
            e,
            setPessoalError,
            pessoal,
            submitController.setSubmitStage,
          )
        }
        style={submitController.submitStage ? { display: "none" } : {}}
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Próximo
      </Button>
    </>
  );
};
