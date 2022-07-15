import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {
  Link as RouterLink,
} from 'react-router-dom';

function NavDashboard( { user } ) {
  
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  function handleMenu(e){
    setAnchorEl(e.currentTarget)
  }

  function handleClose(){
    setAnchorEl(null)
  }
  
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Box>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
            anchorEl={anchorEl} 
            anchorOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            open={open}
            onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Dashboard</MenuItem>
              <MenuItem onClick={handleClose}>My Book Logs</MenuItem>
              <MenuItem onClick={handleClose}>Add A New Log</MenuItem>
              <MenuItem onClick={handleClose}>My Wishlist</MenuItem>
            </Menu>
          </Box>
          <Box sx={{ ml: 2, flexGrow: 1 }}>
            <Typography sx={{ fontSize: 20 }}>Welcome to your Book Space, {user.first_name}!</Typography>
          </Box>
          <Box>
            <Button color="inherit" component={RouterLink} to="/login">Logout</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavDashboard;