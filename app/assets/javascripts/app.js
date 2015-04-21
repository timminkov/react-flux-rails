var React = require('react');
var Welcome = require('./components/welcome');

$(function() {
  React.render(
    <Welcome />,
    $('.container')[0]
  );
});
