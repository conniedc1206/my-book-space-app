import { React, useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';

const defaultValues = {
  id: undefined,
  title: "",
  author: "",
  comment: "",
  star_rating: undefined,
};

function LogDetails({user}) {
  const [formValues, setFormValues] = useState(defaultValues);
  
  let {id} = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`/logs/${id}`)
      .then((res) => res.json())
      .then((log) => setFormValues(log));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues, 
      [name]: value,
      id: parseInt(id)
    });
  };

  const handleStarHandle = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formValues)
    const configObj = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ ...formValues }),
    };
    fetch(`/logs/${id}`, configObj)
      .then((res) => res.json())
      .then(updatedLog => navigate(`/dashboard/${updatedLog.user_id}`))
      // navigate(`/dashboard/${updatedLog.user_id}`)
    
      setFormValues(defaultValues)
  };


  return (
    <div>
    <form onSubmit={handleSubmit}>
    <Box container sx={{ padding: "15px", m:2, border:1, height: "400px", width:"400px", borderRadius: 2}}>

      <Grid container alignItems="center" justify="center" direction="column" margin="2%">
      <Typography sx={{ fontFamily: 'Monospace', lineHeight: 2}} variant="h4" mt={2} component="arial">LOG Details</Typography>
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
            label="Book Title"
            type="text"
            value={formValues.book_title}
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
            label="Book Author"
            type="text"
            value={formValues.book_author}
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
            label="Book Comment"
            type="comment"
            value={formValues.book_comment}
            onChange={handleChange}
            />

        <Box component="fieldset" mb={3} borderColor="transparent">
          <Typography sx={{ fontFamily: 'Monospace' }}>My Book Rating:</Typography>
          <Rating
            name="star_rating"
            value={formValues.star_rating}
            onChange={handleStarHandle}
          />
        </Box>


        <Button variant="contained" color="secondary" type="submit">
          Edit
        </Button>

        </Grid>
        </Box>
    </form>
  </div>
)
}

export default LogDetails