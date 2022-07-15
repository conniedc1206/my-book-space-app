import React from 'react';
import { useNavigate } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {
  Link as RouterLink,
} from 'react-router-dom';

function NavEdit() {

  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }
  
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Box> 
            <ArrowBackIosIcon 
            onClick={goBack}
            sx={{ "&:hover": {
              cursor: "pointer"
            },
          }}
          />
          </Box>
          <Box sx={{ ml: 2, flexGrow: 1 }}>
            <Typography sx={{ fontSize: 20 }}>Edit your log</Typography>
          </Box>
          <Box>
            <Button color="inherit" component={RouterLink} to="/login">Logout</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavEdit;