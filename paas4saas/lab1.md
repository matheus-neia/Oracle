# Lab 1 - Desenvolvimento da Integração entre Oracle OIC
## Objetivos
- Passo 1: Criar um conector REST
- Passo 2: Criar um conector para o Oracle Sales Cloud
- Passo 3: Criar uma integração entre o conector rest e o conector Oracle Sales Cloud
- Passo 4: Efetuar teste para criação de uma oportunidade

## Pré-Requisitos
- Ter acesso ao OIC
- Ter acesso ao Oracle Sales Cloud
- Link dos serviços do Sales Cloud - [Veja como obter os links](https://docs.oracle.com/en/cloud/paas/integration-cloud/sales-adapter/prerequisites-creating-connection.html#GUID-8AF6BDD4-A711-480E-B71F-FAD062024A57)
- Ler o material: [Developing Integrations with Oracle Integration Cloud Service](https://docs.oracle.com/en/cloud/paas/integration-cloud-service/icsug/mapping-data-and-creating-lookups.html) 
- Ver o material: [Como usar o mapeamento](https://www.youtube.com/watch?v=6xNUpB7z9mA "Mapping Data in Oracle Integration Cloud Service")

### Passo 1
**1.1** Faça o login da sua conta no Oracle Cloud. Link será entregue pelo instrutor.

![image001.png](images/1/image001.png "image001.png")


**1.2** Vá até o link **Integration**.

![image002.png](images/1/image002.png "image002.png")

**1.3** Vá até o link **Connections** e depois **Create**. 

![image003.png](images/1/image003.png "image003.png")


**1.4** Pesquisa por *REST* e escolha o conector.

![image004.png](images/1/image004.png "image004.png")

**1.5** Insira o nome `RestAdapterWorkshop_XX`, onde XX será o número entregue pelo instrutor. Em **Role** selecione  **Trigger** e então clique em **Create**. 

![image005.png](images/1/image005.png "image005.png")


**1.6** Clique em **Save** e depois em **Close**

![image006.png](images/1/image006.png "image006.png")



### Passo 2
**2.0** Repita os passos 1.3, 1.4 e 1.5. Porém agora o nome do conector será *Oracle Sales Cloud*. No campo do nome da conexão insira `SalesCloudWorkshop_XX` (Onde XX será entregue pelo instrutor). Em **Role** selecione **Invoke** depois vá em **Create**.

**2.1** Na página de configuração do conector no seção **Connection Properties** clique em **Configure Connectivity**. Configure a conexão utilizando a URL do *OSC - Oracle Sales Cloud*. Para obter as configurações necessários veja o [link](https://docs.oracle.com/en/cloud/paas/integration-cloud/sales-adapter/prerequisites-creating-connection.html#GUID-8AF6BDD4-A711-480E-B71F-FAD062024A57).

![image007.png](images/1/image007.png "image007.png")

**2.1.1** Preencha em **OSC Services Catalog WSDL URL** com a informação que você pegou no item [Link dos serviços do Sales Cloud](https://github.com/matheuzum/Oracle/blob/master/paas4saas/lab1.md#pr%C3%A9-requisitos) ou utilize esta: `https://testingapplication.com/fscmService/ServiceCatalogService?WSDL` e substitua testingapplication.com pelo domínio do seu ambiente do Oracle Sales Cloud - OSC.

**2.1.2** Preencham em **Interface Catalog URL (optional)** com a informação que você pegou no item [Link dos serviços do Sales Cloud](https://github.com/matheuzum/Oracle/blob/master/paas4saas/lab1.md#pr%C3%A9-requisitos) ou utilize esta: `https://testingapplication.com/helpPortalApi/otherResources/latest/interfaceCatalogs` e substitua testingapplication.com pelo domínio do seu ambiente do Oracle Sales Cloud - OSC.

![image008.png](images/1/image008.png)

**2.1.3** Na seção **Security** clique em **Configure Security** e preencha o login e senha de um usuário do OSC. Clique em **OK**

![image009.png](images/1/image009.png "image009.png")

**2.2** Agora clique em **Test** e aguarde até o *Oracle Integration Cloud* efetuar o teste e validar a conexão com o OSC. Após o término do teste, observe o *label* de porcentagem, ele deverá aparecer 100% conforme figura abaixo:

![image010.png](images/1/image010.png "image010.png")

**2.3** Com o *label* de porcentagem em 100% clique em **Save** e depois **Close**.


### Passo 3
**3.1** No canto esquerdo da tela clique em **Integrations** e depois no canto direito da tela em **Create**. Escolha a opção **App Driven Orchestration**.

![image011.png](images/1/image011.png "image011.png")

**3.2** Preencha o nome da integração como `CreateOppOSC_XX` onde XX será o número entregue pelo instrutor. Depois clique em **Create**.

![image012.png](images/1/image012.png "image012.png")

**3.3** Na próxima tela, Adicione a conexão REST `RestAdapterWorkshop_XX` eso fue creado antes.

![image013.png](images/1/image013_1.png)

**3.4** Configurando o adaptador REST

**3.4.1** Preenche os campos conforme imagens abaixo:

![image013_1.png](images/1/image013_5.png)

**3.4.2** Clique em  **Next >**

Agora no campo **Select the request payload format** selecione a opção **JSON Sample** e depois clique em **<<< inline >>>**

![image014.png](images/1/image014.png)

**3.4.2.1** No campo **Enter Sample JSON** digite o código abaixo e depois clique em **OK**:

```json
{
	"opportunityName" : "Opportunity Name",
	"loginOwner" : "amanda.bell",
	"winProbability" : 10
}
```

![image015.png](images/1/image015.png)


**3.4.3** Selecione **JSON** como tipo do Payload que o endpoint irá receber e depois clique em **Next >**

![image015_1.png](images/1/image015_1.png)

**3.4.4** Agora no campo **Select the response payload format** selecione a opção **JSON Sample** e depois clique em **<<< inline >>>**

![image016.png](images/1/image016.png)

**3.4.4.1** No campo **Enter Sample JSON** digite o código abaixo e depois clique em **OK**:

```json
{ "opportunityId" : "123095" }
```

![image017.png](images/1/image017.png)

**3.4.5** Selecione **JSON** como tipo do Payload que o endpoint irá responder e depois clique em **Next >**

![image017_1.png](images/1/image017_1.png)

Na tela *Summary*, confira se as configurações estão correstas em **Endpoint Summary** e depois clique em **Done**

![image018.png](images/1/image018.png)

**3.5** Na tela principal, adicione mais um componente `SalesCloudWorkshop_XX`.

![image019.png](images/1/image019_1.png)

**3.6** Configurando o adaptador SalesCloud

**3.6.1** Preenche os campos conforme imagens abaixo e depois em **Next >**.

![image020.png](images/1/image020.png)


**3.6.2** Configure os campos conforme indicação abaixo:

| Passo  | Campo  | Valor  |
| ------------ | ------------ | ------------ |
| 1 | Browse By  | Business Objects  |
| 2 | Select a Business Object  | Opportunity : OpportunityService  |
| 3 | Select the Operation to Perform on the Business Object | createOpportunity |

e depois clique em **Next >**.

![image021.png](images/1/image021.png)

**3.6.3** Clique em  **Done**

![image022.png](images/1/image022.png)

**3.7** Configurando uma chamada para recuperar o ID do *Owner* da oportunidade:

**3.7.1** Adicione novamente o componente `SalesCloudWorkshop_XX` e arraste entre a primeira conexão REST e a última chamada, conforme indicado na figura abaixo:

![image023.png](images/1/image023_001.png)

**3.7.2** Após abrir a tela de configuração desta integração coloque o nome da integração como `GetUserByUsername` e depois clique em **Next >**

![image023_1.png](images/1/image023_1.png)

**3.7.3** Selecione os campos conforme informações abaixo:

| Campo  | Valor  |
| ------------ | ------------ |
| Browse By  | Services  |
| Select a Service | ResourceService  |
| Select the Operation to Perform on the Business Service | findResource  |


Clique em **Next >**

![image024.png](images/1/image024.png)

**3.8** Mapeamento a chamada para recuperar o ID do *Owner* da Oportuniade.

*Caso você tenha dúvidas de como efetuar o mapeamento veja o link que está na seção Pré Requisitos: Como usar o mapeamento. [[1]][mapeamento]*

**3.8.1** Clique no mapeamento com o nome **Map to GetUserByUsername**, conforme figura abaixo:

![image025.png](images/1/image025.png)

**3.8.2** Vá navegando do lado direito da tela, abrindo os campos até chegar no campo **attribute** conforme imagem abaixo. Clique com o botão direito em cima do campo **attribute** e depois em **Create target Node**.

![image026.png](images/1/image026.png)

**3.8.3** No lugar indicado em vermelho coloque o valor `Username`, clique em **Save**:

![image027.png](images/1/image027.png)

**3.8.4** Repita os passos 3.8.2 e 3.8.3 para o campo **operator**. O valor será `=`

**3.8.5** Por último arraste, utilizando o mouse, o campo `loginOwner` para o campo **value**. A sua tela de mapeamento deverá ficar igual a tela abaixo:

![image028.png](images/1/image028.png)

**3.8.6** Clique em **Validate** depois em **Close**

![image028_1.png](images/1/image028_1.png)

**3.9** Mapeamento da chamado para a conexão do Sales Cloud:

*Caso você tenha dúvidas de como efetuar o mapeamento veja o link que está na seção Pré Requisitos: Como usar o mapeamento. [[1]][mapeamento]*

**3.9.1** Clique no componente de mapeamento chamado **Map to CreateOppEngagement**, conforme figura abaixo:

![image029.png](images/1/image029.png)

**3.9.2** Faça o mapeamento arrastando os campos da esquerda para a direita conforme figura abaixo:

    opportunityName ===> Name
    winProbability ===> WinProb
    PartyID ===> OwnerResourcePartyId


	opportunityName ===> Name
![image030.png](images/1/image030.png)

	winProbability ===> WinProb
    
![image030.png](images/1/image030_1.png)

	PartyID ===> OwnerResourcePartyId
![image030.png](images/1/image030_2.png)

**3.9.3** Clique em **Validate** depois em **Close**

![image030.png](images/1/image030_3.png)

**3.10** Mapeamento de retorno da chamada do Sales Cloud

**3.10.1** Clique no mapeamento mais ao centro e abaixo da tela e depois em **+**, conforme figura abaixo:

![image031.png](images/1/image031.png)

**3.10.2** Faça o mapeamento arrastando os campos da esquerda para a direita conforme figura abaixo:

    OptyId ===> opportunityId

![image032.png](images/1/image032.png)

**3.10.3** Clique em **Validate** depois em **Close**

**3.11** Rastreamento das chamadas

**3.11.1** Clique em **Tracking**, conforme figura abaixo:

![image033.png](images/1/image033.png)

**3.11.2** Arraste as variáveis do lado esquerdo para os campos do lado direito, conforme figura abaixo:

![image034.png](images/1/image034.png)

**3.12** Após isso, clique em **Save** e depois em **Close**

![image035.png](images/1/image035.png)


### Passo 4

**4.1** Ative a integração e habilite o rastreamento conforme imagem abaixo:

![image036.png](images/1/image036.png)

Habilite as opções conforme imagem abaixo:

![image037.png](images/1/image037.png)

**4.2** Após a ativação, recupere o *endpoint* através do ícone *engrenagem*, guarde este enpoint pois você usará nos próximos passos.

![image038.png](images/1/image038.png)

Além da engrenagem, após a ativação aparecerá uma mensagem mostrando o endpoint.

![image039.png](images/1/image039.png)

**4.3** Abre o software Postam, você pode fazer o download [aqui](https://www.getpostman.com/ "Postman"). Preencha as informações conforme imagem abaixo:

O método você deverá colocar **POST** e a **URL** deverá ser a URL recuperada no item 4.2.

![image040.png](images/1/image040.png)

**4.4** Clique na aba **Authorization** e preencha os campos: **Type** deverá ser **Basic Auth** e o **Username** e **Password** deverão ser utilizados os que você utilizou para se logar no Oracle Integration Cloud - OIC. 

![image041.png](images/1/image041.png)

**4.5** Clique em **Body** e selecione a opção **raw** e coloque o json de teste: 
```json
{
	"opportunityName" : "Opportunity name",
	"loginOwner" : "amanda.bell",
	"winProbability" : 10
}
```

![image042.png](images/1/image042.png)

**4.5** Clique em **Send** e espere a resposta. Ela deverá conter um json de resposta, parecido com a imagem abaixo:

![image043.png](images/1/image043.png)

**4.6** Volte para o Oracle Integration Cloud - OIC e clique em **<**. 

![image044.png](images/1/image044.png)

**4.7** Clique em **Monitoring** -> **Tracking**. Observe que a sua mensagem está aparecendo em verde. Clique em cima da mensagem e observe o caminho feito pela 

![image046.png](images/1/image046.png)

![image047.png](images/1/image047.png)

Detalhes da chamada feita, observe que o caminho que a mensagem fez está verde. Navegue pelas opções para verificar os parâmtreos que foram trafegados. 

![image048.png](images/1/image048.png)


Agora você está pronto para ir para o [**Lab2: Desenvolvimento de um processo de negócio utilizando Process Cloud Service - OIC e integrando com Oracle Sales Cloud**](https://github.com/matheus-neia/Oracle/blob/master/paas4saas/lab2.md).

[mapeamento]: https://github.com/matheuzum/Oracle/blob/master/paas4saas/lab1.md#pr%C3%A9-requisitos "Como usar o mapeamento"