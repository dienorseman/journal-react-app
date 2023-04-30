
//components
import { Grid } from "@mui/material";
import { GoogleLogInButton, SubmitButton } from "../atoms";


export const LoginButtons = () => {

  return (
    <Grid container spacing={2} sx={{ mt: 1, mb: 2 }}>
      <Grid item xs={12} sm={6}>
        <SubmitButton text={"Login"} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <GoogleLogInButton />
      </Grid>
    </Grid>
  );
};
