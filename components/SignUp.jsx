import Copyright from "./Copyright";
import EnderecoControllers from "./EnderecoControllers";
import PersonalDataControllers from "./PersonalDataControllers";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

// To Do - Extract this component and validate address when submit
// Mask the CEP Textfield
// Validate address before submit

export default function SignUp(props) {
  const [submitStage, setSubmitStage] = useState(false);

  const submitController = {
    submitStage: submitStage, setSubmitStage: setSubmitStage
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    let date = birthDateValue.$d;
    let ano = date.getFullYear();
    let mes = (date.getMonth() + 1).toString().padStart(2, "0");
    let dia = date.getDate().toString().padStart(2, "0");

    formData.append("birthDate", `${ano}-${mes}-${dia}`);
    console.log({
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      birthDate: formData.get("birthDate"),
      gender: formData.get("gender"),
      email: formData.get("email"),
      password: formData.get("password"),
    });
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
          <PersonalDataControllers submitController={submitController} />
          <EnderecoControllers submitController={submitController} />

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
