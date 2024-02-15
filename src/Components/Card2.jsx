import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Button } from '@mui/material';

export default function AddtoCard({title , description  , image , prices , category , Addtocard}) {
  const theme = useTheme();


  return (
    <Card sx={{ display: 'flex' , marginLeft: 5 , justifyContent: 'space-evenly', mr: 5, mt: 5}}>
         <CardMedia
        component="img"
        sx={{ width: 250, height: 150 , mt: 5,   ml: 2 }}
        image={image}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' , marginLeft: 10 , mt: 1,  }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography  component="div" variant="h5">
            {title}
          </Typography>
          <Typography sx={{mt:2}} variant="subtitle1" color="text.secondary" component="div">
            {description}
          </Typography>
          <Typography sx={{mt:0}} variant="subtitle1" color="text.secondary" component="div">
            {`Price: ${prices}`} <br />
            <Button variant='contained' sx={{mt: 1}}>Buy</Button>
          </Typography>
          
        </CardContent>
       
      </Box>
     
    </Card>
  );
}