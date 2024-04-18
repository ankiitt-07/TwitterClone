// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { Link } from 'react-router-dom';
// import context from './Components/Context';
// import { useContext } from 'react';
// import { useHistory } from 'react-router-dom';



const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
//   const history = useHistory();

//   const {user,setUser} = useContext(context);

  const { username, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:3001/login', {
        username,
        password
      });
      
    //   console.log(res.data); // Assuming backend returns authentication token or user data upon successful login
      // Redirect or perform actions after successful login
    //   setUser({
    //     username,
    //     password
    //   });
      console.log(user);
    //   history.push(/timeline);

    } catch (err) {
      console.error('Login failed', err.response.data); // Log error message from backend
      // Handle login failure (show error message, clear form, etc.)
    }
  };

  
//     return (
//       <div>
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label htmlFor="username">Username:</label>
//             <input
//               type="text"
//               id="username"
//               name="username"
//               value={username}
//               onChange={handleChange}
//             />
//           </div>
//           <div>
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               value={password}
//               onChange={handleChange}
//             />
//           </div>
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     );
//   };



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
                            <h3>Log in to Twitter</h3>
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
                                        <button type="submit">Log in</button>
                                    </div>
                                </div>
                                <div class='div-6'>
                                    <div class='sub-div-6'>
                                        {/* <Link to="/new-page">Forgot password? .&nbsp;</Link> */}
                                        <Link to="/register">Dont't have an Account? Sign up for Twitter&nbsp;</Link>
                                        {/* <a >Forgot password? .&nbsp;</a>
                                        <a >Sign up for Twitter</a> */}
                                    </div>
                                </div>
                    </form>
                </div>
        </div>
    );
  };


export default Login;