import React, { Component } from 'react';

class Donor extends Component {

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

export default Donor;   
   