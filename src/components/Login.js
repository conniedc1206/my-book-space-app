import React, { useState } from 'react'
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import InputAdornment from '@mui/material/InputAdornment';

const defaultValues = {
  email: "",
  password: ""
};

function Login() {
 
  const [formValues, setFormValues] = useState(defaultValues);
  

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
  console.log(formValues)
}


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
            )
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
            )
          }}
            id="password"
            name="Password"
            label="Password"
            type="password"
            value={formValues.name}
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