import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
    marginTop: 20
  },
  media: {
    height: 140,
  },
};

function CityCard(props) {
  const { classes, weatherData: { name, main, wind } } = props;
  console.log(props.weatherData)

  return (
    <Card className={classes.card}>
      <CardActionArea>
        {/*<CardMedia*/}
        {/*  className={classes.media}*/}
        {/*  image=""*/}
        {/*  title="Contemplative Reptile"*/}
        {/*/>*/}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography component="ul" className="list-group list-group-flush">
              <li className="list-group-item">Current: {main.temp}°</li>
              <li className="list-group-item">High: {main.temp_max}°</li>
              <li className="list-group-item">Low: {main.temp_min}°</li>
              <li className="list-group-item">Wind Speed: {wind.speed} mi/hr</li>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

CityCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CityCard);
