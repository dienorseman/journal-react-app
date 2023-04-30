import { TurnedInNot, TurnedInNotOutlined } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"


export const SideBar = ( { drawerWidth } ) => {
  return (
    <Box
        component="nav"
        sx={{
            width: { sm: drawerWidth },
            flexShrink: { sm: 0 },
        }}
    >
        <Drawer
            variant="permanent"
            open
            sx={{
                display: { xs: 'none', sm: 'block'  },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}  
        >
            <Toolbar>
                <Typography variant="h6" noWrap component="div">
                    Edgar Renan
                </Typography>
                
            </Toolbar>
            
            <Divider />

            <List>
                { [ 'January', 'February', 'March' ].map((text, index) => (	
                    <ListItem
                        key={text} disablePadding                    
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                <TurnedInNot variant=""/>
                            </ListItemIcon>
                            <Grid 
                                container                            
                            >
                                <ListItemText primary={text} />
                                <ListItemText secondary={'Aun hay tiempo, que no es tiempo.'} />

                            </Grid>
                        </ListItemButton>

                    </ListItem>
                ))}
            </List>

        </Drawer>

    </Box>
  )
}
