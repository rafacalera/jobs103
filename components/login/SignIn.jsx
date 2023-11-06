import Copyright from "../Copyright";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { useState } from "react";
import handleLogin from "../../helpers/handlers/handleLogin";

export default function SignIn(props) {
  const [isDisabled, setIsDisabled] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const [login, setLogin] = useState({
    email: "",
    senha: "",
  });

  const [loginError, setLoginError] = useState({
    email: "",
    senha: "",
  });

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
          Bem vindo(a) de volta!
        </Typography>
        <Box
          component="form"
          onSubmit={(e) =>
            handleLogin(
              e,
              login,
              setLoginError,
              router,
              dispatch,
              setIsDisabled,
            )
          }
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            error={loginError.email && loginError.email.length ? true : false}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Endereço de E-mail"
            name="email"
            autoComplete="email"
            value={login.email}
            onChange={(event) => {
              setLogin((prev) => ({
                ...prev,
                email: event.target.value,
              }));
            }}
            helperText={loginError.email}
            autoFocus
          />
          <TextField
            error={loginError.senha && loginError.senha.length ? true : false}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Sua senha"
            type="password"
            id="password"
            autoComplete="current-password"
            value={login.senha}
            onChange={(event) => {
              setLogin((prev) => ({
                ...prev,
                senha: event.target.value,
              }));
            }}
            helperText={loginError.senha}
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Lembrar-me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={isDisabled ? true : false}
          >
            Entrar
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Recuperar senha
              </Link>
            </Grid>
            <Grid item>
              <Link href="/cadastro" variant="body2">
                {"Cadastre-se por aqui"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
