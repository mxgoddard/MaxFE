import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import '../fonts/style.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';

// Convert to class component

const pages = ['About', 'Projects', 'Contact'];

export default class NavBar extends React.Component {
    render() {
        return (
            <AppBar sx={{ backgroundColor: 'white', height: '100px' }}>
                <Container maxWidth={false}>
                    <Toolbar sx={{ mx: 16 }}>

                        <Link to={'/'} style={{ textDecoration: 'none' }}>
                            <Box sx={{ display: { md: 'flex' } }}>
                                <Typography
                                    sx={{ fontSize: 28, color: 'black', fontFamily: 'ObjektivMk3Bold' }}
                                >
                                    Max
                                </Typography>
                                <Typography
                                    sx={{ fontSize: 28, color: '#8EA1E1', fontFamily: 'ObjektivMk3Bold', "&:hover": { color: '#8663ba' } }}
                                >
                                    Goddard
                                </Typography>
                            </Box>
                        </Link>
                        <Grid container justifyContent='flex-end'>
                            <Box sx={{ display: { md: 'flex' } }}>
                                {pages.map((page) => (
                                    <Link to={page.toLowerCase()} style={{ textDecoration: 'none' }} key={page} >
                                        <Button
                                            key={page}
                                            sx={{
                                                textTransform: 'none', my: 4, marginLeft: 8, color: 'black', display: 'block', fontWeight: 700, fontSize: 15,
                                                fontFamily: 'ObjektivMk3Bold', "&:hover": { textDecoration: 'underline' }
                                            }}
                                        >
                                            {page}
                                        </Button>
                                    </Link>

                                ))}
                            </Box>
                            {/* TODO - For some reason the conditional isn't working here so just added another button manually - horrible I know */}
                            <UserContext.Consumer>
                                {({ user, loginUser, logoutUser }) => {
                                    {
                                        if (user.firstName == undefined) {
                                            return (
                                                <Link to={'login'} style={{ textDecoration: 'none' }}>
                                                    <Button
                                                        key={'Login'}
                                                        sx={{
                                                            textTransform: 'none', my: 4, marginLeft: 8, color: 'white', display: 'block', fontWeight: 700, fontSize: 15,
                                                            backgroundColor: '#8EA1E1', px: 3.5, fontFamily: 'ObjektivMk3Bold', "&:hover": { backgroundColor: '#8663ba' }
                                                        }}
                                                    >
                                                        {'Login'}
                                                    </Button>
                                                </Link>
                                            )
                                        } else {
                                            return (
                                                <Button
                                                    onClick={() => {
                                                        logoutUser();
                                                    }}
                                                    key={'Profile'}
                                                    sx={{
                                                        textTransform: 'none', my: 4, marginLeft: 8, color: 'white', display: 'block', fontWeight: 700, fontSize: 15,
                                                        backgroundColor: '#8EA1E1', px: 3.5, fontFamily: 'ObjektivMk3Bold', "&:hover": { backgroundColor: '#8663ba' }
                                                    }}
                                                >
                                                    {`Logout ${user.firstName}`}
                                                </Button>
                                            )
                                        }
                                    }
                                }}
                            </UserContext.Consumer>
                            {/* <Link to={'login'} style={{ textDecoration: 'none' }}>
                                <Button
                                    key={'Login'}
                                    sx={{
                                        textTransform: 'none', my: 4, marginLeft: 8, color: 'white', display: 'block', fontWeight: 700, fontSize: 15, 
                                        backgroundColor: '#8EA1E1', px: 3.5, fontFamily: 'ObjektivMk3Bold', "&:hover": { backgroundColor: '#8663ba'}
                                    }}
                                >
                                    {'Login'}
                                </Button>
                            </Link> */}
                        </Grid>
                    </Toolbar>
                </Container>
            </AppBar>
        );
    }
}