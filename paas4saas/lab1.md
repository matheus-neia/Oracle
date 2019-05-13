# Lab 1 - Desenvolvimento da Integração entre Oracle OIC
## Objetivos
- Passo 1: Criar um conector REST
- Passo 2: Criar um conector para o Oracle Sales Cloud
- Passo 3: Criar uma integração entre o conector rest e o conector Oracle Sales Cloud
- Passo 4: Efetuar teste para criação de uma oportuniade

## Pré-Requisitos
Leia os Links abaixo:
- Ter acesso ao OIC
- Ter acesso ao Oracle Sales Cloud
- Link dos serviços do Sales Cloud - [Veja como obter os links](https://docs.oracle.com/en/cloud/paas/integration-cloud/sales-adapter/prerequisites-creating-connection.html#GUID-8AF6BDD4-A711-480E-B71F-FAD062024A57)
- [Developing Integrations with Oracle Integration Cloud Service](https://docs.oracle.com/en/cloud/paas/integration-cloud-service/icsug/mapping-data-and-creating-lookups.html) 
- [Como usar o mapeamento](https://www.youtube.com/watch?v=6xNUpB7z9mA "Mapping Data in Oracle Integration Cloud Service")

### Passo 1
**1.1** Faça o login da sua conta no Oracle Cloud. Link será entregue pelo instrutor.

![image001.png](images/1/image001.png "image001.png")


**1.2** Vá até o link *Integration* .

![image002.png](images/1/image002.png "image002.png")

**1.3** Vá até o link *Connections* e depois *create*. 

![image003.png](images/1/image003.png "image003.png")


**1.4** Pesquisa por *REST* e escolha o conector.

![image004.png](images/1/image004.png "image004.png")

**1.5** Insira o nome `RestAdapterWorkshop_XX`, onde XX será o número entregue pelo instrutor. Em **Role** selecione  `Trigger` e então clique em **Create**. 

![image005.png](images/1/image005.png "image005.png")


**1.6** Clique em **Save** e depois em **Close**

![image006.png](images/1/image006.png "image006.png")



### Passo 2
**2.0** Repita os passos 1.3, 1.4 e 1.5. Porém agora o nome do conector será *Oracle Sales Cloud*. O nome da conexão insira `SalesCloudWorkshop_XX` (Onde XX será entregue pelo instrutor). Em **Role** selecione `Invoke` depois vá em **Create**.

**2.1** Na página de configuração do conector no seção **Connection Properties** clique em **Configure Connectivity** Configure a conexão utilizando a URL do *OSC - Oracle Sales Cloud*. Para obter as configurações necessários veja o [link](https://docs.oracle.com/en/cloud/paas/integration-cloud/sales-adapter/prerequisites-creating-connection.html#GUID-8AF6BDD4-A711-480E-B71F-FAD062024A57 "link").

![image007.png](images/1/image007.png "image007.png")

**2.1.1** Preencha em **OSC Services Catalog WSDL URL** com a informação que você pegou no item 1.8 ou utilize esta: `https://testingapplication.com/fscmService/ServiceCatalogService?WSDL` e substitua testingapplication.com pelo domínio do seu ambiente do OSC. 
**2.1.2** Preencham em **Interface Catalog URL (optional)** com a informação que você pegou no item 1.8 ou utilize esta: `https://testingapplication.com/helpPortalApi/otherResources/latest/interfaceCatalogs` e substitua testingapplication.com pelo domínio do seu ambiente do OSC.

![image008.png](images/1/image008.png "image008.png")

**2.1.3** Na seção **Security** clique em **Configure Security** e preencha o login e senha de um usuário do OSC. Clique em **OK**

![image009.png](images/1/image009.png "image009.png")

**2.2** Agora clique em **Test** e aguarda até o *Oracle Integration Cloud* efetuar o teste e validar a conexão com o OSC. Após o teste efetuar com sucesso observe o *label* de porcentagem, ele deverá aparecer 100% conforme figura abaixo.

![image010.png](images/1/image010.png "image010.png")

**2.3** Com o *label* de porcentagem em 100% clique em **Save** e depois **Close**.


### Passo 3
**3.1** No canto esquerdo da tela clique em **Integrations** e depois no canto direito da tela em **Create**. Escolhe a opção **Basic Routing**.

![image011.png](images/1/image011.png "image011.png")

**3.2** Preencha o nome da integração como `CreateOppOSC_XX` e depois clique em **Create**.

![image012.png](images/1/image012.png "image012.png")

**3.3** Na próxima tela, busque no campo direito (1) pelo conexão `RestAdapterWorkshop_XX` (2), arraste ela até o campo *Drag and Drop a Trigger* (3).

![image013.png](images/1/image013.png "image013.png")

**3.4** Configurando o adaptador rest

**3.4.1** Preenche os campos conforme imagens abaixo:

![image013_1.png](images/1/image013_1.png)

**3.4.2** Clique em  **Next >**

Agora selecione a opção **JSON Sample** e depois clique em **<<< inline >>>**

![image014.png](images/1/image014.png)

**3.4.2.1** No campo **Enter Sample JSON** digite o código abaixo e depois clique em **OK**:

```json
{
	"nomeOportunidade" : "Nome da Oportuniade",
	"loginOwner" : "amanda.bell",
	"probabilidadeGanhar" : 10
}
```

![image015.png](images/1/image015.png)


**3.4.3** Selecione **JSON** como tipo do Payload que o endpoint irá receber e depois clique em **Next >**

![image015_1.png](images/1/image015_1.png)

**3.4.4** Agora selecione a opção **JSON Sample** e depois clique em **<<< inline >>>**

![image016.png](images/1/image016.png)

**3.4.4.1** No campo **Enter Sample JSON** digite o código abaixo e depois clique em **OK**:

```json
{ "idOportuniade" : "123095" }
```

![image017.png](images/1/image017.png)

**3.4.5** Selecione **JSON** como tipo do Payload que o endpoint irá responder e depois clique em **Next >**

![image017_1.png](images/1/image017_1.png)

Tela final, confira se configurou corretamente em **Endpoint Summary** e depois clique em **Done**

![image018.png](images/1/image018.png)

**3.5** Na tela principal, busque no campo direito (1) pelo conexão `SalesCloudWorkshop_XX` (2), arraste ela até o campo *Drag and Drop a Invoke* (3).

![image013.png](images/1/image019.png "image019.png")

**3.6** Configurando o adaptador SalesCloud

**3.6.1** Preenche os campos conforme imagens abaixo:

![image020.png](images/1/image020.png)

**3.6.2** Clique em  **Next >**
**3.6.3** No Campo **Browse By** selecione **Business Objects** (1). No campo **Select a Business Object** escolha a opção **Opportunity : OpportunityService** (2) e no campo **Select the Operation to Perform on the Business Object** selecione a opção **createOpportunity**, conforme imagem abaixo, e depois clique em **Next >**.

![image021.png](images/1/image021.png)

**3.6.4** Clique em  **Done**

![image022.png](images/1/image022.png)

**3.7** Configurando uma chamada para recuperar o ID do *Owner* da Oportunidade:

**3.7.1** Do lado direito da tela procure novamente pela conexão `SalesCloudWorkshop_XX` e arraste até o **+** no canto esquerdo, conforme indicado na figura abaixo:

![image023.png](images/1/image023.png)

**3.7.2** Após abrir a tela de configuração desta integração coloque o nome da integração como `GetUserByUsername` e depois clique em **Next >**

![image023_1.png](images/1/image023_1.png)

**3.7.3** No Campo **Browse By** selecione **Services**. No campo **Select a Service** escolha a opção **ResourceSercice** e no campo **Select the Operation to Perform on the Business Service** selecione a opção **findResource**, conforme imagem abaixo, e depois clique em **Next >**.

![image024.png](images/1/image024.png)

**3.8** Mapeamento a chamada para recuperar o ID do *Owner* da Oportuniade:
Caso você tenha dúvidas de como efetuar o mapeamento veja o link que está na seção Pré Requisitos: Como usar o mapeamento. [[1]][mapeamento]

**3.8.1** Clique no mapeamento mais a esquerda da tela e depois em **+**, conforme figura abaixo:

![image025.png](images/1/image025.png)

**3.8.2** Clique no campo **attribute** conforme imagem abaixo:

![image026.png](images/1/image026.png)

**3.8.3** No lugar indicado coloque o valor `Username`, clique em **Save** e depois **Close**:

![image027.png](images/1/image027.png)

**3.8.4** Repista os passos 3.8.1 e 3.8.2 para o campo **operator** e o valor será `=`

**3.8.5** Por último arraste, utilizando o mouse, o campo `loginOwner` para o campo **value**

![image028.png](images/1/image028.png)

**3.8.6** Clique em **Validate** deopis em **Close**

**3.9** Mapeamento a chamada para chamar a conexão do Sales Cloud:
Caso você tenha dúvidas de como efetuar o mapeamento veja o link que está na seção Pré Requisitos: Como usar o mapeamento. [[1]][mapeamento]

**3.9.1** Clique no mapeamento mais ao centro e acima da tela e depois em **+**, conforme figura abaixo:

![image029.png](images/1/image029.png)

**3.9.2** Faça o mapeamento arrastando os campos da esquerda para a direita conforme figura abaixo:

    CurrencyCode = USD (campo fixo)
    nomeOportunidade ===> Name
    probabilidadeGanhar ===> WinProb
    PartyID ===> OwnerResourcePartyId

![image030.png](images/1/image030.png)

**3.9.3** Clique em **Validate** deopis em **Close**

**3.10** Mapeamento de retorno da chamada do Sales Cloud:
**3.10.1** Clique no mapeamento mais ao centro e abaixo da tela e depois em **+**, conforme figura abaixo:

![image031.png](images/1/image031.png)

**3.10.2** Faça o mapeamento arrastando os campos da esquerda para a direita conforme figura abaixo:

    OptyID ===> idOportunidade

![image032.png](images/1/image032.png)

**3.10.3** Clique em **Validate** deopis em **Close**

**3.11** Rastreamento das chamadas
**3.11.1** Clique em **Tracking**, conforme figura abaixo:

![image033.png](images/1/image033.png)

**3.11.2** Arraste as variáveis do lado esquerdo para os campos do lado direito, conforme figura abaixo:

![image034.png](images/1/image034.png)

**3.11** Após isso, verifique se o campo de porcentagem de atividades está igual a 100%, se estiver clique em **Save** e depois em **Close**

![image035.png](images/1/image035.png)



[mapeamento]: https://github.com/matheuzum/Oracle/blob/master/paas4saas/lab1.md#objetivos "Como usar o mapeamento"