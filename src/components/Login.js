import React, { useState } from 'react'
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';



const defaultValues = {
  email: "",
  password: "",
  // showPassword: false
};

function Login() {
 
  const [formValues, setFormValues] = useState(defaultValues);
  const [showPassword, setShowPassword] = useState(false)
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };
// console.log(setFormValues)

const handleSubmit = (e) => {
  e.preventDefault();

  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({ ...formValues }),
  }

  fetch("http://localhost:9292/login", configObj)
 
  setFormValues(defaultValues)
  console.log(formValues)
}

const handleClickShowPassword = () => {
  setShowPassword((currentState) => !currentState)
};

  return (
    <div>Log in
      <form onSubmit={handleSubmit}>
      <h1>Log in to your Book Space</h1>
      <Grid container alignItems="center" justify="center" direction="column">
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
            id="email"
            name="email"
            label="Email"
            type="text"
            value={formValues.email}
            onChange={handleChange}
          />
        </Grid>
      </Grid>

      <Grid container alignItems="center" justify="center" direction="column">
        <Grid item marginBottom="1%">
          <TextField
           InputLabelProps={{ shrink: true }}
           InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PasswordIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }}
            id="password-input"
            name="password"
            label="password"
            type={formValues.showPassword ? "text" : "password"}
            value={formValues.password || ""}
            onChange={handleChange}
          />
        </Grid>

      <Button variant="contained" type="submit">
        Login
      </Button>

      <Button variant="contained" type="submit">
        Sign up instead
      </Button>
      </Grid>
    </form>
    </div>
  );
};

export default Login