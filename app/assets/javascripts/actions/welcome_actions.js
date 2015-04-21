var dispatcher = require('../dispatchers/app_dispatcher');
var welcomeConstants = require('../constants/welcome_constants');
// var exampleRepository = require('repositories/example_repository');

var WelcomeActions = {
  toggleWelcomeMessage: function(data) {
    dispatcher.handleAction({
      actionType: welcomeConstants.TOGGLE_WELCOME_MESSAGE,
      data: data
    });
  }

  /* Example: Fetching from an API
  showItems: function(data) {
    exampleRepository.getAll().done(function(returnedData) {
      dispatcher.handleAction({
        actionType: welcomeConstants.SHOW_EXAMPLE_ITEMS,
        data: formatMyData(returnedData)
      });
    });
  }
  */
};

module.exports = WelcomeActions;
