import logo from './logo.svg';
import './App.css';
import Register from './Components/Register';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {useState} from 'react';
import Login from './Components/Login';
import context from './Components/Context';
import Timeline from './Components/Timeline';

function App() {
  //  <>
  //  <Register/>
  //  </>
  const [user,setUser] = useState({});
  return (
    <Router>
      <Switch>
        <context.Provider value={{user,setUser}} >

        <Route path="/Register" component={Register}/>
        <Route exact path="/login" component={Login} />
        <Route path="/timeline" component={Timeline} />
        </context.Provider>
      </Switch>
    </Router>

  //    <>
  //  <Register/>
  //  </>
  );
  
}

export default App;