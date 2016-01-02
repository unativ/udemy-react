var React = require('react');
var ThumbnailList = require('./thumbnail-list');

var options = {
  thumbnailData: [{
    title: "See Tutorials",
    number: 32,
    header: 'Learn React',
    description: "React is a fantastic new library for creating dynamic web sites. This tutorial is very good so far",
    imageUrl: 'http://jpsierens.com/wp-content/uploads/2015/05/react-logo.png'
  },{
    title: "See Tutorials",
    number: 25,
    header: 'Learn Gulp',
    description: "Gulp will speed up your development workflow. Gulp will speed up your development workflow. Gulp will speed up your development workflow.",
    imageUrl: 'http://brunch.io/images/others/gulp.png'
  }]
};

// Ask react to render this class
var element = React.createElement(ThumbnailList, options);

// When we ask react to render this class, we will tell it
// where to place the rendered element in the dom
React.render(element, document.querySelector('.container'));
