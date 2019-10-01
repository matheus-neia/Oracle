const request = require('request');
var sleep = require('system-sleep');
const baseUrl = 'https://paas4saas-lad2-acteambr.integration.ocp.oraclecloud.com';
const login = 'matheus.neia@oracle.com'
const pass = 'Mmn0120Bov@0'

getSpaces();

function getSpaces() {
	console.log('Calling to gel all spaces ', baseUrl);
	request.get(baseUrl + '/ic/api/process/v1/spaces',  function (error, response, body) {
		if (error) {
			console.error('error: ', error);
	  		console.log('statusCode: ', response && response.statusCode);
		} else {
			var spaces = JSON.parse(body);
			if (spaces.items && spaces.items.length > 0) {
				console.log('There are spaces', spaces.items.length);
				for (var i = 0, len = spaces.items.length; i < len; i++) {
					//get all projects in space
					console.log('Get All Projects in space', spaces.items[i].name, spaces.items[i].creator);
					if (spaces.items[i].creator.includes('OIC.USER')) {
						getAllProjectsAndDeleteWithouCallback(spaces.items[i].id);
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

function getAllProjectsAndDeleteWithouCallback(spaceId) {
	var url = baseUrl + '/ic/api/process/v1/spaces/' + spaceId + '/projects';
	request.get(url, function (error, response, body) {
		if (!error && response.statusCode == 200) {
			var projects = JSON.parse(body);
			if (projects.items && projects.items.length > 0) {
				deleteProjectWithouCallback(spaceId, projects);
			} else {
				console.log('There is no projects to delete in ', url);
			}
		} else {
			console.error('error to delete project: ', baseUrl + '/ic/api/process/v1/spaces/' + spaceId + '/projects');
	  		console.log('statusCode: ', response && response.statusCode);
		}
	}).auth(login, pass);
}

function deleteProjectWithouCallback(spaceId, projects) {
	if (projects.items && projects.items.length > 0) {
		for (var i = 0, len = projects.items.length; i < len; i++) {
			var urlToDelete = baseUrl + '/ic/api/process/v1/spaces/' + spaceId + '/projects/' + projects.items[i].id
			console.log('Deleting project', projects.items[i].creator, urlToDelete);
			request.delete(urlToDelete, function (error, response, body) {
				if (!error && response.statusCode == 200) {
					console.log('Project deleted', projects.items[i].creator, projects.items[i].id)
				} else {
					console.error('Error to delete a project: ', error, projects.items.id);
					console.log('statusCode: ', response && response.statusCode);
				}
			//}).auth(projects.items[i].creator, "Workshop2019");
			}).auth(login, pass);
		}
	} else {
		console.log('There is no projects to delete');
	}
}

function getAllProjectsAndDelete(spaceId) {
	request.get(baseUrl + '/ic/api/process/v1/spaces/' + spaceId + '/projects', deleteProject).auth(login, pass);
}

function deleteProject(error, response, body) {
	console.log("Space id in deleteProject", this.spaceId);
	if (!error && response.statusCode == 200) {
		var projects = JSON.parse(body);
		if (projects.items && projects.items.length > 0) {
			for (var i = 0, len = projects.items.length; i < len; i++) {
				var urlToDelete = baseUrl + '/ic/api/process/v1/spaces/' + this.spaceId + '/projects/' + projects.items.id
				console.log('Deleting project', urlToDelete);
				request.delete(urlToDelete, function (error, response, body) {
					if (!error && response.statusCode == 200) {
						console.log('Project deleted', projects.items.id)
					} else {
						console.error('error to delete a project: ', error, projects.items.id);
	  					console.log('statusCode: ', response && response.statusCode);
					}
				}).auth(login, pass);
			}
		} else {
			console.log('There is no projects to delete old', response.url);
		}
	} else {
		console.error('error: ', error);
	  	console.log('statusCode: ', response && response.statusCode);
	}
}


function olddeleteProjectsInSpace(idSpace, nameSpace) {
	console.log('Deleting Projects in Space ' + nameSpace);
	var optionsRequest = {
		url: baseUrl + '/ic/api/process/v1/spaces/' + idSpace + '/projects'
	};

	request.get(optionsRequest, function (error, response, body) {
		if (error) {
	  	console.error('error on Retrieving Projects: ', error);
	  	console.log('statusCode: ', response && response.statusCode);
	  } else {
		console.log('statusCode to getting projects in space: ', response && response.statusCode);
		var projects = JSON.parse(body);
		if (projects.items && projects.items.length > 0) {
			console.log('Deleting Projects in Space ' + projects.items.length);
	  		var itens = projects.items;
		  	for (var i = 0, len = itens.length; i < len; i++) {
	  			deleteProject(idSpace, itens[i].id, itens[i].name);
			}
	  	} else {
	  		console.log('There is no result on URL ' + optionsRequest.url);
	  	}
	  } 
	}).auth('matheus.neia@oracle.com', 'Mmn0120Bov@0', false);
}

function olddeleteProject(idSpace, idProject, nameProject) {
	console.log('Deleting Project ' + idProject + ' - ' + nameProject);
	var optionsRequest = {
		url: baseUrl + '/ic/api/process/v1/spaces/' + idSpace + '/projects/' + idProject
	};

	request.delete(optionsRequest, function (error, response, body) {
		if (error) {
	  	console.error('error on delete project: ', error);
	  	console.log('statusCode: ', response && response.statusCode);
	  } else {
		//console.log('URL to Delete Project: ' + optionsRequest.url);
		console.log('statusCode to delete project: ', response && response.statusCode);
		console.log('Project Deleted: ' + idProject + ' - ' + nameProject);
	  } 
	}).auth('matheus.neia@oracle.com', 'Mmn0120Bov@0', false);

}

function olddeleteSpaces() {

	var optionsRequest = {
		url: baseUrl + '/ic/api/process/v1/spaces'
	};

	request.get(optionsRequest, function (error, response, body) {
	  if (error) {
	  	console.error('error: ', error);
	  	console.log('statusCode: ', response && response.statusCode);
	  } else {
	  	console.log('statusCode to get Spaces: ', response && response.statusCode);
	  	var spaces = JSON.parse(body);
	  	if (spaces.items && spaces.items.length > 0) {
			console.log('Deleting Spaces ' + spaces.items.length);
	  		var itens = spaces.items;
		  	for (var i = 0, len = itens.length; i < len; i++) {
				deleteSpace(itens[i].id);
			}
	  	} else {
	  		console.log('There is no result on URL ' + optionsRequest.url);
	  	}
	  } 
	}).auth('matheus.neia@oracle.com', 'Mmn0120Bov@0', false);
	
}



function deleteSpace(idSpace) {
	var optionsRequest = {
		url: baseUrl + '/ic/api/process/v1/spaces/' + idSpace
	};
	request.delete(optionsRequest, function (error, response, body) {
		if (error) {
			console.error('error on delete space: ', error);
			console.log('statusCode: ', response && response.statusCode);
		} else {
			console.log('URL to Delete Project: ' + optionsRequest.url);
			console.log('statusCode to delete space: ', response && response.statusCode);
			console.log('Space Deleted: ' + idSpace);
			//console.log(response.headers);
			console.log(response.body);
		}
	}).auth('matheus.neia@oracle.com', 'Mmn0120Bov@0', false);
}

function undeployProjects (idProject) {
	//TODO
}