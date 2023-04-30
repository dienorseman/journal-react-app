import { TextField } from "@mui/material";

export const NameInput = ( { onInputChange, value, isValid, formSubmited } ) => {
  return (
        <TextField 
          label="Full Name" 
          placeholder="John Doe"
          variant="outlined" 
          fullWidth 
          sx={{ mb: 2 }} 
          name="name" 
          onChange={ onInputChange } 
          value={ value }
          error={ !!isValid && formSubmited}
          helperText={ isValid }
          />
  )
}
