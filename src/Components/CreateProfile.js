import React, { Component } from 'react';

class CreateProfile extends Component {

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

  export default CreateProfile; 