import React, { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Footer from './Footer'
import NavLogIn from "./NavLogIn";
import { Grid, TextField, Button, IconButton, InputAdornment, Alert } from '@mui/material'
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const defaultValues = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
};

function Signup() {
  const [formValues, setFormValues] = useState(defaultValues);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();
  
  const handleClickShowPassword = () => {
    setShowPassword((currentState) => !currentState);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setFormValues({
      ...formValues,
      [e.target.name]: value,
    });
  };

  function handleSubmit(e){
    e.preventDefault()
    fetch('https://my-book-space-backend.herokuapp.com/users', {
        method:'POST',
        headers:{'Content-Type': 'application/json', 'Accept': 'application/json'},
        body: JSON.stringify({ ...formValues }),
    })
    .then(res => {
        if(res.ok){
            res.json().then(user => {
                // set current user here
                // setCurrentUser(user)
                // need to route user to their newsfeed page/home page
                navigate(`/users/${user.id}`)
            })
        } else {
          res.json().then(json => setErrors(Object.entries(json.errors)))
        }
    })
    setFormValues(defaultValues)
  }

  return (
    <>
      <NavLogIn />
      <div>
        <form onSubmit={handleSubmit}>
          <Grid
            container
            alignItems="center"
            justify="center"
            direction="column"
            marginTop="2%"
          >
            <h2>Sign up</h2>
            <Grid item marginBottom="1%">
              <TextField
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
                id="first-name-input"
                name="first_name"
                label="First Name"
                type="text"
                value={formValues.first_name || ""}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item marginBottom="1%">
              <TextField
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
                id="last-name-input"
                name="last_name"
                label="Last Name"
                type="text"
                value={formValues.last_name || ""}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item marginBottom="1%">
              <TextField
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
                id="email-input"
                name="email"
                label="Email"
                type="text"
                value={formValues.email || ""}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item marginBottom="1%">
              <TextField
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="start"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                id="password-input"
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                value={formValues.password || ""}
                onChange={handleInputChange}
                required
              />
            </Grid>
            { errors.length === 0 ? null: <Alert severity="error">{errors[0][1]}</Alert> }
            <Grid item>
              <Button type="submit" variant="contained">
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </form>
        <Grid container alignItems="center" justify="center" direction="column">
          <Grid item sx={{ mt: 2 }}>
            <Button
              type="submit"
              variant="contained"
              component={RouterLink}
              to="/login"
            >
              Login Instead
            </Button>
          </Grid>
        </Grid>
        <Footer />
      </div>
    </>
  );
}

export default Signup;
