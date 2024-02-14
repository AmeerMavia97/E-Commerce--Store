import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Cards({image , title , description , price , showmore}) {
  return (

    <Card sx={{ marginLeft: 20, mt: 6,  width: 280 }}>
      <CardContent>
        
        <CardMedia
        component="img"
        height="194"
        image={image}
        alt="Paella dish"
      />
        <Typography variant="h5" component="div">
         {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {description}
        </Typography>
        <Typography variant="body2">
          {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={showmore} size="small">Show More</Button>
      </CardActions>
    </Card>


  );
}