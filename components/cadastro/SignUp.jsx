import { useState } from "react";
import Copyright from "../Copyright";
import EnderecoForm from "./endereco/EnderecoForm";
import PessoalStates from "./pessoal/PessoalStates";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import handleSubmit from "./handleSubmit";

export default function SignUp(props) {
  const router = useRouter();
  const dispatch = useDispatch();

  const [endereco, setEndereco] = useState({
    cep: "",
    logradouro: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
    complemento: "",
  });

  const [enderecoError, setEnderecoError] = useState({
    cep: "",
    logradouro: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
    complemento: "",
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
          Cadastre-se
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={(event) => {
            handleSubmit(event, endereco, setEnderecoError, router, dispatch);
          }}
          sx={{ mt: 3 }}
        >
          <PessoalStates submitController={props.submitController} />
          <EnderecoForm
            submitController={props.submitController}
            enderecoController={{
              endereco: endereco,
              setEndereco: setEndereco,
              enderecoError: enderecoError,
              setEnderecoError: setEnderecoError,
            }}
          />
          <Grid container justifyContent="space-between">
            <Grid item>
              <Button
                onClick={() => props.submitController.setSubmitStage(false)}
                style={
                  props.submitController.submitStage ? {} : { display: "none" }
                }
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
                style={
                  props.submitController.submitStage ? {} : { display: "none" }
                }
                fullWidth
                variant="contained"
                disabled={props.submitController.submitStage ? false : true}
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
