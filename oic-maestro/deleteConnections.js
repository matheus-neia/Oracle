const request = require('request');
const config_data = require('./config.json');
const baseUrl = config_data.url

main();

function main() {
	var optionsRequest = {
		url: baseUrl + '/ic/api/integration/v1/connections'
	};

	request.get(optionsRequest, function (error, response, body) {
	  if (error) {
	  	console.error('error: ', error);
	  	console.log('statusCode: ', response && response.statusCode);
	  } else {
	  	console.log('statusCode: ', response && response.statusCode);
	  	var connections = JSON.parse(body);
	  	console.log('There are ' + connections.totalResults + ' connections');
	  	if (connections.totalResults > 0) {
	  		var itens = connections.items;
		  	for (var i = 0, len = itens.length; i < len; i++) {
	  			deleteConnection(itens[i].id, itens[i].name);
			}
			console.log('Called to delete all connections ' + itens.length);
	  	} else {
	  		console.log('There is no result on URL' + optionsRequest.url);
	  	}
	  } 

	}).auth(config_data.login, config_data.password, false);
}


function deleteConnection(idConnection, nameConnection) {
	console.log('Deleting Connection ' + idConnection + ' - ' + nameConnection);
	var optionsRequestDelete = {
		url: baseUrl + '/ic/api/integration/v1/connections/'+idConnection
	};

	request.delete(optionsRequestDelete, function (error, response, body) {
		if (error) {
	  	console.error('error on deleteConnection: ', error);
	  	console.log('statusCode: ', response && response.statusCode);
	  } else {
	  	console.log('Connection ' + nameConnection + ' deleted! Response: ' + response.statusCode);
	  } 
	}).auth(config_data.login, config_data.password, false);
}