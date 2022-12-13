import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SideBar from "../components/navbar/SideBar";
import "../App1.css";
import Home from './Home';

//import Profile from "./pages/Profile";
//import Setting from "./pages/Setting";
// import Transactions from "./Transactions";
// import LogOut from "./LogOut";
// import History from "./History";
// import Dashboard from './Dashboard';

const Display = () => {
    return (
        <Home />
        // <Router>
        //   <SideBar>
        //     <Routes>
        //       <Route path="/" element={<Dashboard />} />
        //       <Route path="/transactions" element={<Transactions />} />
        //       <Route path="/history" element={<History />} />
        //       <Route path="/logout" element={<LogOut />} />
        //       <Route path="*" element={<> not found</>} />
        //     </Routes>
        //   </SideBar>
        // </Router>
  
  
    //   <>
  //   <nav>
  //       <div>
  //           <Link to="/" onClick={<Dashboard />}>
  //               Dashboard           
  //           </Link>
  //           <Link to="/transactions" onClick={<Dashboard />}>
  //               Transactions           
  //           </Link>
  //           <Link to="/history" onClick={<Transactions />}>
  //               History           
  //           </Link>
  //           <Link to="/logout" onClick={<LogOut />}>
  //               Dashboard           
  //           </Link>
  //           <Link to="*" onClick={<>Not found</>}>
  //               Dashboard           
  //           </Link>
          
  //       </div>
  //   </nav>
  // </>
      )
}

export default Display