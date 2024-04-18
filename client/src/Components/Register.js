import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./Register.css"
import context from './Context';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: ''
  });

//   const history = useHistory();
//   const { user, setUser} = useContext(context);

  const { username, password, email } = formData;
//   const { username, password} = formData;
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      const res = await axios.post('http://localhost:3001/Register', {
        username,
        password,
        email
      });
    //   setUser({
    //     username,
    //     password,
    //     email
    //   })
      console.log(res.data); // Assuming backend returns confirmation upon successful registration
      // Redirect or perform actions after successful registration
    //   history.push('/timeline');
  };


return (
    <div>
            <div className='container'>
                <div className='div-1'>
                    <div className='sub-div-1'>
                        <i classname="fa fa-twitter icon"></i>
                    </div>
                </div>
                <div className='div-2'>
                    <div className='sub-div-2'>
                        <h3>Sign Up to Twitter Account</h3>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                            <div class='div-3'>
                                <div class='sub-div-3'>
                                    
                                    <label htmlFor="username">username</label>
                                    <br></br>
                                    <input type='text' 
                                        id="username"
                                            name="username"
                                            value={username}
                                            onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div class='div-3'>
                                <div class='sub-div-3'>
                                    
                                    <label htmlFor="email">email</label>
                                    <br></br>
                                    <input type='email' 
                                        id="email"
                                            name="email"
                                            value={email}
                                            onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div class='div-4'>
                                <div class='sub-div-4'>
                                    <label  htmlFor="password">Password</label>
                                    <br></br>
                                    <input 
                                        type="password"
                                        id="password"
                                        name="password"
                                        value={password}
                                        onChange={handleChange}
                                    /> 
                                </div>
                            </div>
                            <div class='div-5'>
                                <div class='sub-div-5'>
                                    <button type="submit" >Sign Up</button>
                                </div>
                            </div>
                            <div class='div-6'>
                                <div class='sub-div-6'>
                                    <Link to="#">Already have an account? Sign In.&nbsp;</Link>
                                    {/* <Link to="/new-page">Sign up for Twitter&nbsp;</Link> */}
                                    {/* <a >Forgot password? .&nbsp;</a>
                                    <a >Sign up for Twitter</a> */}
                                </div>
                            </div>
                </form>
            </div>
    </div>
);
};

export default Register;