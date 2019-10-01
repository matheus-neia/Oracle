const request = require('request');
var sleep = require('system-sleep');
const baseUrl = 'https://paas4saas-lad2-acteambr.integration.ocp.oraclecloud.com';
const login = 'matheus.neia@oracle.com'
const pass = 'Mmn0120Bov@0'

getSpaces();



function getSpaces() {
	console.log('calling to gel all spaces ', baseUrl);
	request.get(baseUrl + '/ic/api/process/v1/spaces',  function (error, response, body) {
		if (error) {
			console.error('error: ', error);
	  		console.log('statusCode: ', response && response.statusCode);
		} else {
			var spaces = JSON.parse(body);
			if (spaces.items && spaces.items.length > 0) {
				console.log('There are spaces', spaces.items.length);
				for (var i = 0, len = spaces.items.length; i < len; i++) {
					//get token and delete a decision model
					console.log('Start to delete a space ', spaces.items[i].name, spaces.items[i].creator);
					if (spaces.items[i].creator.includes('OIC.USER')) {
						deleteAllDecisionModels(spaces.items[i].id, spaces.items[i].creator)
					} else {
						console.log('The creator is not a oic.user', spaces.items[i].creator);
					}
				}
			} else {
				console.log('There is no space for the url ', baseUrl);
			}
		}  
	}).auth(login, pass);
}

function deleteAllDecisionModels(spaceID, username) {
	console.log('Start to get a token for the user ', username);
	request.post(baseUrl + '/ic/api/process/v1/auth/token/permission', function (error, response, body) {
		if (error) {
			console.error('error: ', error);
	  		console.log('statusCode: ', response && response.statusCode);
		} else if (response.statusCode != 200) {
			console.error(response.statusCode);
			console.error(response.body);
			console.error('Error to get token for user', username);
		} else {
			var tokens = JSON.parse(body);
			if (tokens.accessToken && tokens.accessToken.jwtToken) {
				console.log('There is a token to user ', username);
				// call to get all decision models
				var token = tokens.accessToken.jwtToken;
				//console.log('token ', token, 'user is', username);
				var url = baseUrl + '/ic/api/process/v1/dmn/spaces/' + spaceID + '/decision-models';
				console.log('Calling to get all decision models to user ', username, ' with space id = ', spaceID);
				console.log(url);
				request.get(url, function (error, response, body) {
					if (error) {
						console.error('error: ', error);
						console.log('statusCode: ', response && response.statusCode);
					} else if (response.statusCode == 404) {
						console.log ('There is no decision model for the space', username, spaceID);
					} else if (response.statusCode != 200) {
						console.error ('There is a error on response', response.statusCode);
						console.log(body);
					} else {
						var decisions = JSON.parse(body);
						if (decisions.items && decisions.items.length > 0) {
							for (var i = 0, len = decisions.items.length; i < len; i++) {
								var decisionModel = decisions.items[i];
								//delete a decision model
								var urlDeleteDecisionModel = baseUrl + '/ic/api/process/v1/dmn/spaces/' + spaceID + '/decision-models/' + decisionModel.name;
								console.log('Calling a url do delete a decision model');
								console.log(urlDeleteDecisionModel);
								sleep(1000); //1 second
								request.delete(urlDeleteDecisionModel, function (error, response, body) {
									if (error) {
										console.error('error: ', error);
										console.log('statusCode: ', response && response.statusCode);
									} else if (response.statusCode != 204) {
										console.log("Erorr to delete a decision model", response.statusCode, decisionModel.name, username);
									} else {
										console.log("Decision Model deleted ", decisionModel.name, username)
									}
								}).auth(null, null, true, token);
							}
						} else {
							console.log('There is no decision model for user ', username);
						}
					}
				}).auth(null, null, true, token);
				
			} else {
				console.error('There is no token for user ', username);
			}
		}
	}).auth(username, 'Workshop2019');
}