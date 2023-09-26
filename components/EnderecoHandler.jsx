import Endereco from "./Endereco";
import { useState } from "react";

export default (props) => {

    const [endereco, setEndereco] = useState({
        cep: "",
        logradouro: "",
        numero: "",
        bairro: "",
        cidade: "",
        estado: "",
        complemento: ""
    })

    const [enderecoError, setEnderecoError] = useState({
        cep: "",
        logradouro: "",
        numero: "",
        bairro: "",
        cidade: "",
        estado: "",
    })


    const checkCEP = async (e) => {
        const eventCep = e.target.value.replace(/\D/g, '')

        setEnderecoError(prev => ({
            ...prev,
            cep: ""
        }))

        if (eventCep.trim() == "") {
            return false
        }

        fetch(`https://viacep.com.br/ws/${eventCep}/json/`)
            .then(res => res.json())
            .then(data => {
                setEndereco(prev => ({
                    ...prev,
                    logradouro: data.logradouro,
                    bairro: data.bairro,
                    cidade: data.localidade,
                    estado: data.uf,
                    complemento: data.complemento
                }))
            })
            .catch(() => {
                setEnderecoError(prev => ({
                    ...prev,
                    cep: "Cep Inválido"
                }))
                setEndereco(prev => ({
                    ...prev,
                    logradouro: "",
                    bairro: "",
                    cidade: "",
                    estado: "",
                    complemento: ""
                }))
            });


    };
    const enderecoController = {
        enderecoValues: {
            endereco: endereco,
            setEndereco: setEndereco
        },
        enderecoErrors: {
            enderecoError: enderecoError,
            setEnderecoError: setEnderecoError
        },
        checkCEP: checkCEP
    }
    return (
        <Endereco submitController={props.submitController} enderecoController={enderecoController} />
    )
}