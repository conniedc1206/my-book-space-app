import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import DeleteIcon from '@mui/icons-material/Delete';

function LogItem( { log } ) {

  const { title, author, image_url, created_at, star_rating, id } = log

  const created_at_readable = created_at.slice(0, 10)

  const navigate = useNavigate()

  function handleClick() {
    navigate(`/logs/${id}`)
  }

  function handleDeleteClick(){
    console.log("Are you sure you want to delete this log?")
  }

  return (
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
      subheader={author}
      >
      </CardHeader>
      <CardMedia 
      onClick={handleClick}
      sx={{ "&:hover": {
        cursor: "pointer"
      },  
    }}
      component="img"
      height="60%"
      image={image_url}
      />
      <CardContent>
        <Typography>
          Logged on {created_at_readable}
        </Typography>
      </CardContent>
      <CardContent sx={{ display: "flex" }}>
        <Typography>Your rating: </Typography>
        <Rating name="read-only" value={star_rating} readOnly sx={{ flexGrow: 1 }} />
        <DeleteIcon 
        onClick={handleDeleteClick}
        sx={{ "&:hover": {
          cursor: "pointer",
        }}} />
      </CardContent>
    </Card>
  )
}

export default LogItem

// cardheader title will end up being the title of the book