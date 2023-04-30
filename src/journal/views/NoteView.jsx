import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../organisms"

export const NoteView = () => {
  return (
    <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
            mb: 1,
        }}
    >
        <Grid item >
            <Typography
                variant="h5"
                fontWeight={"light"}
                sx={{
                    fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem' }, 
                }}
            >
                28 August 2021
            </Typography>
        </Grid>
        <Grid item >
            <Button 
                variant="contained"
            >
                <SaveOutlined 
                    sx={{
                        mr: 1,
                        fontSize: { xs: '1rem', sm: '1.5rem', md: '2rem' },
                    }}
                />
                Save
            </Button>
        </Grid>

        <Grid container>
            <TextField
                type="text"
                fullWidth
                variant="filled"
                placeholder="Some awesome title"
                label="Title"
                sx={{
                    border: 'none',
                    mt: 4, 
                    textAlign: 'center',
                }}
            />
            <TextField
                type="text"
                fullWidth
                multiline
                placeholder="What happened today?"
                minRows={5}
                sx={{
                    border: 'none',
                    mt: 4, 
                    textAlign: 'center',
                }}
            />
        </Grid>

        <ImageGallery />

    </Grid>

  )
}
