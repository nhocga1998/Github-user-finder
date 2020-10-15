import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import User from './components/users/User'
import Search from './components/users/Search'
import Alert from './components/layout/Alert'
import About from './components/pages/About'
import NotFound from './components/pages/NotFound'
import Home from './components/pages/Home'
import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'



const App = () => {

  // async componentDidMount() {
  //   console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);
  //   this.setState({
  //     loading: true
  //   });
  //   const res = await
  //     axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
  //   client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  //   console.log(res.data);
  //   this.setState({
  //     users: res.data,
  //     loading: false
  //   });
  // }

  //Search users
  
  //Get single user
  

  //Get user repos
  


 
  //set alert
  
  return (
    <GithubState>
      <AlertState>
    <Router>
      <div className="App">
        <Navbar title="User finder" />
        <div className="container">
          <Alert />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/About" component={About} />
            <Route excat path="/User/:login" component={User} />
            <Route component={NotFound} />
          </Switch>

        </div>

      </div>
    </Router>
    </AlertState>
    </GithubState>
  );
}


export default App;
