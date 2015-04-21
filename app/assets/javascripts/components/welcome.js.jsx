var React = require('react');
var welcomeActions = require('../actions/welcome_actions');
var welcomeStore = require('../stores/welcome_store');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      welcomeMessageShown: false
    };
  },

  componentDidMount: function() {
    welcomeStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    welcomeStore.removeChangeListener(this._onChange);
  },

  render: function() {
    var text;

    if (this.state.welcomeMessageShown) {
      text = <p>You can see the flow the button uses by checking 'welcome.js.jsx'</p>;
    } else {
      text = <p>Welcome! If you're seeing this you should be ready to begin.</p>;
    }

    return (
      <div>
        <h1>React/Flux/Rails</h1>
        {text}
        <button onClick={this._clickButton}>Click me!</button>
      </div>
    );
  },

  _clickButton: function(e) {
    welcomeActions.toggleWelcomeMessage(true);
  },

  _onChange: function() {
    this.setState({
      welcomeMessageShown: welcomeStore.getWelcomeMessageShown()
    });
  }
});
