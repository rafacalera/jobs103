import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import dayjs from "dayjs";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        Jobs-103
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignUp(props) {
  const [fNameError, setFNameError] = useState("");
  const [lNameError, setLNameError] = useState("");

  const [birthDateValue, setBirthDate] = useState(null);
  const [birthError, setBirthError] = useState("");

  const [genderError, setGenderError] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");



  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if (!data.get("firstName") || !data.get("firstName").trim().length) {
      setFNameError("É preciso um Nome para continuar")
      return false
    }
    else {
      setFNameError("")
    }

    if (!data.get("lastName") || !data.get("lastName").trim().length) {
      setLNameError("É preciso um Sobrenome para continuar")
      return false
    }
    else {
      setLNameError("")
    }

    if (birthDateValue === null || isNaN(birthDateValue.$D) || isNaN(birthDateValue.$M) || isNaN(birthDateValue.$y)) {
      setBirthError("É preciso de uma Data válida para continuar")
      return false
    }
    else {
      setBirthError("")
    }

    if (!data.get("gender") || !data.get("gender").trim().length) {
      setGenderError("É preciso um E-mail para continuar")
      return false
    }
    else {
      setGenderError("")
    }

    if (!data.get("email") || !data.get("email").trim().length) {
      setEmailError("É preciso um E-mail para continuar")
      return false
    }
    else {
      setEmailError("")
    }

    if (!data.get("password") || !data.get("password").length) {
      setPassError("É preciso uma Senha para continuar")
      return false
    }
    else {
      setPassError("")
    }

    let date = birthDateValue.$d;
    let ano = date.getFullYear();
    let mes = (date.getMonth() + 1).toString().padStart(2, "0");
    let dia = date.getDate().toString().padStart(2, "0");

    data.append("birthDate", `${ano}-${mes}-${dia}`);
    console.log({
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      birthDate: data.get("birthDate"),
      gender: data.get("gender"),
      email: data.get("email"),
      password: data.get("password"),
    });

    return true
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
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                error={fNameError && fNameError.length ? true : false}
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="Primeiro Nome"
                autoFocus
                helperText={fNameError}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                error={lNameError && lNameError.length ? true : false}
                required
                fullWidth
                id="lastName"
                label="Sobrenome"
                name="lastName"
                autoComplete="family-name"
                helperText={lNameError}
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <DatePicker
                error={birthDateValue === null || isNaN(birthDateValue.$D) || isNaN(birthDateValue.$M) || isNaN(birthDateValue.$y)}
                required
                fullWidth
                id="birthDate"
                label="Data de nascimento"
                name="birthDate"
                value={birthDateValue}
                onChange={(newValue) => setBirthDate(newValue)}
                slotProps={{
                  textField: {
                    helperText: birthError,
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                error={genderError && genderError.length ? true : false}
                required
                id="gender"
                name="gender"
                label="Gênero"
                defaultValue=""
                select
                fullWidth
                helperText={genderError}
              >
                <MenuItem value="M">
                  Masculino
                </MenuItem>
                <MenuItem value="F">
                  Feminino
                </MenuItem>
                <MenuItem value="F">
                  Outro
                </MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={emailError && emailError.length ? true : false}
                required
                fullWidth
                id="email"
                label="Seu E-mail"
                name="email"
                autoComplete="email"
                helperText={emailError}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                error={passError && passError.length ? true : false}
                required
                fullWidth
                name="password"
                label="Sua senha"
                type="password"
                id="password"
                autoComplete="new-password"
                helperText={passError}
              />
            </Grid>
            {/* <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid> */}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Cadastrar
          </Button>
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
