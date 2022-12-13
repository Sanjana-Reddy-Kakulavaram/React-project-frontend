import React, { useEffect, useRef, useContext } from 'react';
import { Grid } from '@material-ui/core';
import { PushToTalkButton, PushToTalkButtonContainer, ErrorPanel } from '@speechly/react-ui';
import { SpeechState, useSpeechContext } from '@speechly/react-client';
import useStyles from './styles';
import Details from "../components/Details/Details";
import Main from "../components/Main/Main";
import SideBar from '../components/navbar/SideBar';
import '../Styling.css'



const Transactions = () => {


  const classes = useStyles();
  const { speechState } = useSpeechContext();
  return (
    <div className="transactions">
      <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{height: '80vh' }}>
      <Grid item xs={5} sm={4}>  
        <Details title="Income" />
        </Grid>
        <Grid item xs={5} sm={3}>  
          <Main/>
        </Grid>
        <Grid item xs={5} sm={4}>  
          <Details title="Expense" />
        </Grid>
      </Grid> 
      <PushToTalkButtonContainer>
          <PushToTalkButton />
          <ErrorPanel />
      </PushToTalkButtonContainer> 
    </div> 
  );
}

export default Transactions