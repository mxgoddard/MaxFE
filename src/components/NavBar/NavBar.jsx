import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { 
    Typography,
    Toolbar, 
    Button, 
    ListItemText, 
    ListItemButton, 
    ListItem,
    List,
    IconButton,
    Drawer,
    Divider,
    CssBaseline,
    Box,
    AppBar }
     from '@mui/material';
import { ReactComponent as Logo } from '../../media/MaxLogo.svg';
import './NavBar.css';

const drawerWidth = 240;
const navItems = ['About', 'Projects', 'Resume', 'Login →'];

function NavBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                max goddard
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav" style={{ padding: '2rem', background: 'transparent', boxShadow: 'none' }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        id='Nav-Bar-Logo-Name'
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        <Logo />
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block', backgroundColor: '#141414', borderRadius: '100px'} }}>
                        {/* {navItems.map((item) => (
                            <Button key={item} className='Nav-Bar-Link' sx={{ backgroundColor: '#141414', borderRadius: '50%', padding: '1rem' }}>
                                {item}
                            </Button>
                        ))} */}
                        {/* TODO - I don't know why this works with ids and not classes */}
                        <Button key={navItems[0]} id='Nav-Bar-Link' sx={{ backgroundColor: '#141414', borderRadius: '100px 0 0 100px', padding: '1rem 2rem' }}>
                            {navItems[0]}
                        </Button>
                        <Button key={navItems[1]} id='Nav-Bar-Link' sx={{ backgroundColor: '#141414', padding: '1rem 2rem' }}>
                            {navItems[1]}
                        </Button>
                        <Button key={navItems[2]} id='Nav-Bar-Link' sx={{ backgroundColor: '#141414', padding: '1rem 2rem' }}>
                            {navItems[2]}
                        </Button>
                        <Button key={navItems[3]} id='Nav-Bar-Link-Login' sx={{ backgroundColor: '#141414', borderRadius: '100px', padding: '1rem 2rem' }}>
                            {navItems[3]}
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
};

export default NavBar;