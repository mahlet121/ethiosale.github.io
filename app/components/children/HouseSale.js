var React = require("react");


// Here we inclvar Slide =require("./Slide");ude all of the sub-components

// Create the Child Component
var HouseSale = React.createClass({
    // Here we set a generic state associated with the text being searched for
    getInitialState: function() {
        return {
            email: '',
            password: ''
            
        };
    },

    // This function will respond to the user input
    handleChange: function(event) {

        var newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);

    },

    // When a user submits...
    handleSubmit: function(event) {
        // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
        // clicking the button
        event.preventDefault();

        // Set the parent to have the search term
      

        this.setState(
            {
                email: '',
                password: ''
              
            }
        );
    },
  render: function() {
    return (
    <div>
     <h2>Signup Form</h2>

<form onSubmit={this.handleSubmit}>
  <div className="container">
    <label><b>Email</b></label>
    <input type="text" value={this.state.email} placeholder="Enter Email" name="email" required id="email" onChange={this.handleChange}></input>

    <label><b>Password</b></label>
    <input type="password" value={this.state.password} placeholder="Enter Password" name="psw" required id="password" onChange={this.handleChange}></input>

    <label><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" required></input>
    

    <div className="clearfix">
      <button type="button" className="cancelbtn">Cancel</button>
      <button type="submit" className="signupbtn" type="submit">Sign Up</button>
    </div>
  </div>
</form>
</div>
 
    );
  }
});

// Export the component back for use in other files
module.exports = HouseSale;


