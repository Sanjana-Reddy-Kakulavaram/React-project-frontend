import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios';
import '../Display';
import { useNavigate } from 'react-router-dom';
//import Home from './Home';
import { UserContext} from '../../App';


export const Login = () => {

  const navigate = useNavigate();

  const initialValue = {email:'', password:''}
  const [states, setStates] = React.useState(initialValue);
  const {state, dispatch} = useContext(UserContext);

  // const [Errors, setErrors] = useState({});
  // const [Submit, setSubmit] = useState(false);

  const changeHandler = (event) =>{
    const { name, value } = event.target;
    setStates({ ...states, [name]: value });
  }

  // const NavigatePage = (event) =>{
  //   navigate('/');
  // }

  useEffect(() => {
    localStorage.setItem('email', states.email);
  }, [states.email]);

  const GetDetails = (event) =>{
    // let history = useHistory();
      axios.get('http://localhost:3000/fetch').then((result) => {
      //setState(...state, {[records] : result.data});
      var records = result.data;
      var flag = 0;
      for(var i=0; i<records.length; i++)
      {
        console.log(states.email, states.password);
        if((records[i].email === states.email && records[i].password == states.password))
        {
          flag = 1;
          break;
        }
      }
      console.log(flag);
      if(flag === 0)
      {
        alert("Enter valid login details");
        return;
      }
      else
      {
        dispatch({type: 'USER', payload: true});
        navigate('/Display', { replace: true });
      }
    })
  }

  const handleSubmit = (event) =>{
    //alert("Success!!");
    //NavigatePage();
    GetDetails();
    event.preventDefault();
  }


  return (
    <center>
    <div>
    <form onSubmit={handleSubmit}>
                    <input type = "text" 
                        className="regField"
                        placeholder="Email"
                        value={states.email}
                        onChange={changeHandler}
                        name="email"/><br/><br/>

                    <input type = "password" 
                        className="regField"
                        placeholder="Password"
                        value={states.password}
                        onChange={changeHandler}
                        name="password"/>

                    <input type="submit" className="submitBtn" value="ENTER"/><br/><br/><br/>

                </form>
    </div>
    </center>
  )
}

















// import React,{Component} from "react";
// import axios from "axios";
// import './Login.css';


// //import Home from "./Home";
// //import Dashboard from "./Dashboard";
// //import { BrowserRouter as Router } from 'react-router-dom';

// // import IconButton from "@material-ui/core/IconButton";
// // import InputLabel from "@material-ui/core/InputLabel";
// // import Visibility from "@material-ui/icons/Visibility";
// // import InputAdornment from "@material-ui/core/InputAdornment";
// // import VisibilityOff from "@material-ui/icons/VisibilityOff";
// // import Input from "@material-ui/core/Input";

// class Login extends Component{
    
//     state = {
//         email: '',
//         password: '',
//         showPassword: false,
//         record: [],
//         fireErrors: '',
//     }

//     changeHandler = (event) =>{
//         this.setState({[event.target.name]: event.target.value})
//     }


//       getDetails = (event) =>{
//         axios.get('http://localhost:3000/fetch').then((result) => {
//             this.state.records = result.data;
//           var flag = 0;
//         for(var i=0; i<this.state.records.length; i++)
//         {
//             if((this.state.records[i].email === this.state.email && this.state.records[i].password == this.state.password))
//             {
//               flag = 1;
//               break;
//             }
//         }
//         console.log(flag);
//         if(flag == 0)
//         {
//         alert("Enter valid login details");
//         return;
//         }
//         else
//         {
//         alert("Welcome!!");
//         }
//         })
//       }

//       handleSubmit = (event) =>{
//         //return this.getDetails();
//         return this.getDetails();
        
//         event.preventDefault()
//     }

//     // handleClickShowPassword = () => {
//     //     this.state.showPassword =  !this.state.showPassword;
//     //   };
      
//     //   handleMouseDownPassword = (event) => {
//     //     event.preventDefault();
//     //   };
    
    
//     render() {
//         //const { navigation } = this.props;

//         //let history = useHistory();

//         return(
//             <>
//                 <form onSubmit={this.handleSubmit}>
//                     <input type = "text" 
//                         className="regField"
//                         placeholder="Email"
//                         onChange={this.changeHandler}
//                         name="email"/><br/><br/>

//                     <input type = "password" 
//                         className="regField"
//                         placeholder="Password"
//                         onChange={this.changeHandler}
//                         name="password"/>

//                     {/* <Input className="regField"
//                         name="password"
//                         type={this.state.showPassword ? "text" : "password"}
//                         onChange={this.changeHandler}
//                         value={this.state.password}
//                         endAdornment={
//                         <InputAdornment position="end">
//                             <IconButton
//                             onClick={this.handleClickShowPassword}
//                             onMouseDown={this.handleMouseDownPassword}
//                             >
//                             {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
//                             </IconButton>
//                         </InputAdornment>
//                         }
//                     /><br/> */}

//                     <input type="submit" className="submitBtn" value="ENTER"/><br/><br/><br/>

//                 </form>
//             </>
//         );
//     }
// }
// export default Login;