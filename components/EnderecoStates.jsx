import { useState } from "react";
import EnderecoHandler from "./EnderecoHandler";

export default (props) => {
  const [endereco, setEndereco] = useState({
    cep: "",
    logradouro: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
    complemento: "",
  });

  return (
    <EnderecoHandler
      submitController={props.submitController}
      enderecoController={{
        endereco: endereco,
        setEndereco: setEndereco,
      }}
    />
  );
};
