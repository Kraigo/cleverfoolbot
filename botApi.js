var request = require('request');

var url = 'https://api.telegram.org/bot';
var token = 'TOKET';

module.exports = {
	getUrl: function(action) {
		return url + token + '/' + action;
	},
	get: function(action, params, callback) {
		callback = callback || function() {};

		var url = this.getUrl(action);

		if (params) {
			url += '?'
			for(var p in params) {
				url += p + '=' + params[p] + '&';
			}
			url = url.slice(0,-1);
		}

		return request.get(url, callback);
	}
}