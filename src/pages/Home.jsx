import React, { Component } from 'react'
import './Home.css'
import '../App.css'
import '../Styling.css'
import name from '../assets/22.png';

export default class Home extends Component {
  render() {
    return (
      <div className='home'>
      <div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        {/* <img src={name} height={150} width={350}/><br/> */}
        {/* <h1 style={{color: "black"}}>PayTrack</h1>
        <h3 style={{color: "black", alignContent: "center", marginTop: "10px", whiteSpace: "pre-line" }}>- You pay we track</h3> */}
        {/* <img src={logo} width={100} height={100}/> */}<br/><br/>
      </div><br/>

      {/* <div className='Block'> */}
      <div style={{color: "black"}}>
      <div className='mainBlock2' alignContent="left">
          <h1>Speak your transactions</h1>
      </div>
      <br/><br/>
      <div className='mainBlock3' alignContent="left">
          <h1>Save Spend Secure with PayTrack</h1>
      </div><br/><br/>
      <div className='mainBlock4' alignContent="left">
          <h1>Tracking made fun with PayTrack</h1>
      </div>
      </div>
      </div>
    )
  }
}


// import React from 'react'

// const Home = () => {
//   return (
//     <div>Home</div>
//   )
// }

// export default Home