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
ReactDOM.render(element, document.querySelector('.container'));

var Badge = React.createClass({displayName: "Badge",
  render: function() {
    return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
    this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
    )
  }
});



var ThumbnailList = React.createClass({displayName: "ThumbnailList",
  render: function() {
    var list = this.props.thumbnailData.map(function(thumbnailProps) {
      return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
    });

    return React.createElement("div", null, 
      list
    )
  }
});



var Thumbnail = React.createClass({displayName: "Thumbnail",
  render: function() {
    return React.createElement("div", {className: "col-sm-6 col-md-4"}, 
      React.createElement("div", {class: "thumbnail"}, 
        React.createElement("img", {src: this.props.imageUrl}), 
        React.createElement("div", {className: "caption"}, 
          React.createElement("h3", null, this.props.header), 
          React.createElement("p", null, this.props.description), 
          React.createElement("p", null, 
            React.createElement(Badge, {title: this.props.title, number: this.props.number})
          )
        )
      )
    )
  }
});
 
