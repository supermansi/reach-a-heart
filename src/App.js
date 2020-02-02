import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Donor from './Components/Donor.js';
import Organization from './Components/Organization.js';
import CreateProfile from './Components/CreateProfile.js';

function App() {

  return (
    <div className="App">
      <div className="card" id="about">
        <div className="card-body">
          <h1><i className="fa fa-handshake-o" id="color-red"></i>  Reach A Heart  <i className="fa fa-heart-o" id="color-red"></i></h1>
          <p>
            Reach A Heart, or abbreviated as RAH, in Hindi means a "path". We aim to create a path for anybody who wants to be a donor 
            in whichever means they can, to the ones in need, through organizations that can help.
          </p>
        </div>
      </div>
      <Router>
          <Link to="/home"> <button type="button" className="btn btn-danger" id="home-text"><h2>Let's Create A Path!</h2> </button></Link>
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
    <div className="card-deck margin-adj" id="decks">
      <div className="card" id="crd">
        <Link to="/donor">
        <div className="card-body">
          <h4 className="card-title">Donor</h4>
          <img src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" id="crd-img"/>
        </div>
        </Link>
      </div>
      <div className="card" id="crd">
        <Link to="/org">
        <div className="card-body">
          <h4 className="card-title">Organization</h4>
          <img src="https://omc5825sv9k3qyi3q2ord7gk-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/AdobeStock_113080915-1-Converted-1200x600.jpg" id="crd-img2"/>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default App;
