import { React, useState, useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import NavEdit from './NavEdit'
import Footer from './Footer';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import DeleteIcon from '@mui/icons-material/Delete';

const defaultValues = {
  id: undefined,
  title: "",
  author: "",
  comment: "",
  star_rating: undefined,
};

function LogDetails({ editLog }) {
  const [formValues, setFormValues] = useState(defaultValues);
  const [imageUrl, setImageUrl] = useState("")

  const { title, author, comment, star_rating } = editLog

  console.log(editLog)
  
  let {id} = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    fetch(`https://my-book-space-backend.herokuapp.com/logs/${id}`)
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
    fetch(`https://my-book-space-backend.herokuapp.com/logs/${id}`, configObj)
      .then((res) => res.json())
      .then(updatedLog => navigate(`/users/${updatedLog.user_id}`))
      // navigate(`/dashboard/${updatedLog.user_id}`)
    
      setFormValues(defaultValues)
  };

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${title}`)
    .then(resp => resp.json())
    .then(data => setImageUrl(data.items[0].volumeInfo.imageLinks.thumbnail))
  }, []);

  return (
  <>
  <NavEdit />
    <Box container sx={{ display: "flex", alignItems: "center", justify: "space-between" }}>
    <Card item
      sx={{ m: 2,
        width: "300px",
        height: "92%",
        flexShrink: 0,
        "&:hover": {
          boxShadow: 20,
          transition: "1s"
        },
      }}
      >
        <CardHeader
        avatar={
          <MenuBookIcon />
        }
        title={title}
        subheader={author ? author : "Unknown Author"}
        >
        </CardHeader>
        <CardMedia
        component="img"
        height="60%"
        image={imageUrl}
        />
        <CardContent>
          <Typography style={{ wordWrap: "break-word" }}>
            Comment: {comment}
          </Typography>
        </CardContent>
        <CardContent sx={{ display: "flex" }}>
          <Typography>Your rating: </Typography>
          <Rating name="read-only" value={star_rating} readOnly sx={{ flexGrow: 1 }} />
        </CardContent>
      </Card>
        <form onSubmit={handleSubmit}>
        <Box container sx={{ padding: "15px", 
          m:2, 
          border:1, 
          height: "400px", 
          width:"400px", 
          borderRadius: 2, 
          mt: 5 }}
        >

      <Grid container alignItems="center" justify="center" direction="column" margin="2%">
      <Typography sx={{ fontFamily: 'Monospace', lineHeight: 2}} variant="h4" mt={2} component="arial">Edit Log Details</Typography>
        <Grid item marginBottom="2%">
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

        <Grid item marginBottom ="2%">
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
    <Footer />
  </Box>
  </>
)
}

export default LogDetails

      

