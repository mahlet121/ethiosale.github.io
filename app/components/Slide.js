// Include React
var React = require("react");

// Here we include all of the sub-components


// Create the Child Component
var Slide = React.createClass({
  render: function() {
    return (

<div className="container">

 
  <div id="myCarousel" className="carousel slide" data-ride="carousel">
   
    <ol className="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

  
    <div className="carousel-inner">
      <div className="item active">
        <img src="../public/assets/img/car.png" alt="car" ></img>
      </div>


      <div className="item">
        <img src="../public/assets/img/house.png" alt="house" ></img>
      </div>
    
      <div className="item">
        <img src="../public/assets/img/exca.png" alt="excavator" ></img>
      </div>
    </div>

    
    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#myCarousel" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
</div>
 
    );
  }
});

module.exports = Slide;
