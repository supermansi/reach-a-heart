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
          <Route path="/createProfile" component={createProfile}></Route>
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

    fetch("https://api.data.charitynavigator.org/v2/Organizations?app_id=b6e4da89&app_key=c5ca56571c9d8ece3fa4a5075e5b44ca&pageSize=10&search=pets")
    .then(res => res.json())
    .then(data => {
      this.setState({orgs: data});
    })

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  displayOrgs() {
    var orgs;
    orgs = this.state.orgs.map((x, i) =>
    <li className="list-group-item" id="orgs-li" key={i}>{x.charityName}</li>);
    return <ul className="list-group-horizontal">{orgs}</ul>
  }

  handleChange(event) {
    this.setState({query: event.target.value});
  }

  handleSubmit(event) {
    fetch("https://api.data.charitynavigator.org/v2/Organizations?app_id=b6e4da89&app_key=c5ca56571c9d8ece3fa4a5075e5b44ca&pageSize=10&search="+
    this.state.query)
    .then(res => res.json())
    .then(data => {
      this.setState({orgs: data});
    })
    event.preventDefault();
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
      <form onSubmit={this.handleSubmit}>
        <label>
          What do you want to donate:
        <input type="text" value={this.state != null ? this.state.query : 'pets'} onChange={this.handleChange} />
       </label>
       <input type="submit" value="Submit" />
      </form>
          {this.state != null ? this.displayOrgs() : null }
        </div>
    </div>
  );   
}
}

class Organization extends React.Component {

  handleSubmit(event) {
    alert('Our representative will get in touch with you shortly!');
  
  }

  render() {

    return (
      <div>
       <div>
        <div id="OrgCard" class="card"/>
         <div class="card-body">
           Register with our website and get donors everyday by posting requirements.
           <h1>Get in touch today!</h1>
           
           <Link to="/createProfile">
           <button type="submit" class="btn btn-primary">Share your details</button>
        </Link>
         </div>
         </div>
      <div><h3>Our User Stories</h3></div>
      
      <div class="container mt-4">
      <div class="row">
          <div class="col-auto mb-3">
          <div class="card" style={{width: 18+'rem'}}>
          <img src="..." class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
          </div>
          </div>
          <div class="col-auto mb-3">
            <div class="card" style={{width: 18+'rem'}}>
            <img src="..." class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
          </div>
          <div class="col-auto mb-3">
            <div class="card" style={{width: 18+'rem'}}>
            <img src="..." class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
          </div>
          <div class="col-auto mb-3">
            <div class="card" style={{width: 18+'rem'}}>
            <img src="..." class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>
          </div>
          <div class="col-auto mb-3">
          <div class="card" style={{width: 18+'rem'}}>
          <img src="..." class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
          </div>
          </div>
          <div class="col-auto mb-3">
          <div class="card" style={{width: 18+'rem'}}>
          <img src="..." class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
          </div>
          </div>
         
      </div>
  </div>
  </div>

    );
  }

}

class createProfile extends React.Component {

  handleSubmit(event) {
    alert('Our representative will get in touch with you shortly!');
  
  }

  render() {

      return (  
      <div >
        <div id="OrgCard" class="card">
         <div class="card-body">
           Register with our website and get donors everyday by posting requirements.
           <h1>Get in touch today!</h1>
         </div>
      </div>
        <form onSubmit={this.handleSubmit}>
      <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Organization name</label>
    <div class="col-md-6">
      <input type="Organization name" class="form-control" id="inputEmail3" placeholder="Organization name"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="Name" class="col-sm-2 col-form-label">Contact Name</label>
    <div class="col-md-6">
      <input type="text" class="form-control" id="Name" placeholder="Whom shall we contact?"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="Number" class="col-sm-2 col-form-label">Contact Number</label>
    <div class="col-md-6">
      <input type="text" class="form-control" id="Number" placeholder="Where shall we contact?"/>
    </div>
  </div>
  <div class="form-group row">
    <label for="Name" class="col-sm-2 col-form-label">What do you require?</label>
    <div class="col-md-6">
  <div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" name="donationType" value="Money" id="Money"/>
  <label class="form-check-label" for="Money">
    Money
  </label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" name="donationType" value="Food" id="Food"/>
  <label class="form-check-label" for="Food">
    Food
  </label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" name="donationType" value="Clothes" id="Clothes"/>
  <label class="form-check-label" for="Clothes">
    Clothes
  </label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" name="donationType" value="Services" id="Services"/>
  <label class="form-check-label" for="Services">
    Services
  </label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" name="donationType" value="Shelter" id="Shelter"/>
  <label class="form-check-label" for="Shelter">
  Shelter
  </label>
</div>
</div>
</div>
  <div class="form-group row">
    <div class="col-sm-10">
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  </div>
  
</form>
      </div>
    );

  }

}

export default App;
