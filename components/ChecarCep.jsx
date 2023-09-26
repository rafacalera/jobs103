import EnderecoForm from "./EnderecoForm"

export default (props) =>{
    const setEndereco = props.enderecoController.setEndereco
    const setEnderecoError = props.enderecoErrorController.setEnderecoError

    const checarCep = async (e) => {
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
    }

    return <EnderecoForm {...props} checarCep={checarCep}/>
}