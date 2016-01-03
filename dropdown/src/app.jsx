var React = require('react');
var Dropdown  = require('./dropdown');

var options = {
  title: 'Choose a desert',
  items: [
    'Apple Pie',
    'Peach Cobbler',
    'Cocunut Cream Pie'
  ]
};

// Ask react to render this class
var element = React.createElement(Dropdown, options);

// When we ask react to render this class, we will tell it
// where to place the rendered element in the dom
React.render(element, document.querySelector('.container'));
