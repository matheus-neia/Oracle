# Visão Geral do *Workshop*
## Processo de negócio
Muitas vezes precisamos colocar um processo de negócio, com regras específicas em nosso CRM, para isso este workshop irá mostrar a criação de uma oportunidade no **Oracle Sales Cloud** utilizando o **Oracle Integration Cloud Service** para integrar este processo de negócio ao software Oracle Sales Cloud. 
Após isso iremos criar um aplicativo Mobile, com a ajuda do **Oracle Mobile Cloud Service** e **Oracle MAX**, para rodar este novo processo de negócio criado. Além deste app iremos criar uma App Web utilizando o **Oracle  Visual Builder**.

## Divisão do Workshop
- **Lab1:** Desenvolvimento da Integração entre Oracle OIC e Oracle Sales Cloud
- **Lab2:** Desenvolvimento de um processo de negócio utilizando Process Cloud Service - OIC e integrando com Oracle Sales Cloud
- **Lab 3:** Desenvolvimento de uma tela Mobile utilizando Oracle Mobile Cloud Service - MCS
- **Lab 4:** Desenvolvimento de uma tela utilizando o Oracle Visual Builder

## Pré Requisitos
Será necessário para realizar este Workshop:
- Instância do Oracle Integration Cloud - OIC
- Instância do Oracle Mobile Cloud Service - MCS
- Instância do Oracle Sales Cloud
- Postman - [Download](https://www.getpostman.com/ "Download")
- Sugestão em utilizar o navegador Chrome com o touchscreen desligado.  [Desligar o touchscreen no Windows 10](https://support.microsoft.com/en-us/help/4028019/windows-enable-and-disable-your-touchscreen-in-windows-10 "Desligar o touchscreen no Windows 10")
- Utlizar o navegador na lingua inglesa.  - [Como mudar a língua no Chrome](https://support.google.com/chrome/answer/173424?co=GENIE.Platform%3DDesktop&hl=en "Como mudar a língua no Chrome")

## Atividades

#### Lab 1 - Desenvolvimento da Integração entre Oracle OIC e Oracle Sales Cloud
**Documentação**: Lab1.md
##### Objetivos
- Criar um conector REST
- Criar um conector para o Oracle Sales Cloud
- Criar uma integração entre o conector rest e o conector Oracle Sales Cloud

#### Lab 2 - Desenvolvimento de um processo de negócio utilizando Process Cloud Service - OIC e integrando com Oracle Sales Cloud
**Documentação**: Lab2.md
##### Objetivos
- Desenvolver um processo de negócio que valida se o valor da oportunidade for maior que 5000 USD o gerente deverá aprovar a sua criação 
- Desenvolver um processo de negócio que valida se o desconto da oportunidade for maior que 50% o gerente deverá aprovar a sua criação
- Integrar o processo de negócio com a integração criada no Lab 1.

#### Lab 3 - Desenvolvimento de uma tela Mobile utilizando Oracle Mobile Cloud Service - MCS
**Documentação**: Lab3.md
##### Objetivos
- Criar um conector no Oracle MCS, este conector irá apontar para o processo criado no Lab2. 
- Criar uma API no Oracle MCS apontando para o conector criado.
- Criar uma aplicação utilizando o Oracle MAX, esta aplicação irá chamar o processo criado no Lab2 através da API criada no Oracle MCS

#### Lab 4 - Desenvolvimento de uma tela utilizando o Oracle Visual Builder
**Documentação**: Lab4.md
##### Objetivos
- Desenvolver uma aplicação Web com um formulário 
- Esta aplicação irá chamar o processo criado no Lab2