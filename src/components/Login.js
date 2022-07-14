import React, { useState } from "react";
import { Link, Routes, Route, useNavigate, useParams } from "react-router-dom";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const defaultValues = {
  email: "",
  password: "",
};

// const defaultUser = {
//   id: 0,
//   first_name: "",
//   last_name: "",
//   email: "",
//   password: "",
//   logs: [],
//   created_at: "",
//   updated_at: "",
// };

function Login() {
  const [formValues, setFormValues] = useState(defaultValues);
  const [showPassword, setShowPassword] = useState(false);
  // const [currentUser, setCurrentUser] = useState(defaultUser);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  // console.log(setFormValues)

  const handleSubmit = (e) => {
    e.preventDefault();

    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ ...formValues }),
    };

    fetch("/login", configObj)
      .then((res) => res.json())
      .then((data) => navigate(`/users/${data.id}`));

    setFormValues(defaultValues);
  };
  // navigate(`/dashboard/${data.id}`)

  const handleClickShowPassword = () => {
    setShowPassword((currentState) => !currentState);
  };

  return (
    <div>
      Log in
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
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="start"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              id="password-input"
              name="password"
              label="password"
              type={showPassword ? "text" : "password"}
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
}

export default Login;
