import { React, useState } from 'react';
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const defaultValues = {
  user_id: undefined,
  title: "",
  author: "",
  comment: "",
  star_rating: 0,
};

function AddLog({user}) {
  const [formValues, setFormValues] = useState(defaultValues);
  const [reloadPage, setReloadPage] = useState(false)
  
  const navigate = useNavigate()
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
      user_id: user.id
    });
  };
  
  const handleStarHandle = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
      user_id: user.id
    });
  }

  console.log(formValues)

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formValues)
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({...formValues}),
    };
    fetch(`https://my-book-space-backend.herokuapp.com/users/${user.id}`, configObj)
      .then((res) => res.json())
      .then((data) => console.log(data))

    setFormValues(defaultValues);
    setReloadPage((currentState) => !currentState)
    window.location.reload(reloadPage)
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
    <Box container sx={{ padding: "15px", m:2, border:1, height: "400px", width:"400px", borderRadius: 2 }}>
        <Grid container alignItems="center" justify="center" direction="column" margin="2%">
        <Typography sx={{ fontFamily: "Monospace", mb: 1 }} variant="h4" >Add New Log</Typography>
          <Grid item marginBottom="1%">
            <TextField
            sx={{ mb: 1 }}
              InputLabelProps={{ shrink: true }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                  </InputAdornment>
                )
              }}
              id="title"
              name="title"
              label="Title"
              type="text"
              value={formValues.title}
              onChange={handleChange}
              required
              />
          </Grid>
          <Grid item marginBottom ="1%">
            <TextField
              sx={{ mb: 1 }}
              InputLabelProps={{ shrink: true }}
              InputProps= {{
                startAdornment: (
                  <InputAdornment position="start">
                  </InputAdornment>
                )
              }}
              id="author"
              name="author"
              label="Author"
              type="text"
              value={formValues.author}
              onChange={handleChange}
              />
          </Grid>
            <TextField style={{height: "100%" }}
            InputLabelProps={{ shrink: true }}
            InputProps= {{
              startAdornment: (
                <InputAdornment position="start">
                </InputAdornment>
              )
            }}
            id="comment"
              name="comment"
              label="Comment"
              type="comment"
              value={formValues.comment}
              onChange={handleChange}
              />
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Typography sx={{ fontFamily: 'Monospace' }}>My Rating:</Typography>
            <Rating
              name="star_rating"
              value={formValues.star_rating}
              type="number"
              onChange={handleStarHandle}
            />
          </Box>
          <Button variant="contained" color="secondary" type="submit">
            Submit
          </Button>
          </Grid>
      </Box>
      </form>
    </div>
    )
};
export default AddLog