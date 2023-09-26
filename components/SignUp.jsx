import Copyright from "./Copyright";
import EnderecoHandler from "./EnderecoHandler";
import PessoalHandler from "./PessoalHandler";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

// To Do - Extract Components
// Mask the CEP Textfield
// Validate address before submit

export default function SignUp(props) {
  const submitStage = props.submitController.submitStage;
  const setSubmitStage = props.submitController.setSubmitStage;

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    let date = new Date(localStorage.nascimento);
    let ano = date.getFullYear();
    let mes = (date.getMonth() + 1).toString().padStart(2, "0");
    let dia = date.getDate().toString().padStart(2, "0");

    formData.append("nascimento", `${ano}-${mes}-${dia}`);
    console.log({
      primeiroNome: formData.get("primeiroNome"),
      ultimoNome: formData.get("ultimoNome"),
      nascimento: formData.get("nascimento"),
      genero: formData.get("genero"),
      email: formData.get("email"),
      senha: formData.get("senha"),
      cep: formData.get("cep"),
      bairro: formData.get("bairro"),
      logradouro: formData.get("logradouro"),
      numero: formData.get("numero"),
      cidade: formData.get("cidade"),
      estado: formData.get("estado"),
      complemento: formData.get("complemento"),
    });
    localStorage.clear();
  };

  return (
    <Container
      style={props.menuController.isOpen ? { display: "none" } : {}}
      component="main"
      maxWidth="xs"
    >
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Cadastre-se
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <PessoalHandler submitController={props.submitController} />
          <EnderecoHandler submitController={props.submitController} />

          <Grid container justifyContent="space-between">
            <Grid item>
              <Button
                onClick={() => setSubmitStage(false)}
                style={submitStage ? {} : { display: "none" }}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Voltar
              </Button>
            </Grid>
            <Grid item>
              <Button
                type="submit"
                style={submitStage ? {} : { display: "none" }}
                fullWidth
                variant="contained"
                disabled={submitStage ? false : true}
                sx={{ mt: 3, mb: 2 }}
              >
                Cadastrar
              </Button>
            </Grid>
          </Grid>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Ja tem uma conta? Faça o Login
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}
