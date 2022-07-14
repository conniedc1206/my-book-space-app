import { React, useState } from 'react'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';


const defaultValues = {
  title: "",
  author: "",
  comment: "",
  star_rating: 0,
  // user_id: 
};

function AddLog() {
  
  const [formValues, setFormValues] = useState(defaultValues);
  
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
    // console.log(formValues)
  };

  const handleStarHandle = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
    // console.log(starValue)
  }
    
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
      fetch("/logs", configObj)
        .then((res) => res.json())
        .then((data) => console.log(data))
        // navigate(`/dashboard/${data.id}`));

      setFormValues(defaultValues);
      
    };
  

return (
  <div>
  <form onSubmit={handleSubmit}>
  <Box container sx={{ padding: "15px", m:2, border:1, height: "400px", width:"400px", borderRadius: 2}}>
      <Grid container alignItems="center" justify="center" direction="column" margin="2%">
      <Typography sx={{ fontFamily: 'Monospace' }} variant="h4" component="arial">Add New Log</Typography>
        <Grid item marginBottom="1%">
          <TextField
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
            />
        </Grid>

        <Grid item marginBottom ="1%">
          <TextField
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

          <TextField style={{height: '100%' }}
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