var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

var MenuLayout = require('./components/index.jsx').MenuLayout;

var AppRouter = Backbone.Router.extend({
  routes:{
    "": 'index'
  },
  index: function(){
    ReactDOM.render(
      React.createElement(MenuLayout),
      document.getElementById('app')
    );
  },
});
var appRouter = new AppRouter();

module.exports = appRouter;
