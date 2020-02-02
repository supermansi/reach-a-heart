import React, { Component } from 'react';
import './../App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

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
         <div id="how"> 
           <div className="card-deck">
             <div className="card" id="radio-choice">
               <div className="card-body">
                 <h4 className="card-title">Money</h4>
                 <i className="fa fa-dollar" id="monay"></i><i className="fa fa-dollar" id="monay"></i><i className="fa fa-dollar" id="monay"></i>
               </div>
             </div>
             <div className="card" id="radio-choice">
               <div className="card-body">
                 <h4 className="card-title">Clothes</h4>
                 <p className="card-text"> If you wish to donate clothes, you can select the option and donate to the organizations</p>
               </div>
             </div>
             <div className="card" id="radio-choice">
               <div className="card-body">
                 <h4 className="card-title">Food</h4>
                 <i className="fa fa-spoon" id="spoon"></i><i className="fa fa-apple" id="spoon"></i>
               </div>
             </div>
             <div className="card" id="radio-choice">
               <div className="card-body">
                 <h4 className="card-title">Shelter</h4>
                 <p className="card-text"> You can collaborate with multiple organizations if you wish to provide shetlter/services</p>
                 <p className="card-text"></p>
               </div>
             </div>
           </div> 
           <h1>
             How can you help? What can you provide?
           </h1>
           <form onSubmit={this.handleSubmit}>
           <label>
             What do you want to donate:
           <input type="text" value={this.state != null ? this.state.query : 'pets'} onChange={this.handleChange} />
          </label>          
          <input type="submit" value="Submit" />
         </form>
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

export default Donor;   
   