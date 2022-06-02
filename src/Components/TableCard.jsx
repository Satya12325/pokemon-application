import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';





export default function TableCard({ distance,id,image, title,cost,codeName}){



    return(
        <Card sx={{ maxWidth: 345,marginTop:"10px" }}>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Code Name {codeName}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
           Total Cost {cost}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           Distane : {distance}
          </Typography>
        </CardContent>
       
      </Card>
    )
}