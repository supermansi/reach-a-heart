import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Donor from './Components/Donor.js';
import Organization from './Components/Organization.js';
import CreateProfile from './Components/CreateProfile.js';

function App() {

  return (
    <div className="App">
      <div className="card" id="about">
        <div className="card-body">
          <h3>Disaster Relief Aid</h3>
          <p>
            Connect with organizations or find donors to help disaster victims near or far. Help in any way you can!
          </p>
        </div>
      </div>
      <Router>
          <Link to="/home"> Home</Link>
          <Route path="/home" component={Home}></Route>
          <Route path="/donor" component={Donor}></Route>          
          <Route path="/org" component={Organization}></Route>
          <Route path="/createProfile" component={CreateProfile}></Route>
      </Router>
    </div>
  );
}

const Home = () => {
  return (
    <div className="card-deck">
      <div className="card">
        <Link to="/donor">
        <div className="card-body">
          <h4 className="card-title">Donor</h4>
        </div>
        </Link>
      </div>
      <div className="card">
        <Link to="/org">
        <div className="card-body">
          <h4 className="card-title">Organization</h4>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default App;
