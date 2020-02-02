import React, { Component } from 'react';
import {BrowserRouter as Link} from 'react-router-dom';

class Organization extends Component {

    handleSubmit(event) {
      alert('Our representative will get in touch with you shortly!');
    
    }
  
    render() {
  
      return (
        <div>
         <div>
          <div id="OrgCard" class="card"/>
           <div class="card-body">
             <h3>Register with our website and get donors everyday by posting requirements.</h3>
             <h1>Get in touch today!</h1>
             
             <Link to="/createProfile">
             <button type="submit" class="btn btn-primary">Share your details</button>
          </Link>
           </div>
           </div>
        <div><h3>Organization Success Stories</h3></div>
        
        <div class="container mt-4">
        <div class="row">
            <div class="col-auto mb-3">
            <div class="card" style={{width: 18+'rem'}}>
            <div class="card-body">
              <h5 class="card-title">Pet lovers organizations</h5>
              <p class="card-text">This website helped us to post events, requirements and campaigns. We got in touch 
              with a lot of donors and philantropists.</p>
            </div>
            </div>
            </div>
            <div class="col-auto mb-3">
              <div class="card" style={{width: 18+'rem'}}>
              <div class="card-body">
                <h5 class="card-title">One For All, All for one</h5>
                <p class="card-text"> It is a one-stop for getting to know what people are willing to 
              donate in a particular area. Great website to collaborate.</p>
              </div>
              </div>
            </div>
            <div class="col-auto mb-3">
              <div class="card" style={{width: 18+'rem'}}>
              <div class="card-body">
                <h5 class="card-title">Help Society</h5>
                <p class="card-text">It is a one-stop for getting to know what people are willing to 
              donate in a particular area. Great website to collaborate.</p>
              </div>
              </div>
            </div>           
        </div>
    </div>
    </div>
  
      );
    }
  }

  export default Organization; 