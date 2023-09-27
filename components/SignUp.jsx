import { useState } from "react";
import Copyright from "./Copyright";
import EnderecoForm from "./EnderecoForm";
import PessoalStates from "./PessoalStates";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

// To Do -
// Mask the CEP Textfield
// Validate address before submit - props.children

export default function SignUp(props) {
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
  });

  const handleEndereco = (event) => {
    setEnderecoError(prev => ({
      ...prev,
      cep: ""
    }));
    setEnderecoError(prev => ({
      ...prev,
      logradouro: ""
    }));
    setEnderecoError(prev => ({
      ...prev,
      numero: ""
    }));
    setEnderecoError(prev => ({
      ...prev,
      bairro: ""
    }));
    setEnderecoError(prev => ({
      ...prev,
      cidade: ""
    }));
    setEnderecoError(prev => ({
      ...prev,
      estado: ""
    }));

    if (endereco.cep.replace(/\D/g, '').trim().length === 0) {
      setEnderecoError(prev => ({
        ...prev,
        cep: "É preciso inserir um válido Cep para continuar"
      }));
      return false;
    }

    if (endereco.logradouro.trim().length === 0) {
      setEnderecoError(prev => ({
        ...prev,
        logradouro: "É preciso inserir a Rua para continuar"
      }));
      return false;
    }

    if (endereco.numero.replace(/\D/g, '').trim().length === 0) {
      setEnderecoError(prev => ({
        ...prev,
        numero: "É preciso inserir o número da residência para continuar"
      }));
      return false;
    }

    if (endereco.bairro.trim().length === 0) {
      setEnderecoError(prev => ({
        ...prev,
        bairro: "É preciso inserir o bairro para continuar"
      }));
      return false;
    }

    if (endereco.estado.trim().length === 0) {
      setEnderecoError(prev => ({
        ...prev,
        estado: "É preciso inserir o estado referente para continuar"
      }));
      return false;
    }

    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (handleEndereco()) {
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
    }
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
          <PessoalStates submitController={props.submitController} />
          <EnderecoForm submitController={props.submitController} enderecoController={{
            endereco: endereco,
            setEndereco: setEndereco,
            enderecoError: enderecoError,
            setEnderecoError: setEnderecoError
          }} />
          <Grid container justifyContent="space-between">
            <Grid item>
              <Button
                onClick={() => props.submitController.setSubmitStage(false)}
                style={props.submitController.submitStage ? {} : { display: "none" }}
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
                style={props.submitController.submitStage ? {} : { display: "none" }}
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
