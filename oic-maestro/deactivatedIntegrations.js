const request = require('request');
const baseUrl = 'https://paas4saas-lad2-acteambr.integration.ocp.oraclecloud.com';

main();

function main() {
	var optionsRequest = {
		url: baseUrl + '/ic/api/integration/v1/integrations?q={status : \'ACTIVATED\'}',
		headers: {
	    'Accept': 'application/json'
	  	}
	};

	request.get(optionsRequest, function (error, response, body) {
	  if (error) {
	  	console.error('error: ', error);
	  	console.log('statusCode: ', response && response.statusCode);
	  } else {
	  	console.log('statusCode: ', response && response.statusCode);
	  	var integrations = JSON.parse(body);
	  	console.log('Existem ' + integrations.totalResults + ' integracoes');
	  	if (integrations.totalResults > 0) {
	  		var itens = integrations.items;
		  	for (var i = 0, len = itens.length; i < len; i++) {
	  			deactivateIntegration(itens[i].id, itens[i].name);
			}
			console.log('Called all integrations to deactivaded ' + itens.length);
	  	} else {
	  		console.log('There is no result on URL' + optionsRequest.url);
	  	}
	  } 

	}).auth('matheus.neia@oracle.com', 'Mmn0120Bov@0', false);
}

function deactivateIntegration(idIntegration, nameIntegration) {
	console.log('Deactivating Integration ' + idIntegration + ' - ' + nameIntegration);
	var optionsRequestDeactivate = {
		url: baseUrl + '/ic/api/integration/v1/integrations/'+idIntegration,
		headers: {
	    'Content-Type' : 'application/json',
	    'X-HTTP-Method-Override' : 'PATCH'
	  	},
	  	body: '{"status":"CONFIGURED"}'
	};

	request.post(optionsRequestDeactivate, function (error, response, body) {
		if (error) {
	  	console.error('error on deactivateIntegration: ', error);
	  	console.log('statusCode: ', response && response.statusCode);
	  } else {
	  	console.log('Integration ' + nameIntegration + ' deactivated! Response: ' + response.statusCode);
	  } 
	}).auth('matheus.neia@oracle.com', 'Mmn0120Bov@0', false);
}