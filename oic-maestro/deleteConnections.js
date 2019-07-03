const request = require('request');
const baseUrl = 'https://paas4saas-brasil-acteambr.integration.ocp.oraclecloud.com';

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
			console.log('Deleted all connections');
	  	} else {
	  		console.log('There is no result on URL' + optionsRequest.url);
	  	}
	  } 

	}).auth('matheus.neia@oracle.com', 'Mmn0120Bov@0', false);
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
	}).auth('matheus.neia@oracle.com', 'Mmn0120Bov@0', false);
}