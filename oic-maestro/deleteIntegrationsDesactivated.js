const request = require('request');
const baseUrl = 'https://paas4saas-brasil-acteambr.integration.ocp.oraclecloud.com';

main();

function main() {
	var optionsRequest = {
		url: baseUrl + '/ic/api/integration/v1/integrations?q={status : \'INPROGRESS\' AND \'CONFIGURED\'}',
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
	  			deleteIntegration(itens[i].id, itens[i].name);
			}
			console.log('Deactivated all integrations');
	  	} else {
	  		console.log('There is no result on URL' + optionsRequest.url);
	  	}
	  } 

	}).auth('matheus.neia@oracle.com', 'Mmn0120Bov@0', false);
}


function deleteIntegration(idIntegration, nameIntegration) {
	console.log('Deleting Integration ' + idIntegration + ' - ' + nameIntegration);
	var optionsRequestDelete = {
		url: baseUrl + '/ic/api/integration/v1/integrations/'+idIntegration,
		headers: {
	    'Content-Type' : 'application/json'
	  	}
	};

	request.delete(optionsRequestDelete, function (error, response, body) {
		if (error) {
	  	console.error('error on deleteIntegration: ', error);
	  	console.log('statusCode: ', response && response.statusCode);
	  } else {
	  	console.log('Integration ' + nameIntegration + ' deleted! Response: ' + response.statusCode);
	  } 
	}).auth('matheus.neia@oracle.com', 'Mmn0120Bov@0', false);
}