import React, { useEffect, useRef } from 'react';
import { Grid } from '@material-ui/core';
import useStyles from './styles';
import ShowHistory from '../components/ShowHistory/ShowHistory';
import SideBar from '../components/navbar/SideBar';
import '../Styling.css'


const History = () => {
    const classes = useStyles();
  return (
    <div className='history'>
      <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{height: '100vh' }}>
        <Grid item xs={9} sm={4}>  
        <ShowHistory title="Income" />
        </Grid>
        <Grid item xs={9} sm={4}>  
          <ShowHistory title="Expense" />
        </Grid>
      </Grid> 
    </div>
  )
}

export default History