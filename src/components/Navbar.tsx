import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Drawer from '@mui/material/Drawer';
import { Link, ListItemIcon } from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import HomeIcon from '@mui/icons-material/Home';


export default function Navbar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <>
            <AppBar position="static">
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button color="inherit">Logo</Button>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer}
                    >
                        <MenuIcon />
                    </IconButton>
                </Box>
            </AppBar>
            <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={toggleDrawer}
                    onKeyDown={toggleDrawer}
                >
                    <List>
                        <ListItemButton component="a" href="/">
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItemButton>
                        <ListItemButton component="a" href="/about">
                            <ListItemText primary="About" />
                        </ListItemButton>
                        <ListItemButton component="a" href="/site-map">
                            <ListItemText primary="Site Map" />
                        </ListItemButton>
                    </List>
                </Box>
            </Drawer>
        </>
    );
}