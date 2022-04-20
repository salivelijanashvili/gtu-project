import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard() {
  return (
    <div className='cards'>
    <Card className='innerCard'>
    <CardActionArea>
        <CardMedia
          component="img"
          height="110"
          image="https://goochlandchurches.files.wordpress.com/2019/08/blue.jpg"
          alt="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <h6>Generate audience</h6>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Get the customized data about companies, people, and geography you need to get started
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="big" color="primary">
          Generate
        </Button>
      </CardActions>
      </Card>

      <Card className='innerCard'> 
    <CardActionArea>
        <CardMedia
          component="img"
          height="110"
          image="https://wallpaperboat.com/wp-content/uploads/2020/10/26/58172/lime-green-19.jpg"
          alt="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <h6>Enrich your data</h6>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Take your internal data further by enriching and expanding it with external data signals
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="big" color="primary">
          Enrich
        </Button>
      </CardActions>
      </Card>

      <Card className='innerCard'> 
    <CardActionArea>
        <CardMedia
          component="img"
          height="110"
          image="https://www.myfuturecom.com/wp-content/uploads/2019/01/iStock-952063608-1440x700.jpg"
          alt="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <h6>Discover predictive features</h6>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Build and optimize your predictions with impactful external data features, and deploy models or export features
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="big" color="primary">
          Predict
        </Button>
      </CardActions>
      </Card>


    </div>
  );
}