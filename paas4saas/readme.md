# Visão Geral do *Workshop*
## Processo de negócio
Muitas vezes em aplicações existentes tanto como SaaS quanto on-premises precisamos adicionar um processo de negócio com regras específicas ou incluir novas funcionalidades. Dentro de um CRM ou outro aplicativo (SaaS ou On-Premises), precisamos também criar uma aplicação móvel buscando informações deste aplicativo ou demais aplicativos.

Para a solução destes problemas este workshop fio gerado e irá mostrar a criação de uma oportunidade no **Oracle Sales Cloud (OSC)** utilizando o **Oracle Integration Cloud Service (OIC)** para integrar, criar um processo de negócio e aplicações móveis e web para software Oracle Sales Cloud.
Iremos criar um aplicativo móvel, com a ajuda do **Oracle Mobile Hub (OMH)** e **Oracle MAX**, para rodar este novo processo de negócio criado. 
Além deste aplicativo iremos criar uma aplicação web utilizando o **Oracle Visual Builder**. 

Para realizar estas tarefas iremos executar os laboratórios abaixo.


## Divisão do Workshop
- **Lab1:** Desenvolvimento da Integração entre Oracle OIC e Oracle Sales Cloud
- **Lab2:** Desenvolvimento de um processo de negócio utilizando Process Cloud Service - OIC e integrando com Oracle Sales Cloud
- **Lab 3:** Desenvolvimento de uma tela Mobile utilizando Oracle Mobile Hub - OMH
- **Lab 4:** Desenvolvimento de uma tela utilizando o Oracle Visual Builder

## Pré Requisitos
Será necessário para realizar este Workshop:
- Instância do Oracle Integration Cloud (OIC)
- Instância do Oracle Mobile Hub (OMH)
- Instância do Oracle Sales Cloud
- Postman - [Download](https://www.getpostman.com/ "Download")
- Sugestão em utilizar o navegador Chrome com o touchscreen desligado.  [Desligar o touchscreen no Windows 10](https://support.microsoft.com/en-us/help/4028019/windows-enable-and-disable-your-touchscreen-in-windows-10 "Desligar o touchscreen no Windows 10")
- Utilizar o navegador na lingua inglesa. - [Como mudar a língua no Chrome](https://support.google.com/chrome/answer/173424?co=GENIE.Platform%3DDesktop&hl=en "Como mudar a língua no Chrome")

## Atividades

#### Lab 1 - Desenvolvimento da Integração entre Oracle OIC e Oracle Sales Cloud
**Documentação**: [Lab1.md](https://github.com/matheus-neia/Oracle/blob/master/paas4saas/lab1.md)
##### Objetivos
- Criar um conector REST
- Criar um conector para o Oracle Sales Cloud
- Criar uma integração entre o conector de tecnologia rest e o conector Oracle Sales Cloud

#### Lab 2 - Desenvolvimento de um processo de negócio utilizando Process Cloud Service - OIC e integrando com Oracle Sales Cloud
**Documentação**: [Lab2.md](https://github.com/matheus-neia/Oracle/blob/master/paas4saas/lab2.md)
##### Objetivos
- Desenvolver um processo de negócio que valida se o valor da oportunidade for maior que 5000 USD o gerente deverá aprovar a sua criação 
- Compor o processo de negócio com a integração criada no Lab 1.

#### Lab 3 - Desenvolvimento de uma tela Mobile utilizando Oracle Mobile Hub - OMH
**Documentação**: [Lab3.md](https://github.com/matheus-neia/Oracle/blob/master/paas4saas/lab3.md)
##### Objetivos
- Criar um conector no OMH, este conector irá apontar para o processo criado no Lab2. 
- Criar uma API no OMH apontando para o conector criado.
- Criar uma aplicação utilizando o Oracle MAX, esta aplicação irá chamar o processo criado no Lab2 através da API criada no OMH

#### Lab 4 - Desenvolvimento de uma tela utilizando o Oracle Visual Builder
**Documentação**: [Lab4.md](https://github.com/matheus-neia/Oracle/blob/master/paas4saas/lab4.md)
##### Objetivos
- Desenvolver uma aplicação Web com um formulário para a criação de uma oportunidade. 
- Esta aplicação irá chamar o processo de negócio criado no Lab2