export default function handleEndereco(endereco, setEnderecoError) {
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

    if (endereco.bairro.trim().length === 0) {
        setEnderecoError(prev => ({
            ...prev,
            bairro: "É preciso inserir o bairro para continuar"
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
    if (endereco.cidade.trim().length === 0) {
        setEnderecoError(prev => ({
            ...prev,
            cidade: "É preciso inserir o número da residência para continuar"
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