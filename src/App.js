import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import LoginUser from './components/LoginUser';
import Studentdata from './components/Studentdata';
import Getstudents from './components/Getstudents';
import DeleteStudent from './components/DeleteStudent';
import UpdateStudent from './components/UpdateStudent';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Switch>
        {/* <Route exact path="/"><Home/></Route> */}
        <Route  path="/login"><Login/></Route>
        <Route  path="/signup"><Signup/></Route>
        <Route path="/dashboard"><Dashboard/> </Route>
        <Route path="/loginuser"><LoginUser/></Route>
        <Route path="/studentdata"><Studentdata/></Route>
        <Route path="/getstudents/:id"> <Getstudents/> </Route>
        <Route path="/deletestudents"><DeleteStudent/></Route>
        <Route path="/updatestudents" ><UpdateStudent/></Route>
        
      </Switch>
    </div>
    </Router>
  );
}

export default App;
