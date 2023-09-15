import { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import dayjs from 'dayjs';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="/">
                Jobs-103
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function SignUp(props) {
    const [firstNameValue, setFirstName] = useState('')
    const [birthDateValue, setBirthDate] = useState(null)

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        let date = birthDateValue.$d
        let ano = date.getFullYear();
        let mes = (date.getMonth() + 1).toString().padStart(2, '0');
        let dia = date.getDate().toString().padStart(2, '0');

        data.append('birthDate', `${ano}-${mes}-${dia}`)
        console.log({
            email: data.get('email'),
            password: data.get('password'),
            firstName: data.get('firstName'),
            birthDate: data.get('birthDate')
        });
    };

    return (
        <Container style={props.menuController.isOpen ? { display: 'none' } : {}} component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Cadastre-se
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="Primeiro Nome"
                                value={firstNameValue}
                                onChange={(event) => setFirstName(event.target.value)}
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Segundo Nome"
                                name="lastName"
                                autoComplete="family-name"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <DatePicker
                                required
                                fullWidth
                                id="birthDate"
                                label="Data de nascimento"
                                name="birthDate"
                                value={birthDateValue}
                                onChange={(newValue) => {
                                    setBirthDate(newValue)
                                    console.log(newValue)
                                }}
                                autoComplete="off"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Seu E-mail"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Sua senha"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                            />
                        </Grid>
                        {/* <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid> */}
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Cadastrar
                    </Button>
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