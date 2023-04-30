import { Grid } from "@mui/material";
import { SubmitButton } from "../atoms";


export const RegisterButtons = () => {
  return (
    <Grid container spacing={2} sx={{ mt: 1, mb: 2 }}>
      <Grid item xs={12} sm={12}>
        <SubmitButton text={"Register"} />
      </Grid>
    </Grid>
  );
};
