# Lab 3 - Desenvolvimento de uma tela Mobile utilizando Oracle Mobile Cloud Service - MCS

## Objetivos
- Passo 1: Criar um conector conector com o Process Cloud
- Passo 2: Desenvolver uma API Rest utilizando Javascript, para chamar o conector
- Passo 3: Criar uma aplicação Mobile - Oracle MAX
- Passo 4: Efetuar deploy e teste do App

## Pré-Requisitos
Leia os Links abaixo:
- Executar o Lab 1 e Lab 2
- Ter acesso ao OIC Enterprise Edition
- Ter acesso ao Oracle Mobile Hub
- Instalar o app Oracle MAX no seu celular - [Installing the MAX App](https://docs.oracle.com/en/cloud/paas/mobile-hub/build-low-code/building-and-testing-your-apps.html#GUID-60364DA2-2464-4C4F-ADB3-C845E1B6E591)
- Ver o Vídeo [An Introduction to Mobile Application Accelerator (MAX)](https://docs.oracle.com/en/cloud/paas/mobile-hub/build-low-code/what-is-mobile-application-accelerator.html#GUID-CD0DA584-C21A-4FB3-A284-4EF75819B138)

### Passo 1
**1.1** Faça o login da sua conta no Oracle Ingration Cloud, conta utilizada no Lab 1 e Lab 2.

![image001.png](images/2/image001.png)

**1.2** Vá na opção **Processes** -> **Process Applications** -> **Activate**

![image002.png](images/3/image002.png)

**1.3** Sua aplicação criada no lab 2 deverá estar lá. Vá na opção **Actions** (1) -> **Web Services** (2)

![image003.png](images/3/image003.png)

**1.4** Copie a URL da aba **Exposed** Guarde esta url em um bloco de notas. No meu exemplo ficou algo assim `https://xxxxxxx.oraclecloud.com/soa-infra/services/oracleinternalpcs/CreateOpp_XX!1.0.0*xxxxxxxx/ProcessCreateOppOnSalesCloud.service?WSDL`

![image004.png](images/3/image004.png)

**1.5** Faça o login da sua conta no **Oracle Mobile Cloud Hub**. Link será entregue pelo instrutor.

![image001.png](images/3/image001.png)

**1.6** No menu a esquerda vá na opção **Development** -> **Connectors** 

![image005.png](images/3/image005.png)

**1.7** Clique em **+ New Connector** -> **SOAP**

![image006.png](images/3/image006.png)

**1.8** Preencha os campos:
- **API Display Name** como `CreateOPPConectorPCS_XX` onde XX é o número entregue pelo instrutor.
- **WSDL URL** com a url que você guardou no passo 1.4. 
- **Short Description** com uma descriçao escolhida por você. 

Agora clique em **Create**. 

![image007.png](images/3/image007.png)

Na próxima tela confirme suas informações e clique em **>**.

![image008.png](images/3/image008.png)

**1.9** Escolha a política de segurança com nome `oracle/http_basic_auth_over_ssl_client_policy` e depois adicione uma **csf-key**, para isso clique no ícone chave, abaixo a direita da tela.

![image009.png](images/3/image009.png)

**1.10** Na tela **Select or Create a New API Key** clique em **Add** e depois preencha os campos:
- **Key Name** com `PCS_TTC_XX` onde XX é o número entregue pelo instrutor.
- **Short Description** com `PCS_TTC_XX` onde XX é o número entregue pelo instrutor.
- **User Name** com o usuário que você utiliza para conectar no Oracle Cloud.
- **Password** com a senha que você utiliza para conectar no Oracle Cloud.

Clique em **Save** e depois **Select**, vá para a próxima tela, tela de teste, clicando em **>**.

![image010.png](images/3/image010.png)

**1.11** Preencha o campo **HTTP Message Body** com o seguinte código:

```json
{
   "Header": null,
   "Body": {
      "start": {
         "formArg": {
            "Opportunity": {
               "opportunityName": "opportunityName45",
               "owner": "owner46",
               "winProb": "10",
               "productName": "productName48",
               "productPrice": 0,
               "productQty": 0
            }
         }
      }
   }
}
```

Nos campos de autenticação escolha em **Backend** a opção de `bots_samples` e preencha com seu username e password que você utilizou para conectar no Oracle Cloud.

![image011.png](images/3/image011.png)

**1.12** Clique em **Test Endpoint** e espere a resposta da chamada até o Process Cloud, ela deverá retornar um status 200, algo parecido com a imagem abaixo. Se der algum erro, tente corrigir o nome das variáveis que você colocou no passo 1.11, ou verique seu login e senha estão corretos. Caso contrário clique em **Done**.

![image012.png](images/3/image012.png)

### Passo 2

**2.1** Na tela inicial do Oracle Mobile Hub vá em **Development** -> **APIs** -> **+ New Api** -> **Express API**.

![image013.png](images/3/image013.png)

![image014.png](images/3/image014.png)

**2.2** Vá até **Resources** -> **+ New Resource**.

![image015.png](images/3/image015.png)

**2.3** Preencha os campos:
- **Display Name**: `Opportunity`
- **Name** : `opportunity`
- **Display Name (plural)** : `Opportunities`

![image016.png](images/3/image016.png)

Clique em **Next >**

**2.4** Clique em **Add Sample Data**.

![image017.png](images/3/image017.png)

Preencha o campo com o json abaixo e vá para a próxima página.
```json
{
	"name": "opportunityName45",
	"owner": "owner46",
	"winProb": "10",
	"productName": "productName48",
	"productPrice": 0,
	"productQty": 0
}
```
![image017_1.png](images/3/image017_1.png)

**2.5** Clique em **Finish**

![image018.png](images/3/image018.png)

Clique em **Save**

![image019.png](images/3/image019.png)

**2.6** Clique em **Implementation** e faça o download do arquivo de exemplo clicando no botão **JavaScript Scaffold**.

![image020.png](images/3/image020.png)

O arquivo baixado terá o nome parecido com `createoppapixx.zip`. Descompacte o arquivo em seu computador, ele deverá conter os seguintes arquivos:

| Files  |
| ------------ |
|createoppapixx.js   |
|createoppapixx.raml   |
|package.json   |
|ReadMe.md   |
|samples.txt   |
|swagger.json   |
|toolsConfig.json  |


**2.7** Vamos escrever a chamada da API em Javascript.

**2.7.1** Edite o arquivo `package.json` e adicione na linha 9 o conector que criamos no passo 1. Ele deverá ficar parecido com o código abaixo:

```json
{
  "name" : "createoppapixx",
  "version" : "1.0.0",
  "description" : "Create Opp API XX",
  "main" : "createoppapixx.js",
  "oracleMobile" : {
    "dependencies" : {
      "apis" : { },
      "connectors" : { "/mobile/connector/CreateOPPConectorPCS_XX" : "1.0" }
    }
  }
}
```
Lembre-se que **CreateOPPConectorPCS_XX** deverá ser substituido pelo nome do conector que você criou no passo 1.8 no campo **API Name**

**2.7.2** Edite o arquivo `createoppapixx.js`. Vamos alterar o método chamado `service.post('/mobile/custom/CreateOppAPIXX/opportunity', function(req,res) {});` conforme a imagem abaixo.

![image022.png](images/3/image022.png)

Este método deverá conter o seguinte código:

```javascript
service.post('/mobile/custom/CreateOppAPIXX/opportunity', function(req,res) {
	var sdk = req.oracleMobile;
	var optionsList = {
			Header: null,
			Body: {
				"start" : {
					"formArg" : {
						"Opportunity": {
							"opportunityName": req.body['name'],
			            	"owner": req.body['owner'],
							"winProb": req.body['winProb'],
							"productName": req.body['productName'],
							"productPrice": req.body['productPrice'],
							"productQty": req.body['productQty']
						}
					}
				}
			}
		};

	sdk.connectors.post('CreateOppPCSConnectorXX', 'start', optionsList, {inType: 'json', versionToInvoke: '1.0'}).then(
		function (result) {
			res.status(result.statusCode).send(result.result);
		},
		function (error) {
			res.status(error.statusCode).send(error.error);
		}
	);
});
```

**2.7.3** Agora salve todos os arquivos e compacte novamente com o nome `createoppapixx.zip`. Com este .zip em mãos faça o upload no Oracle Mobile Hub através do link **Upload an implementation archive** conforme tela abaixo, depois clique em **Test**.

![image024.png](images/3/image024.png)

**2.8** Na tela da API clique em **Test**, caso não tenha clicado no passo 2.7.3. Clique em **POST Create Opportunity** e depois em **Use Example**. Preencha o **Backend** como bots_samples e **Authentication Method** como Current User.

![image025.png](images/3/image025.png)

Agora clique em **Test Endpoint**
	
![image026.png](images/3/image026.png)

O resultado deverá ser o status 200, algo parecido com a imagem abaixo:

![image027.png](images/3/image027.png)

**2.9** Agora vamos publicar o conector e a API desenvolvida, dessa forma o Oracle MAX irá conseguir enchergar a API. 

Publique o conector conforme imagem abaixo:

![image028.png](images/3/image028.png)

Publique a API conforme imagem abaixo:

![image029.png](images/3/image029.png)

### Passo 3

**3.1** Na tela inicial do Oracle Mobile Hub vá em **Development** -> **MAX Apps** -> **New Application**.

![image030.png](images/3/image030.png)

**New Application**

![image031.png](images/3/image031.png)

**3.2** Na tela de criação, siga as instruções conforme as telas abaixo, até chegar na opção de criar a aplicação.

- **Application Name** : `Create Opportunity XX`

![image032.png](images/3/image032.png)

![image033.png](images/3/image033.png)

- **Screen Title** : `Opportunity`

![image034.png](images/3/image034.png)

![image035.png](images/3/image035.png)

Clique em **Create**

![image036.png](images/3/image036.png)

**3.3** Na tela inicial da aplicação, clique no ícone **Data** (1) -> **Applications Services +** (2). Na tela que abrirá escolha a API criada no passo 2.9, no meu caso é a `Create Opp API XX` (3) e por fim clique em **Select** (4).

![image037.png](images/3/image037.png)

**3.4** Clique no ícone **Components**, arraste o component **Form** para tela do celular.

![image038.png](images/3/image038.png)

**3.5** Do lado direito da tela clique em **Add Data** e depois selecione **Opportunity**

![image040.png](images/3/image040.png)

Selecione **Opportunity**

![image041.png](images/3/image041.png)

**3.6** Faça o mapeamento de todos os campos do **Business Object** em **Form Component Fields**, arrastando o que está no campo **Opportunity** para **Form Component Fields**, retire apenas o **id**, por fim clique em **Finish**. 

![image042.png](images/3/image042.png)

Como ficará a tela após clicar em Finish:

![image043.png](images/3/image043.png)

**3.7** Vamos criar o botão de salvar a oportunidade. Para isso clique no ícone **Application Screens** (1), em **Opportuninity** -> **Edit** (2) -> **Header Buttons** (3).

![image046.png](images/3/image046.png)

Em **Right Side** -> **Button +** -> **Button Label** digite `Save`

![image048.png](images/3/image048.png)

Digite `Save`

![image049.png](images/3/image049.png)

**3.8** Na aba **Action** clique em **ADD ACTION (TAP BUTTON)**, clique em **Tap** novamente

![image050.png](images/3/image050.png)

**3.9** Em Configure Action arraste a ação que está localizada em **Business Objects** -> **Create Opportunity** para a direita

![image051.png](images/3/image051.png)

Depois arraste as opções **Refresh All Data** e **Navigate to Screen**. Clique em **Business Action Mapper**

![image052.png](images/3/image052.png)

**3.10** Faça o mapeamento dos campos que estão em **Current Screen** para **Action Parameters** conforme tela abaixo, e depois clique em **Finish**:

![image053.png](images/3/image053.png)

Clique em **Save** conforme imagem:

![image054.png](images/3/image054.png)

**3.11** Vamos criar uma nova tela, esta tela será chamada após a criação da oportuniade, para indicar que a oportunidade foi criada com sucesso. Clique no ícone **Application Screens** -> **New Screen**

![image055.png](images/3/image055.png)

Na tela de criação, siga as instruções conforme as telas abaixo, até chegar ao final.

![image056.png](images/3/image056.png)

- **Screen Title** : `Success`

![image057.png](images/3/image057.png)

Clique em **Finish**

![image058.png](images/3/image058.png)

**3.12** Nesta nova tela vamos colocar uma imagem de sucesso. Esta tela será chamada apóis a criação da oportuniadde. Para isso arraste o componente **Image** para a tela de *design*. 

![image059.png](images/3/image059.png)

Clique na aba **Data** e depois em **Upload a custom image** e selecione a imagem [like-red.png](https://github.com/matheus-neia/Oracle/blob/master/paas4saas/files/like-red.png) que está na pasta files. 

![image060.png](images/3/image060.png)

**3.13** Clique no ícone **Application Screens** e selecione a tela **Opportunity** (Este nome pode variar dependendo do nome da tela que você colocou no passo 3.2). 
Após selecionar a tela, clique na aba **Actions** -> **Create Opportunity**.

![image061.png](images/3/image061.png)

**3.14** Altere a ação **Navigate to Screen** e escolhe a tela chamada `Success` (Este nome pode variar dependendo do nome da tela que você colocou no passo 3.11). Depois clique em **Save**.

![image062.png](images/3/image062.png)

###Passo 4

**4.1** Clique no ícone de teste conforme imagem abaixo.

![image063.png](images/3/image063.png)

**4.2** Insira seus dados de login para simular o teste. Após isso preencha os campos conforme figura abaixo e depois clique em **Save**

![image064.png](images/3/image064.png)

Deverá ser apresentada a tela de `Success`.

![image065.png](images/3/image065.png)

**4.3** Agora você pode realizar o teste em seu próprio celular, baixando o aplicativo Oracle MAX em seu celular através dos links abaixo, depois clique no ícone **Publish** e siga as instruções:

Google Play:

https://play.google.com/store/apps/details?id=com.oracle.max&hl=en

Apple Store:

https://itunes.apple.com/us/app/oracle-max/id1091771940?mt=8

![image066.png](images/3/image066.png)