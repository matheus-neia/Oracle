'use strict';

//obtenerDireccion(66436);
module.exports = {
	metadata: () => ({
		name: 'obtenerDireccion',
		properties: {
			"codigo": {
				"type": "string",
				"required": true
			}
		},
		supportedActions: []
	}),
	invoke: (conversation, done) => {
		var codigo = conversation.properties().codigo;    

		if(codigo) {
			obtenerDireccion(codigo).then(function(result) {
				console.log(result);
				let resp = JSON.parse(result);
				//				conversation.variable('direccion', result);
				conversation.reply(resp.codigo_postal + ' - ' + resp.municipio);
				conversation.keepTurn('true');
				conversation.transition();
				done(); 
			}, function(err) {
				console.log(err); 
				conversation.variable('direccion', 'Sin dirección.');
				conversation.transition();
				done(); 
			});
			
		} else {
			conversation.reply({text: 'Error.'});
			conversation.transition('Error');
			done();
		}
	}
};

function obtenerDireccion(codigo) {
	console.log('teste');
	let request = require('request');
	return new Promise(function(resolve, reject) {
		try {	
			request('https://api-codigos-postales.herokuapp.com/v2/codigo_postal/'+codigo, function (error, response, body) {
				if (error) {
					console.error(err);
					reject(error);
				}	
				resolve(body);
			});

		} catch (err) {
			console.error(err);
			reject(err);
		}
	});			
}	