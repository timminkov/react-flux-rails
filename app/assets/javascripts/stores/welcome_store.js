var dispatcher = require('../dispatchers/app_dispatcher');
var eventEmitter = require('events').EventEmitter;
var welcomeConstants = require('../constants/welcome_constants');
var _ = require('underscore');

var CHANGE_EVENT = 'change';

var _welcomeMessageShown = false;

var WelcomeStore = _.extend({}, eventEmitter.prototype, {

  getWelcomeMessageShown: function() {
    return _welcomeMessageShown;
  },

  emitChange: function() {
    this.emit('change');
  },

  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }

});

dispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.actionType) {

    case welcomeConstants.TOGGLE_WELCOME_MESSAGE:
      _welcomeMessageShown = action.data;
      break;

    default:
      return true;
  }

  WelcomeStore.emitChange();

  return true;
});

module.exports = WelcomeStore;
