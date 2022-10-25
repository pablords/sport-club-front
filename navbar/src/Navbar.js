import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import IconRefresh from '@mui/icons-material/Refresh';


export function ButtonAppBar({ logout, isAuthenticated }) {

    const TOKEN_KEY = "@startSetup";

    const handleLogout = () => {
        logout()
        window.location.href = "/login"
    }

    const handleLogin = () => {
        window.location.href = "/login"
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        SportClub
                    </Typography>

                    <IconButton>
                        <IconRefresh
                            id="button-refresh"
                            sx={{ color: "#ffff" }}
                        />
                    </IconButton>


                    {
                        isAuthenticated() ?
                            <Button onClick={handleLogout} color="inherit">Logout</Button>
                            :
                            <Button onClick={handleLogin} color="inherit">Login</Button>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    );
}
