import { useState } from "react";
import { useDispatch } from "react-redux";

import { useForm } from "../../hooks";

import { startCreatingWithEmailAndPasswod } from "../../store/auth";

import { Grid, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { EmailInput, PasswordInput, NameInput } from "../atoms";
import { FormInput, RegisterButtons } from "../moelcules";


const formData = {
    name: '',
    email: '',
    password: '',
}

const formValidations = {
  name: [ (value) => value.length >= 1, 'Name is required' ],
  email: [ (value) => value.includes('@'), 'Email is not valid' ],
  password: [ (value) => value.length > 0, 'Password is required' ],
}

export const RegisterForm = () => {
  
    const dispatch = useDispatch();

    const [ formSubmitted, setFormSubmitted ] = useState(false)

    const { name, email, password, reset, onInputChange, isFormValid, nameValid, emailValid, passwordValid } = useForm(
      formData,
      formValidations
    )


    const handleSubmit = ( e ) => {
    e.preventDefault();
    // dispatch( chekingAuthentication( email, password ) )  
    setFormSubmitted(true);
    if ( !isFormValid ) return;
    dispatch( startCreatingWithEmailAndPasswod( name, email, password ) )
  }

  return (
    <form 
      onSubmit={ handleSubmit }
    >
      <Grid container>
        <FormInput>
          <NameInput onInputChange={onInputChange} value={name} isValid={nameValid} formSubmited={formSubmitted}/>
        </FormInput>
        <FormInput>
          <EmailInput onInputChange={onInputChange} value={email} isValid={emailValid} formSubmited={formSubmitted}/>
        </FormInput>
        <FormInput>
          <PasswordInput onInputChange={onInputChange} value={password} isValid={passwordValid} formSubmited={formSubmitted}/>
        </FormInput>
        <RegisterButtons />
        <Grid container direction="row" justifyContent="end">
          <Typography sx={{mr:1}}  >
            Already an user?
          </Typography>
          <Link component={RouterLink} to="/auth/login" color="inherit">
            Login
          </Link>
        </Grid>
      </Grid>
    </form>
  );
};
