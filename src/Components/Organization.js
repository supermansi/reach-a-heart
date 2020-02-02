import React, { Component } from 'react';
import {Link} from 'react-router-dom';

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
             Register with our website and get donors everyday by posting requirements.
             <h1>Get in touch today!</h1>
             
             <Link to="/createProfile">
               <button class="btn btn-primary">Share your details</button>
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
            </div>
            </div>
            </div>
            <div class="col-auto mb-3">
              <div class="card" style={{width: 18+'rem'}}>
              <img src="..." class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
              </div>
            </div>
            <div class="col-auto mb-3">
              <div class="card" style={{width: 18+'rem'}}>
              <img src="..." class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
              </div>
            </div>
            <div class="col-auto mb-3">
              <div class="card" style={{width: 18+'rem'}}>
              <img src="..." class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
              </div>
            </div>
            <div class="col-auto mb-3">
            <div class="card" style={{width: 18+'rem'}}>
            <img src="..." class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            </div>
            </div>
            <div class="col-auto mb-3">
            <div class="card" style={{width: 18+'rem'}}>
            <img src="..." class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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