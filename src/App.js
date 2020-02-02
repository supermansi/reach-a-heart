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

class Donor extends React.Component {

  state;

  constructor(props) {
    super(props);
    fetch("https://api.data.charitynavigator.org/v2/Organizations?app_id=b6e4da89&app_key=c5ca56571c9d8ece3fa4a5075e5b44ca&search=pets")
    .then(res => res.json())
    .then(data => {
      this.setState({orgs: data});
    })
  }

  displayOrgs() {
    var orgs;
    orgs = this.state.orgs.map((x, i) =>
    <li className="list-group-item" id="orgs-li" key={i}>{x.charityName}</li>);
    return <ul className="list-group-horizontal">{orgs}</ul>
  }

  render() {
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
          {this.state != null ? this.displayOrgs() : null }
        </div>
    </div>
  );   
}
}

const Orgs = (data) => {
  return(
  <li className="list-group-item">{data}</li>
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
