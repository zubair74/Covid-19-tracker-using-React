import React,{useEffect} from 'react';
import {covidData} from '../api/api'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup'
import "../styles.css";

const useStyles = makeStyles({
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard({data: {confirmed,deaths,recovered,lastUpdate}}) {
  // console.log(confirmed.value);
  
  const classes = useStyles();
  const bull = <span>•</span>;

  if(!confirmed){
    return 'Loading... '

  }

  return (
    <div className = 'card-area'>
    <Card className= 'mycard'>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          INFECTED
        </Typography>
        <Typography variant="h5" component="h2">
        <CountUp start = {0} end = {confirmed.value} duration = {2.5} separator = ","/>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        {new Date(lastUpdate).toDateString()}
        </Typography>
        <Typography variant="body2" component="p">
          No of active cases of covid-19
        </Typography>
      </CardContent>
    </Card>

<Card className= 'mycard'>
<CardContent>
  <Typography className={classes.title} color="textSecondary" gutterBottom>
    RECOVERED
  </Typography>
  <Typography variant="h5" component="h2">
  <CountUp start = {0} end = {recovered.value} duration = {2.5} separator = ","/>
  </Typography>
  <Typography className={classes.pos} color="textSecondary">
  {new Date(lastUpdate).toDateString()}
  </Typography>
  <Typography variant="body2" component="p">
    No of recovered cases of covid-19
  </Typography>
</CardContent>
</Card>

<Card className= 'mycard'>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          DEATHS
        </Typography>
        <Typography variant="h5" component="h2">
        <CountUp start = {0} end = {deaths.value} duration = {2.5} separator = ","/>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        {new Date(lastUpdate).toDateString()}
        </Typography>
        <Typography variant="body2" component="p">
          No of deaths of covid-19
          
        </Typography>
      </CardContent>
    </Card>
    </div>
  );
}
