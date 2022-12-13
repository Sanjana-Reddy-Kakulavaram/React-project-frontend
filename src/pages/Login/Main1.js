



import React, {Component} from 'react';
import './Main1.css';
import { Login } from './Login';
import Register from './Register';
import '../../Styling.css'

export default class Main extends Component{
    state = {
        user: 1,
        loading: true,
        formSwitcher: false
    }
    
    formSwitcher = (action) => {
        console.log(action);
        this.setState({
            formSwitcher: action === 'register' ? true : false
        });
    }
    
    render(){

        const form = !this.state.formSwitcher ? <Login /> : <Register />;
        
        return(
            <div className='main'>
                <div className='mainBlock' style={{color:"black"}}>
                    {form}
                    {!this.state.formSwitcher ?
                        (<span className="underLine">
                            Not Registered? <button 
                            onClick={() => this.formSwitcher(!this.state.formSwitcher ? 'register' : 'login')} 
                            className='linkBtn'>Create an account</button>
                        </span>) : (
                            <span className="underLine">
                            Have an account? <button 
                            onClick={() => this.formSwitcher(!this.state.formSwitcher ? 'register' : 'login')} 
                            className="linkBtn">Sign in here</button>
                            </span>
                        )
                    }   
                    
                </div>
                
            </div>
        );
    }
}