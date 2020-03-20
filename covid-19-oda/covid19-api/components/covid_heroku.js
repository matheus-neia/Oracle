'use strict';
 
module.exports = {
  metadata: () => ({
    name: 'covid_heroku',
    properties: {
      country: { required: true, type: 'string' },
    },
    supportedActions: []
  }),
  invoke: (conversation, done) => {
    
	var country = conversation.properties().country;
	var resp;
	if (country && country != 'Mundo') {
      getCases(country).then(function(result) {
        console.log('Resultado: ' + result);
        resp = JSON.parse(result);
        //conversation.reply(resp.data.cases.activeCases);
		//		conversation.keepTurn('true');
		//		conversation.transition();
		//		done();

		console.log('resp diferente de nulo');
		conversation.variable("quantidadeCasos", resp.data.cases.activeCases);
		conversation.variable("nomePais", resp.data.name);
		conversation.variable("infecoes", resp.data.cases.infections);
		conversation.variable("mortes", resp.data.cases.deaths);
		conversation.variable("recuperados", resp.data.cases.recovered);
		conversation.variable("taxaMortalidade", resp.data.cases.mortalityRate);
		conversation.variable("taxaRecuperacao", resp.data.cases.revoveryRate);
		conversation.transition();
		done();

      });
    } else {
      getAllCases().then(function(result) {
        console.log('Resultado All Cases: ' + result);
		resp = JSON.parse(result);
		
		console.log('resp diferente de nulo');
		conversation.variable("quantidadeCasos", resp.data.cases.activeCases);
		conversation.variable("nomePais", resp.data.name);
		conversation.variable("infecoes", resp.data.cases.infections);
		conversation.variable("mortes", resp.data.cases.deaths);
		conversation.variable("recuperados", resp.data.cases.recovered);
		conversation.variable("taxaMortalidade", resp.data.cases.mortalityRate);
		conversation.variable("taxaRecuperacao", resp.data.cases.revoveryRate);
		conversation.transition();
		done();
      });
	}
  }
};

function getCases(countryCode) {
  console.log ('Country Code is: ' + countryCode);
  let request = require('request');
  return new Promise(function(resolve, reject) {
		try {	
			request('https://covid-19-data.herokuapp.com/api/cases/'+countryCode, function (error, response, body) {
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

function getAllCases() {
  console.log ('Getting All Cases');
  let request = require('request');
  return new Promise(function(resolve, reject) {
		try {	
			request('https://covid-19-data.herokuapp.com/api/cases/total', function (error, response, body) {
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
