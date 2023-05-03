// react

//redux
import { useDispatch, useSelector } from "react-redux";
//hooks
import { useForm } from "../../hooks";
//components
import { Alert, Grid, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { EmailInput, PasswordInput } from "../atoms";
import { FormInput, LoginButtons } from "../moelcules";
import { startLogingInWithEmailAndPasswod } from "../../store/auth";
import { useState } from "react";

const formData = {
  email: "",
  password: "",
};

const formValidations = {
  email: [(value) => value.includes("@"), "Email is not valid"],
  password: [(value) => value.length > 0, "Password is required"],
};

export const LoginForm = () => {
  const { errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
    email,
    password,
    reset,
    onInputChange,
    isFormValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidations);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (!isFormValid) return;
    dispatch(startLogingInWithEmailAndPasswod(email, password));

  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container>
        <FormInput>
          <EmailInput
            onInputChange={onInputChange}
            value={email}
            isValid={emailValid}
            formSubmited={formSubmitted}
          />
        </FormInput>
        <FormInput>
          <PasswordInput
            onInputChange={onInputChange}
            value={password}
            isValid={passwordValid}
            formSubmited={formSubmitted}
          />
        </FormInput>

        {errorMessage && (
          <Grid item xs={12} sm={12}>
            <Alert severity="error">{errorMessage}</Alert>{" "}
          </Grid>
        )}
        <LoginButtons onSubmit={handleSubmit} />
        <Grid container direction="row" justifyContent="end">
          <Link component={RouterLink} to="/auth/register" color="inherit">
            Create an account
          </Link>
        </Grid>
      </Grid>
    </form>
  );
};
