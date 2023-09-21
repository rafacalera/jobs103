import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

export default props => {
    const submitController = props.submitController

    const personalData = props.personalDataController.personalDataValues.personalData
    const setPersonalData = props.personalDataController.personalDataValues.setPersonalData
    const personalError = props.personalDataController.personalErrors.personalError
    const setPersonalError = props.personalDataController.personalErrors.setPersonalError

    return (
        <>
            <Grid
                container
                spacing={2}
                style={submitController.submitStage ? { display: "none" } : {}}
            >
                <Grid item xs={12} sm={6}>
                    <TextField
                        error={personalError.fNameError && personalError.fNameError.length ? true : false}
                        autoComplete="given-name"
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        label="Primeiro Nome"
                        value={personalData.firstName}
                        onChange={(event) => {
                            setPersonalData(prev => ({
                                ...prev,
                                firstName: event.target.value
                            }));
                        }}
                        autoFocus
                        helperText={personalError.fNameError}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        error={personalError.lNameError && personalError.lNameError.length ? true : false}
                        required
                        fullWidth
                        id="lastName"
                        label="Sobrenome"
                        name="lastName"
                        value={personalData.lastName}
                        onChange={(event) => {
                            setPersonalData(prev => ({
                                ...prev,
                                lastName: event.target.value
                            }));
                        }}
                        autoComplete="family-name"
                        helperText={personalError.lNameError}
                    />
                </Grid>
                <Grid item xs={12} sm={8}>
                    <DatePicker
                        required
                        id="birthDate"
                        label="Data de nascimento"
                        name="birthDate"
                        value={personalData.birthDateValue}
                        onChange={(newValue) => {
                            setPersonalData(prev => ({
                                ...prev,
                                birthDateValue: newValue
                            }));
                        }}
                        disableFuture
                        slotProps={{
                            textField: {
                                helperText: personalError.birthError,
                            },
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        error={personalError.genderError && personalError.genderError.length ? true : false}
                        required
                        id="gender"
                        name="gender"
                        label="Gênero"
                        value={personalData.gender}
                        onChange={(event) => {
                            setPersonalData(prev => ({
                                ...prev,
                                gender: event.target.value
                            }));
                        }}
                        select
                        fullWidth
                        helperText={personalError.genderError}
                    >
                        <MenuItem value="M">Masculino</MenuItem>
                        <MenuItem value="F">Feminino</MenuItem>
                        <MenuItem value="O">Outros</MenuItem>
                    </TextField>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        error={personalError.emailError && personalError.emailError.length ? true : false}
                        required
                        fullWidth
                        id="email"
                        label="Seu E-mail"
                        name="email"
                        value={personalData.email}
                        onChange={(event) => {
                            setPersonalData(prev => ({
                                ...prev,
                                email: event.target.value
                            }));
                        }}
                        autoComplete="email"
                        helperText={personalError.emailError}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        error={personalError.passError && personalError.passError.length ? true : false}
                        required
                        fullWidth
                        name="password"
                        label="Sua senha"
                        type="password"
                        id="password"
                        value={personalData.password}
                        onChange={(event) => {
                            setPersonalData(prev => ({
                                ...prev,
                                password: event.target.value
                            }));
                        }}
                        autoComplete="new-password"
                        helperText={personalError.passError}
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
                onClick={props.nextStage}
                style={submitController.submitStage ? { display: "none" } : {}}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Próximo
            </Button>
        </>
    )
}