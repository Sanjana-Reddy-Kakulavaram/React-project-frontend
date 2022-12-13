import React,{Component} from "react";
import axios from "axios";
import './Login.css';
class Register extends Component{
    state = {
        name: '',
        email: '',
        phno: '',
        state: '',
        city: '',
        password: '',
        repassword: '',
        records: [],
        mails: [],
        fireErrors: ''
    }

    getDetails(){
        console.log(this.state.password, this.state.repassword);
        if(this.state.password == this.state.repassword){
        axios.get('http://localhost:3000/fetch').then((result) => {
          this.state.records = result.data;
        var flag = 0;
      for(var i=0; i<this.state.records.length; i++)
      {
          if((this.state.records[i].email === this.state.email) == true)
          {
            alert("E-mail already exists");
            flag = 1;
            return;
          }
      }
      if(flag == 0)
      {
      axios.post('http://localhost:3000/insert', this.state).then((result) => {
            console.log(result);
        }).catch(error => {
            console.log(error)
        })
        }
         })
        }
        else{
            alert("Please enter password details correctly!!");
            return;
        }
    }

    changeHandler = (event) =>{
        this.setState({[event.target.name]: event.target.value})
    }

    handleSubmit = (event) =>{
        var ans = this.getDetails();
        
      event.preventDefault()
    }

    render() {
        return(
            <div>
            {/* <form onSubmit={this.handleSubmit}> */}
            <form onSubmit={this.handleSubmit}>
                <input required minLength={5} maxLength={50}
                type = "name"
                name="name"
                className="regField"
                placeholder="enter your name"
                onChange={this.changeHandler}
                /><br/><br/>
                <input required
                type="email"
                name="email"
                className="regField"
                placeholder="enter an email"
                onChange={this.changeHandler}
                // onChange = {this.validateEmail}
                /><br/><br/>
                <input required minLength={10} maxLength={13}
                type="number" 
                name="phno"
                className="regField"
                placeholder="enter your contact number"
                onChange={this.changeHandler}
                /><br/><br/>
                <input required
                type="text"
                name="state"
                className="regField"
                placeholder="enter your state"
                onChange={this.changeHandler}
                /><br/><br/>
                <input required
                type="text"
                name="city"
                className="regField"
                placeholder="enter your city"
                onChange={this.changeHandler}
                /><br/><br/>
                <input required minLength={4}
                    type="password"
                    name="password"
                    className="regField"
                    placeholder="enter a password"
                    onChange={this.changeHandler}
                /><br/><br/>
                <input required minLength={4}
                    type="password"
                    name="repassword"
                    className="regField"
                    placeholder="re-enter the password"
                    onChange={this.changeHandler}
                /><br/><br/>
        <button className="button" type="submit"> Register </button>
        </form></div>
        );
    }
}
export default Register;