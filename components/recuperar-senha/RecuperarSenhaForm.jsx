import Copyright from "../Copyright";
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useState } from "react";
import { handleRecuperarSubmit } from "../../helpers/handlers/handleRecuperarSubmit";

export const RecuperarSenhaForm = (props) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [email, setEmail] = useState({
    value: "",
    error: "",
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
          Recuperar senha
        </Typography>
        <Box component="form" sx={{ mt: 1 }}>
          <TextField
            error={email.error && email.error.length ? true : false}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Endereço de E-mail da conta"
            name="email"
            autoComplete="email"
            value={email.value}
            onChange={(event) => {
              setEmail((prev) => ({
                ...prev,
                value: event.target.value,
              }));
            }}
            helperText={email.error}
            autoFocus
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={isDisabled ? true : false}
            onClick={(e) => {
              handleRecuperarSubmit(e, email, setEmail, setIsDisabled);
            }}
          >
            Enviar
          </Button>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
};
