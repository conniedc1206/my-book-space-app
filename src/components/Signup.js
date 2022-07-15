import React, { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Footer from './Footer'
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import NavLogIn from "./NavLogIn";
import IconButton from "@mui/material/IconButton";
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

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setFormValues({
      ...formValues,
      [e.target.name]: value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ ...formValues }),
    };
    fetch("/users", configObj)
      .then((res) => res.json())
      .then((data) => navigate(`/users/${data.id}`));

    setFormValues(defaultValues);
  }

  const handleClickShowPassword = () => {
    setShowPassword((currentState) => !currentState);
  };

  // this function prevents the field from being left when the icon is clicked
  //   but the cursor is sent to the front of the field making it more awkward
  //   than the field being left all together

  // const handleMouseDownPassword = (e) => {
  //   e.preventDefault();
  // };

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
                        // onMouseDown={handleMosueDownPassword}
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
              />
            </Grid>
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
