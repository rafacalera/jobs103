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
  const [submitStage, setSubmitStage] = useState(false);

  const [fNameError, setFNameError] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lNameError, setLNameError] = useState("");
  const [lastName, setLastName] = useState("");

  const [birthDateValue, setBirthDate] = useState(null);
  const [birthError, setBirthError] = useState("");

  const [genderError, setGenderError] = useState("");
  const [gender, setGender] = useState("");

  const [emailError, setEmailError] = useState("");
  const [email, setEmail] = useState("");
  const [passError, setPassError] = useState("");
  const [password, setPassword] = useState("");

  const [cepError, setCepError] = useState("");

  const nextStage = (event) => {
    setFNameError("");
    setLNameError("");
    setBirthError("");
    setGenderError("");
    setEmailError("");
    setPassError("");

    if (firstName.trim().length === 0) {
      setFNameError("É preciso um Nome para continuar");
      return false;
    }

    if (lastName.trim().length === 0) {
      setLNameError("É preciso um Sobrenome para continuar");
      return false;
    }

    if (
      birthDateValue === null ||
      isNaN(birthDateValue.$D) ||
      isNaN(birthDateValue.$M) ||
      isNaN(birthDateValue.$y)
    ) {
      setBirthError("É preciso de uma Data válida para continuar");
      return false;
    }

    if (gender === "") {
      setGenderError("Selecionar Gênero");
      return false;
    }

    if (email.trim().length === 0) {
      setEmailError("É preciso um E-mail para continuar");
      return false;
    }

    if (password.length < 5) {
      switch (password.length) {
        case 0:
          setPassError("Preencha a senha para continuar");
          break;
        default:
          setPassError("Preencha com uma senha mais forte");
      }
      return false;
    }

    setSubmitStage(true);
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

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
          <Grid
            container
            spacing={2}
            style={submitStage ? { display: "none" } : {}}
          >
            <Grid item xs={12} sm={6}>
              <TextField
                error={fNameError && fNameError.length ? true : false}
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="Primeiro Nome"
                value={firstName}
                onChange={(event) => {
                  setFirstName(event.target.value);
                }}
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
                value={lastName}
                onChange={(event) => {
                  setLastName(event.target.value);
                }}
                autoComplete="family-name"
                helperText={lNameError}
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <DatePicker
                required
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
                value={gender}
                onChange={(event) => {
                  setGender(event.target.value);
                }}
                select
                fullWidth
                helperText={genderError}
              >
                <MenuItem value="M">Masculino</MenuItem>
                <MenuItem value="F">Feminino</MenuItem>
                <MenuItem value="O">Outros</MenuItem>
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
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
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
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
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
          <Grid
            container
            spacing={2}
            style={submitStage ? {} : { display: "none" }}
          >
            <Grid item xs={12} sm={4}>
              <TextField
                error={cepError && cepError.length ? true : false}
                required
                fullWidth
                id="cep"
                label="CEP"
                name="cep"
                autoComplete="cep"
                helperText={emailError}
              />
            </Grid>
          </Grid>
          <Button
            onClick={nextStage}
            style={submitStage ? { display: "none" } : {}}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Próximo
          </Button>
          <Grid container spacing={2}>
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
