import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {
    Link as RouterLink,
  } from 'react-router-dom';

function NavSignUp() {
    
    return (
      <Box>
        <AppBar position="static">
          <Toolbar>
            <Box sx={{ ml: 2, flexGrow: 1 }}>
              <Typography sx={{ fontSize: 20 }}>Welcome to My Book Space!</Typography>
            </Box>
            <Box>
              <Button color="inherit" component={RouterLink} to="/">Sign Up</Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }

export default NavSignUp;