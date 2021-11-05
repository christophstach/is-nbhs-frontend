import * as React from 'react';
import { FunctionComponent } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BarChartIcon from '@mui/icons-material/BarChart';
import PieChartIcon from '@mui/icons-material/PieChart';
import ShowChartIcon from '@mui/icons-material/ShowChart';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Copyright from './Copyright';
import { IconButton, ListItemButton, ListSubheader, Menu, MenuItem } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';


const drawerWidth: number = 300;


const mdTheme = createTheme();


const MainLayout: FunctionComponent = ({children}) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{display: 'flex'}}>
                <CssBaseline/>
                <AppBar position="fixed" sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
                    <Toolbar>
                        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
                            IS: NBHS
                        </Typography>

                        <div>
                            <IconButton
                                size="large"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle/>
                            </IconButton>
                            <Menu
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem component="a" href="/profile">Profil</MenuItem>
                                <MenuItem component="a" href="/auth/sign-out">Ausloggen</MenuItem>
                            </Menu>
                        </div>

                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: {width: drawerWidth, boxSizing: 'border-box'},
                    }}
                >
                    <Toolbar/>
                    <Box sx={{overflow: 'auto'}}>
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton component="a" href="/users">
                                    <ListItemIcon>
                                        <PeopleAltIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Benutzerverwaltung"/>
                                </ListItemButton>
                            </ListItem>


                            <ListSubheader>Formulare</ListSubheader>

                            <List>
                                <ListItemButton component="a" href="/forms/gtb-os">
                                    <ListItemText primary="GTB OS"/>
                                </ListItemButton>
                                <ListItemButton component="a" href="/forms/district-work">
                                    <ListItemText primary="Stadtteilarbeit"/>
                                </ListItemButton>
                            </List>

                            <ListSubheader>Statistiken</ListSubheader>

                            <List>
                                <ListItemButton component="a">
                                    <ListItemIcon>
                                        <BarChartIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Statistik 1"/>
                                </ListItemButton>
                                <ListItemButton component="a">
                                    <ListItemIcon>
                                        <PieChartIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Statistik 2"/>
                                </ListItemButton>
                                <ListItemButton component="a">
                                    <ListItemIcon>
                                        <ShowChartIcon/>
                                    </ListItemIcon>
                                    <ListItemText primary="Statistik 3"/>
                                </ListItemButton>
                            </List>

                        </List>
                    </Box>
                </Drawer>
                <Box component="main" sx={{flexGrow: 1, p: 3}}>
                    <Toolbar/>
                    {children}
                    <Copyright/>
                </Box>
            </Box>
        </ThemeProvider>
    )
}

export default MainLayout