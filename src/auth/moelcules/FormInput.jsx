import { Grid } from "@mui/material"

export const FormInput = ( { children } ) => {
  return (
            <Grid item xs={12} sx={{ mt: 2 }}>
                { children }
            </Grid>  )
}
