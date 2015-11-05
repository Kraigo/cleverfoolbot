var botApi = require('./botApi');
var botClever = require('./botClever');
var http = require('http');
var offset = 0;
var stats = {
	fire: 0
};

botApi.get('getMe', null, function(error, resp, body) {
	body = JSON.parse(body);
	console.log('Token', body.ok);
});


function getUpdates() {
	botApi.get('getUpdates', {offset: offset+1, timeout: 1000}, function(error, resp, body) {
		body = JSON.parse(body);
		body.result.map(function(res) {	
			if (offset == 1) {
				offset = res.update_id;
				return;
			}
			offset = res.update_id;
			matchOptions(res.message)
		});
		getUpdates();
	});
};

function matchOptions(msg) {

	for (var i in botClever) {
		var option = botClever[i];
		if (msg.text && option.reg.test(msg.text)) {
			var params = {
				chat_id: msg.chat.id,
				reply_to_message_id: msg.message_id,
				text: encodeURI(getRandom(option.answers))
			};

			console.log(msg.from.first_name, '@'+msg.from.username, ':', msg.text, ':', option.reg);
			botApi.get('sendMessage', params );
			stats.fire++;
			break;
		}		
	}
};

function getRandom(massive) {
	var randomIndex = Math.floor(Math.random()*massive.length);
	return massive.length == 1 ? massive[0] : massive[randomIndex];
};

getUpdates();


var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || 'localhost';

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Success clever: ' + stats.fire);
}).listen(server_port, server_ip_address);