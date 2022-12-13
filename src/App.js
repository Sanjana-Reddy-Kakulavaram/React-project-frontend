import React, { useReducer, createContext, useState, useContext } from 'react';
import Navbar from './components/Navbar';
//import './App.css';
//import Home from './website/components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main1 from './pages/Login/Main1';
import Home from './pages/Home.jsx';
import Display from './pages/Display.jsx';
import Transactions from './pages/Transactions.jsx';
import Logout from './pages/Login/Logout'; 
import History from "./pages/History";
import Footer from './components/Footer/Footer.js';
import { initialState, reducer } from './reducer/UseReducer';
import { Contactus } from './pages/Login/Contactus';

export const UserContext = createContext();

function App() {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <UserContext.Provider value={{state, dispatch}}>
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
         <Route path="/Display" element={<Display />} />
         {/* <Route path="/Login" element={<Login />} /> */}
         <Route path="/Main1" element={<Main1 />} />
         <Route path="/Contactus" element={<Contactus />} />

         <Route path="/transactions" element={<Transactions />} />
          <Route path="/history" element={<History />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
    {/* <Footer /> */}
    </UserContext.Provider>
  );
}

export default App;








// import './App.css';
// import React, { useReducer, createContext, useState, useContext } from 'react';
// import { NavBar } from './components/navbar/NavBar';
// import Home from './pages/Home';
// import Main1 from './pages/Login/Main1';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Display from './pages/Display';
// import Transactions from "./pages/Transactions.jsx";
// import Logout from './pages/Login/Logout';
// import History from "./pages/History";
// import { initialState, reducer } from './reducer/UseReducer';
// import Dashboard from './pages/Dashboard';
// import SideBar from './components/navbar/SideBar';

// //import { Login } from './components/Forms/Login';
// // import Register from './components/Forms/Register';
// //import Dashboard from './components/Forms/Dashboard';
// // import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// //import ShowHistory from './components/Forms/ShowHistory';
// //import { BarChart, Dashboard } from '@material-ui/icons';
// //import { Login2 } from './components/Forms/Login2';

// export const UserContext = createContext();

// const App = () =>{

//   const [state, dispatch] = useReducer(reducer, initialState)


//   return (
//     <UserContext.Provider value={{state, dispatch}}>
//     {/* <Display /> */}
//     <Router>
//       <NavBar />
//       <Routes>
//          <Route path="/" element={<Home />} />
//          <Route path="/Display" element={<Display />} />
//          {/* <Route path="/Login" element={<Login />} /> */}
//          <Route path="/Main1" element={<Main1 />} />


//           <Route path="/transactions" element={<Transactions />} />
//           <Route path="/history" element={<History />} />
//           <Route path="/logout" element={<Logout />} />
//           <Route path="*" element={<> not found</>} />

//        </Routes>
//      </Router>
//      </UserContext.Provider>

//   )
// }
// export default App;