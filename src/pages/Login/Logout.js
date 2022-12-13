import { UserContext } from "../../App.js";
import { useNavigate } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import Home from "../Home.jsx";


const Logout = () => {
    const navigate = useNavigate()
    const {state, dispatch} = useContext(UserContext);
    //console.log(state + "***");
    dispatch({type:'USER', payload:false})
    useEffect(() => {
        navigate("/Home", {replace: true});
    })
    return (
        <div></div>
    )
}
export default Logout;