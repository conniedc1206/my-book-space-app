import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import DeleteIcon from '@mui/icons-material/Delete';

function LogItem( { log, setEditLog } ) {
  const [imageUrl, setImageUrl] = useState("")
  const { title, author, created_at, star_rating, id } = log

  const [reloadPage, setReloadPage] = useState(false)

  const created_at_readable = created_at.slice(0, 10)

  const navigate = useNavigate()

  function handleClick() {
    setEditLog(log)
    navigate(`/logs/${id}`)
  }

  function handleDeleteClick(e){
    e.stopPropagation()
    fetch(`/logs/${id}`, {method: "DELETE"})
    setReloadPage((currentState) => !currentState)
    window.location.reload(reloadPage)
  }

  // get image_url: try to save image in log object?
  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${title}`)
    .then(resp => resp.json())
    .then(data => setImageUrl(data.items[0].volumeInfo.imageLinks.thumbnail))
  }, []);


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
      subheader={author ? author : "Unknown Author"}
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
      image={imageUrl}
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

export default LogItem;