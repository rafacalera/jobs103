import { useState } from "react";
import PersonalData from "./PersonalData";
import dayjs from "dayjs";

export default props => {
    const now = new Date(Date.now());
    const [personalData, setPersonalData] = useState({
        firstName: "",
        lastName: "",
        birthDateValue: dayjs(`${now.getFullYear() - 18}-${now.getMonth() + 1}-${now.getDate()}`),
        gender: "",
        email: "",
        password: ""
    })
    const [personalError, setPersonalError] = useState({
        fNameError: "",
        lNameError: "",
        birthError: "",
        genderError: "",
        emailError: "",
        passError: "",
    })

    const personalDataController = {
        personalDataValues: {
            personalData: personalData,
            setPersonalData: setPersonalData
        },
        personalErrors: {
            personalError: personalError,
            setPersonalError: setPersonalError
        }
    }


    const nextStage = (event) => {
        setPersonalError(prev => ({
            ...prev,
            fNameError: event.target.value
        }));
        setPersonalError(prev => ({
            ...prev,
            lNameError: event.target.value
        }));
        setPersonalError(prev => ({
            ...prev,
            birthError: event.target.value
        }));
        setPersonalError(prev => ({
            ...prev,
            genderError: event.target.value
        }));
        setPersonalError(prev => ({
            ...prev,
            emailError: event.target.value
        }));
        setPersonalError(prev => ({
            ...prev,
            passError: event.target.value
        }));

        if (personalData.firstName.trim().length < 3) {
            setPersonalError(prev => ({
                ...prev,
                fNameError: "É preciso um nome válido para continuar"
            }));
            return false;
        }

        if (personalData.lastName.trim().length < 3) {
            setPersonalError(prev => ({
                ...prev,
                lNameError: "É preciso um Sobrenome válido para continuar"
            }));
            return false;
        }

        if (personalData.
            birthDateValue === null ||
            isNaN(personalData.birthDateValue.$D) ||
            isNaN(personalData.birthDateValue.$M) ||
            isNaN(personalData.birthDateValue.$y)
        ) {
            setPersonalError(prev => ({
                ...prev,
                birthError: "É preciso uma Data válida para continuar"
            }));
            return false;
        }

        if (personalData.gender === "") {
            setPersonalError(prev => ({
                ...prev,
                genderError: "Selecionar Gênero"
            }));
            return false;
        }

        if (personalData.email.trim().length < 6) {
            switch (personalData.email.length) {
                case 0:
                    setPersonalError(prev => ({
                        ...prev,
                        emailError: "É preciso um E-mail para continuar"
                    }));
                    break;
                default:
                    setPersonalError(prev => ({
                        ...prev,
                        emailError: "É preciso um endereço E-mail válido"
                    }));

            }
            return false;
        }

        if (personalData.password.length < 6) {
            switch (personalData.password.length) {
                case 0:
                    setPersonalError(prev => ({
                        ...prev,
                        passError: "É preciso uma Senha para continuar"
                    }));
                    break;
                default:
                    setPersonalError(prev => ({
                        ...prev,
                        passError: "É preciso uma Senha mais forte"
                    }));
            }
            return false;
        }

        props.submitController.setSubmitStage(true);
        return true;
    };

    return (
        <PersonalData submitController={props.submitController} personalDataController={personalDataController} nextStage={nextStage} />
    )
}