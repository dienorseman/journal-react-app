import { StarOutline } from "@mui/icons-material"
import { Grid, Typography} from "@mui/material"


export const NothingSelectedView = () => {
  return (
    <Grid 
        container
        spaciing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{
            minHeight: { xs:'calc(100vh - 200px)' , sm: 'calc(100vh - 110px)'},
            backgroundColor: 'primary.main',
        }}
    >
        <Grid item xs={12} sm={6} md={4}>
            <StarOutline
                sx={{
                    fontSize: '10rem',
                    color: 'white',
                }}
            />
        </Grid>   
        <Grid item xs={12} sm={6} md={4}>
            <Typography
                variant="h4"
                sx={{
                    color: 'white',
                    fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }
                }}
            >
                Select or create an entry
            </Typography>
        </Grid>
    </Grid>
  )
}
