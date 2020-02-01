import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

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
      </Router>
    </div>
  );
}

const Home = () => {
  return (
  <div className="card-deck" id="deck">
  <Link to="/donor">
    <div className="card" id="img-card">
      <div className="card-body">
        <h4 className="card-title">Donor</h4>
        <img className="card-img-bottom" id="img-card" src="https://cdn.vox-cdn.com/thumbor/J3vYy7WxwuXGlhS9TxtrfnXCRLg=/0x0:1754x1241/1200x800/filters:focal(737x481:1017x761)/cdn.vox-cdn.com/uploads/chorus_image/image/65807400/GettyImages_1060748862.0.jpg"></img>
      </div>
    </div>
  </Link>
  <Link to="/org">
    <div className="card" id="img-card">
      <div className="card-body">
        <h4 className="card-title">Organization</h4>
        {/* <img className="card-img-bottom" id="img-card" src="https://www.hostmerchantservices.com/wp-content/uploads/2011/10/charity.png"></img> */}
      </div>
    </div>
    </Link>
  </div>
  );
}

const Donor = () => {
  return (
    <div>
      <div id="which"> 
        <h1>
          Which disaster do you want to help with?
        </h1>
        <div className="card-deck">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Disaster 1</h4>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Disaster 2</h4>
              <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Disaster 3</h4>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            </div>
          </div>
        </div>
      </div>
      <div id="how"> 
        <h1>
          How can you help? What can you provide?
        </h1>
        <div className="card-deck">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Money $$$</h4>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Clothes</h4>
              <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Food</h4>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Shelter</h4>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            </div>
          </div>
        </div>
      </div>
      <div id="which"> 
        <h1>
          Who you can work with:
        </h1>
        <div className="card-deck">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Org 1</h4>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Org 2</h4>
              <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Org 3</h4>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Organization = () => {
  return (
    <div>
      <h3>Test</h3>
    </div>
  );
}

export default App;
