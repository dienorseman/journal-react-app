import { Grid, Typography } from "@mui/material";

export const AuthLayout = ({ children, title }) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: {xs: "100%", sm: "100vh"}, backgroundColor: "primary.main", padding: 4, position: {xs: 'fixed'} }}
    >
      <Grid
        item
        className="box-shadow"
        xs={3}
        sx={{
          width: { md: 450 },
          backgroundColor: "white",
          borderRadius: 2,
          padding: 3,
        }}
      >
        <Typography variant="h5" sx={{ mb: 2 }}>
            {title}
        </Typography>
        {children}
      </Grid>
    </Grid>
  );
};
