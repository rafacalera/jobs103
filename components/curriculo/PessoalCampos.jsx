import { TextField } from "@mui/material"
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import styles from "../../styles/PessoalCampos.module.css"
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default ({ currentUser }) => {

    return (
        <div style={{ width: '100%', minHeight: '200px' }}>
            <Typography component="h1" variant="h5">
                Informações pessoais
            </Typography>
            <div className={styles.divPessoal}>

                <TextField id="nome" label="Nome" variant="standard" value={currentUser ? currentUser.personalInfos.primeiroNome : ""} />
                <TextField id="sobrenome" label="Sobrenome" variant="standard" value={currentUser ? currentUser.personalInfos.ultimoNome : ""} />
                <FormControl variant="standard" sx={{ minWidth: 200 }} >
                    <InputLabel id="inputEstadoCivl">Estado Civil</InputLabel>
                    <Select
                        labelId="inputEstadoCivl"
                        id="estadoCivil"
                        label="Estado Civil"
                    >
                        <MenuItem value="Solteiro">Solteiro</MenuItem>
                        <MenuItem value="Casado">Casado</MenuItem>
                        <MenuItem value="Outro">Outro</MenuItem>
                    </Select>
                </FormControl>
                <TextField id="email" label="E-mail" variant="standard" value={currentUser ? currentUser.personalInfos.email : ""} InputProps={{
                    readOnly: true,
                }} />
                <TextField id="telefone" label="Telefone para contato" variant="standard" />
                <TextField id="nascidoEm" label="Nascido em" variant="standard" />
            </div>
        </div>
    )
}