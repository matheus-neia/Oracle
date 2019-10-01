var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
const request = require('request');
var app = express();

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

app.use(function(req, res, next){
 res.setHeader("Access-Control-Allow-Origin", "*");
 res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
 res.setHeader("Access-Control-Allow-Headers", "content-type");
 res.setHeader("Content-Type", "application/json");
 res.setHeader("Access-Control-Allow-Credentials", true);
 next();
});

//app.listen(9090, function(){ console.log('Servidor Web rodando na porta 9090, para continuar acesse o link https://imasters.com.br/back-end/api-http-rest-conceito-e-exemplo-em-node-js') });

var baseUrl = 'https://paas4saas-brasil-acteambr.integration.ocp.oraclecloud.com';

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
	  			//deactivateIntegration(itens[i].id, itens[i].name);
	  			deleteIntegration(itens[i].id, itens[i].name);
			}
			console.log('Deactivated all integrations');
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