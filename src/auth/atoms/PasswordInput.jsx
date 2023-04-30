import { TextField } from "@mui/material";

export const PasswordInput = ({ onInputChange, value, isValid, formSubmited }) => {
  return (
    <TextField 
      label="Password" 
      variant="outlined" 
      placeholder="password" 
      fullWidth sx={{ mb: 2 }} 
      name="password" 
      onChange={ onInputChange } 
      value={ value }           
      error={ !!isValid && formSubmited}
      helperText={ isValid } 
    />
  );
};
