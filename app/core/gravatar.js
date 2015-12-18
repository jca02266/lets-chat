'use strict';

+function() {
  var url = require('url');
  var Gravatar = {
    path: 'https://www.gravatar.com/avatar',
    host: function() {
      return url.parse(this.path).host;
    },
    url: function(userid, screenSize, defaultImage) {
      var url = this.path + '/' + userid;
      var params = []
      if (screenSize) {
        params.push('s=' + screenSize);
      }
      if (defaultImage) {
        params.push('d=' + defaultImage);
      }

      if (params.length > 0) {
        url += '?' + params.join('&');
      }
      return url;
    },
    basic_url: function(userid, screenSize, defaultImage) {
      var url = this.url(userid, screenSize, defaultImage);
      return url.replace(/^https:/, 'http:');
    }
  };

  if (typeof define !== 'undefined' && define.amd) {
    define([], function() {
      return Gravatar;
    });
  }
  else if (typeof module !== 'undefined' && module.exports) {
    module.exports = Gravatar;
  }
  else {
    this.Gravatar = Gravatar;
  }
}();
