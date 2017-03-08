var React = require('react');
var Backbone = require('backbone');

var models = require('../models/menu');
var EntreeCollection = require('../models/menu').EntreeCollection
var OrderCollection = require('../models/menu').OrderCollection
var MenuLayout = React.createClass({
getInitialState: function(){
  var entreeCollection = new EntreeCollection();
  var orderCollection = new OrderCollection();
  var self = this;
  entreeCollection.fetch().done(function(){
    self.setState({entreeCollection: entreeCollection})
  })
  return {
    entreeCollection: entreeCollection,
    orderCollection: orderCollection
  };
},

addToOrder: function(item){
  this.state.orderCollection.add(item);
  this.forceUpdate();
  console.log(item);
},

render: function() {
        return (
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h1 className="heading">Majestic Thai</h1>
        <h2 className="heading2">The Spicy Side of the Orient</h2>
      </div>
    </div>
    <div className="back row">
      <Appetizer addToOrder={this.addToOrder} menuItems={this.state.entreeCollection}/>
      <EntreeMenu addToOrder={this.addToOrder} menuItems={this.state.entreeCollection}/>
      <ChefSpecialties addToOrder={this.addToOrder} menuItems={this.state.entreeCollection}/>
      <Drinks addToOrder={this.addToOrder} menuItems={this.state.entreeCollection}/>
    </div>
    <div className="row">
    <OrderBox orderCollection={this.state.orderCollection} />

  </div>
</div>
)}
});
var Appetizer = React.createClass({

  render: function() {

    var self = this;

    var appetizers = this.props.menuItems.map(function(item){
      if(item.get('category')== 'appetizers'){
        return (

          <ul key={item.cid}>
            <span><h2 className="entry">{item.get('dish')}</h2></span>
              <button onClick={function(event){
                  event.preventDefault();
                  self.props.addToOrder(item);
                }}
                className="order btn btn-primary">Add to cart</button>
              <span><p className="price">{item.get('price')}</p></span>
          <li><p>{item.get('description')}</p></li>
          </ul>

        );
      }
      });
    return(
      <div className="col-md-6">
        <h3 className="sub-heading">Appetizer</h3>
        <ul>
          {appetizers}
        </ul>
      </div>
    )
  }
});
var EntreeMenu = React.createClass({

  render: function() {
    var self = this;


    var entrees = this.props.menuItems.map(function(item){
      if(item.get('category')== 'entree'){
        return (

          <ul key={item.cid}>
            <span><h2 className="entry">{item.get('dish')}</h2></span>
              <button onClick={function(event){
                  event.preventDefault();
                  self.props.addToOrder(item);
                }}
                className="order btn btn-primary">Add to cart</button>
            <span><p className="price">{item.get('price')}</p></span>
          <li><p>{item.get('description')}</p></li>
          </ul>

        );
      }
      });
    return(
      <div className="col-md-6">
        <h3 className="sub-heading">Entree</h3>
        <ul>
          {entrees}
        </ul>
      </div>
    )
  }
});
var ChefSpecialties = React.createClass({

  render: function() {
    var self = this;


    var specialties = this.props.menuItems.map(function(item){
      if(item.get('category')== 'chefSpecialties'){
        return (

          <ul key={item.cid}>
            <span><h2 className="entry">{item.get('dish')}</h2></span>
              <button onClick={function(event){
                  event.preventDefault();
                  self.props.addToOrder(item);
                }}
                className="order btn btn-primary">Add to cart</button>
            <span><p className="price">{item.get('price')}</p></span>
          <li><p>{item.get('description')}</p></li>
          </ul>


        );
      }
      });
    return(
      <div className="col-md-6">
        <h3 className="special sub-heading">Chef Specialties</h3>
        <ul>
          {specialties}
        </ul>
      </div>
    )
  }
});


var Drinks = React.createClass({

  render: function() {
  var self = this;



    var drinks = this.props.menuItems.map(function(item){

      if(item.get('category')== 'drinks'){
        return (

          <ul key={item.cid}>
            <li><h2 className="entry">{item.get('dish')}</h2></li>
            <button onClick={function(event){
                event.preventDefault();
                self.props.addToOrder(item);
              }}
              className="order btn btn-primary">Add to cart</button>

            <li><p className="price">{item.get('price')}</p></li>

          </ul>

        );
      }
      });
    return(
      <div className="col-md-6">
        <h3 className="drinks sub-heading">Drinks</h3>
        <ul>
          {drinks}
        </ul>
      </div>
    )
  }
});



var OrderBox = React.createClass({
  render(){
    var self = this;
    var total = 0
    var items = this.props.orderCollection.map(function(item){
        total += Number(item.get('price'));
      return(
        <li key={item.cid}>{item.get('dish')}...{item.get('price')} </li>
      );
      
    });
    console.log(total);
    return(
      <div className="col-md-6">

        <div className="order-box">Your Order...{items}</div>
        <form className="pay form-inline">
          <div className=" form-group">
            <label className="sr-only" htmlFor="exampleInputAmount">Amounts (in dollars)</label>
              <div className="input-group">
              <div className="input-group-addon">$</div>
                <span type="text" className="form-control" id="exampleInputAmount"> {total.toFixed(2)}  </span>

              </div>
          </div>
            <button type="submit" className="total btn btn-primary">Submit Order</button>
        </form>

      </div>
    )
  }
});
module.exports = {
  MenuLayout,
  Appetizer
}
