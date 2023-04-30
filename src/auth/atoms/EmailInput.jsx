import { TextField } from "@mui/material";

export const EmailInput = ( { onInputChange, value, isValid, formSubmited } ) => {
  return (
    <TextField
      label="Email"
      placeholder="jonhDoe@example.com" 
      variant="outlined" 
      fullWidth sx={{ mb: 2 }} 
      name="email" 
      onChange={ onInputChange } 
      value={ value }
      error={ !!isValid && formSubmited}
      helperText={ isValid }
    />
  );
};
