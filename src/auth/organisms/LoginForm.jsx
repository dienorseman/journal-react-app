// react
import { useEffect } from "react";
//redux
import { useDispatch } from "react-redux";
import { chekingAuthentication } from "../../store/auth";
//hooks
import { useForm } from "../../hooks";
//components
import { Grid, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { EmailInput, PasswordInput } from "../atoms";
import { FormInput, LoginButtons } from "../moelcules";

export const LoginForm = () => {

  const dispatch = useDispatch();

  const { email, password, reset, onInputChange } = useForm(
    {
      email: '',
      password: '',
    },
  )

  const handleSubmit = ( e ) => {
    e.preventDefault();
    // console.log(email, password);
    dispatch( chekingAuthentication( email, password ) )
    // reset();
  }


  return (
    <form
      onSubmit={ handleSubmit }
    >
      <Grid container>
        <FormInput>
          <EmailInput onInputChange={ onInputChange } value={ email }/>
        </FormInput>
        <FormInput>
          <PasswordInput onInputChange={ onInputChange } value={ password }/>
        </FormInput>
        <LoginButtons onSubmit={ handleSubmit }/>
        <Grid container direction="row" justifyContent="end">
          <Link
            component={RouterLink}
            to="/auth/register"
            color="inherit"
          >Create an account</Link>
        </Grid>
      </Grid>
    </form>
  );
};
