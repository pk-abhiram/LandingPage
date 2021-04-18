import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import places from '../static/places';
import useWindowPosition from '../hooks/useWindowPosition';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  divider: {
    width: '5px',
    background: '#000',
    maxHeight: '300px',

    transform: 'translateY(30%)',
  },
  divider2: {
    width: '5px',
    background: '#000',
    maxHeight: '300px',

    transform: 'translateY(60%)',
  },
}));
export default function FunctionName() {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
    <div className={classes.root} id='place-to-visit'>
      <ImageCard place={places[0]} checked={checked} />
      <ImageCard place={places[1]} checked={checked} />
    </div>
  );
}
