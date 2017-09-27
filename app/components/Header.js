// Include React
var React = require("react");


// Here we inclvar Slide =require("./Slide");ude all of the sub-components

var Link = require("react-router").Link;

// Create the Child Component
var Header = React.createClass({
  render: function() {
    return (
      
<nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">Ethiosale/ኢትዮሽያጭ</a>
      
    </div>
   
    <form className="navbar-form navbar-left">
    <a className="active" href="#">Home</a>
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Search">
        </input>
        
          <button className="btn btn-default" type="submit">
            <i className="glyphicon glyphicon-search"></i>
          </button>
      
      </div>
      
    </form>

     <ul className="nav navbar-nav">
     <div className="dropdown">
    <button className="dropbtn">ሽያጭ/Seller</button>
    <div className="dropdown-content">
     <Link to="/HouseSale"> <a href="#">ቤት/House</a></Link>
      <a href="#">ምኪና/Car</a>
      <a href="#">የኮንስትራክሽን ዕቃ/Construction materials</a>
    </div>
     </div> 
      <div className="dropdown">
    <button className="dropbtn">ገዢ/Buyer</button>
    <div className="dropdown-content">
      <a href="#">ቤት/House</a>
      <a href="#">ምኪና/Car</a>
      <a href="#">የኮንስትራክሽን ዕቃ/Construction materials</a>
    </div>
  </div> 
      <div className="dropdown">
    <button className="dropbtn">ተከራይ/Tenant</button>
    <div className="dropdown-content">
      <a href="#">ቤት/House</a>
      <a href="#">ምኪና/Car</a>
      <a href="#">የኮንስትራክሽን ዕቃ/Construction materials</a>
    </div>
  </div> 
     
     
 <div className="dropdown">
    <button className="dropbtn">አከራይ/Renter</button>
    <div className="dropdown-content">
       <a href="#">ቤት/House</a>
      <a href="#">ምኪና/Car</a>
      <a href="#">የኮንስትራክሽን ዕቃ/Construction materials</a>
    </div>
  </div> 
  <button className="dropbtn">login</button>
 </ul>

   
 </div> 
</nav>


   
   
    );
  }
});

// Export the component back for use in other files
module.exports = Header;
