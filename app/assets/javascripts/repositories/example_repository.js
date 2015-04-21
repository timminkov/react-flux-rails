var ExampleRepository = {
  getAll: function() {
    return $.ajax({
      url: '/example',
      method: 'GET'
    });
  },

  create: function(data) {
    return $.ajax({
      url: '/example',
      method: 'POST',
      data: { example: data }
    });
  },

  update: function(data) {
    var url = '/example/' + data.id;

    $.ajax({
      url: url,
      method: 'PUT',
      data: { example: data }
    });
  },

  where: function(data) {
    return $.ajax({
      url: '/example',
      method: 'GET',
      data: data
    });
  },

  destroy: function(data) {
    var url = '/example/' + data.id;

    return $.ajax({
      url: url,
      method: 'DELETE'
    });
  }
};

module.exports = ExampleRepository ;
