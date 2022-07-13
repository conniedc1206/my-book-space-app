import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputAdornment from '@mui/material/InputAdornment';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
// import IconButton from '@mui/material/IconButton';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';


  // let showPassword = false

  const defaultValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: ""
  }

function Signup() {

  const [formValues, setFormValues] = useState(defaultValues)

  const handleInputChange = (e) => {
    const value = e.target.value
    setFormValues({
      ...formValues,
      [e.target.name]: value
    })
  };

  function handleSubmit(e){
    e.preventDefault()
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ ...formValues }),
    }
    fetch("http://localhost:9292/users", configObj)
    setFormValues(defaultValues)
  }

  function handleLogInClick(){
    console.log('login instead')
  }

  // const handleClickShowPassword = () => {
  //     showPassword = !showPassword
  // };

  // const handleMouseDownPassword = (e) => {
  //   e.preventDefault();
  // };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container alignItems="center" justify="center" direction="column" margin="2%">
          <h2>Sign up</h2>
            <Grid item marginBottom="1%">
              <TextField
                InputLabelProps={{ shrink: true }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  )
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
                  )
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
                  )
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
                    <InputAdornment position="start">
                      <PasswordIcon />
                    </InputAdornment>
                  ),
                  // endAdornment: (
                  //   <InputAdornment position="end">
                  //     <IconButton
                  //       aria-label="toggle password visibility"
                  //       onClick={handleClickShowPassword}
                  //       onMouseDown={handleMouseDownPassword}
                  //       edge="end"
                  //     >
                  //       {showPassword ? <VisibilityOff /> : <Visibility />}
                  //     </IconButton>
                  //   </InputAdornment>
                  // )
                }}
                id="password-input"
                name="password"
                label="Password"
                type="password"
                // type={showPassword ? "text" : "password"}
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
        <Grid container alignItems="center" justify="center" direction="column" margin="2%">      
          <Grid item>
            <Button type="submit" variant="contained" onClick={handleLogInClick}>
              Login Instead
            </Button>
          </Grid>
        </Grid>
    </div>
  )
}

export default Signup;
  
  