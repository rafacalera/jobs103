import { useState } from "react";
import ChecarCep from "./ChecarCep";

export default (props) => {
  const [enderecoError, setEnderecoError] = useState({
    cep: "",
    logradouro: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  return (
    <ChecarCep
      {...props}
      enderecoErrorController={{
        enderecoError: enderecoError,
        setEnderecoError: setEnderecoError,
      }}
    />
  );
};
