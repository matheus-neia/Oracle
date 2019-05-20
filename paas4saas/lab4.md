# Lab 4 - Desenvolvimento de uma tela utilizando o Oracle Visual Builder

## Objetivos
- Passo 1: Criar aplicação VBCS com o formulário para cadastro da oportunidade
- Passo 2: Configurar uma chamada do VBCS para o Oracle Process Cloud
- Passo 3: Criar uma chamada do formulário VBCS para o Oracle Process Cloud
- Passo 4: Efetuar o teste e deploy da aplicação VBCS

## Pré-Requisitos
Leia os Links abaixo:
- Executar o Lab 1 e Lab 2
- Ter acesso ao OIC Enterprise Edition

### Passo 1
**1.1** Faça o login da sua conta no Oracle Ingration Cloud e clique na opção **Visual Builder**.

![image001.png](images/4/image001.png)

**1.2** Clique em  **New** para criar uma nova aplicação.

![image002.png](images/4/image002.png)

**1.3** Preenche o o campo **Application Name** com `Workshop VBCS Application XX` (Onde XX será entregue pelo instrutor).

![image004.png](images/4/image004.png)

**1.4** Clique em **Web Apps**:

![image005.png](images/4/image005.png)

e depois clique em **+ Web Application**, dê o nome de `Opportunity`

![image006.png](images/4/image006.png)

![image007.png](images/4/image007.png)

**1.5** Após a aplicação criada, ajuste sua tela para uma melhor visualização. No campo **Components** escolha **Layout -> Form Layout** e arraste para o espaço de design. 

![image008.png](images/4/image008.png)

**1.6** Vamos criar os campos de uma oportunidade. Arraste o componente **Field -> Input Text** para dentro do **Form Layout**.

![image009.png](images/4/image009.png)

Do lado direito da tela na aba **General** o campo **Label Hint** preencha com `Name`.

![image011.png](images/4/image011.png)

![image012.png](images/4/image012.png)

**1.7** Crie mais 5 campos dentro do **Form Layout**, para isso repita o 1.6 com os valores da tabela abaixo.

| Componente Field  | Label Hint  |
| ------------ | ------------ |
| Input Text  | Owner |
| Input Text | Product Name  |
| Currency |  Product Price |
| Input Number  |  Product Quantity |
| Percent  |  Win Probability |


Por último adicione um botão no final do formulário, arrastando o componente **Common -> Button**

![image013.png](images/4/image013.png)

**1.8** Selecione o **Form Layout** na aba **General** selecione no campo **Label Edge** a opção **top**

![image014.png](images/4/image014.png)

**1.9** Agora vamos criar as variáveis para serem utilizadas nos campos que em
criamos. Para isso siga os passos abaixo: - Cliquem em **Variables** (1) -
- Clique em **Variables** (1)
- Clique em **+ Variable** (2)
- Preencha em **ID** : `Opportunity` (3)
- Preencha em **Type** : `Object` (4)
- Clique em **Create** (5)

![image015.png](images/4/image015.png)

**1.10** Clique em **Add Field** e crie os seguintes campos:

![image016.png](images/4/image016.png)

| Id  | Type  |
| ------------ | ------------ |
| Name  | String |
| Owner | String  |
| ProductName |  String |
| ProductPrice  |  Number |
| ProductQty  |  Number |
| WinProb  |  Number |

![image017.png](images/4/image017.png)

O resultado final ficará próximo a isso:

![image019.png](images/4/image019.png)

**1.11** Agora vamos associar as variáveis que criamos nos campos da página que criamos. Para isso volte até o design da tela e clique no campo **Name**. Na aba **Data** (1) preencha o campo **Value** (2) com a variável **Name** (3)

![image020.png](images/4/image020.png)

Faça o mesmo para o campo **Owner**

![image021.png](images/4/image021.png)

Faça isso para os demais campos:
- Owner
- Product Name
- Product Price
- Product Quantity
- Win Probability

### Passo 2

**2.1** Agora vá no ícone **Process** para criarmos a integração entre o Process Cloud e o VBCS. 

![image022.png](images/4/image022.png)

Clique em Process 

![image023.png](images/4/image023.png)

Siga os cliques conforme imagem abaixo

![image024.png](images/4/image024.png)

**2.2** Clique no **+** para adicionar o processo (1), desligue a opção de incluir testes (2), deixe o **Alias** como `ProcessCreateOpp` (3) e clique em **Add**.

![image026.png](images/4/image026.png)

### Passo 3

**3.1** Vamos criar um evento para o botão **Save**. Para isso segui os cliques conforme imagem abaixo:

![image027.png](images/4/image027.png)

Clique em **Quick Start: 'ojAction'**

![image028.png](images/4/image028.png)

**3.2** Arraste a ação **Start Process** conforme inficado na imagem abaixo:

![image029.png](images/4/image029.png)

Clique em **Select Process**

![image030.png](images/4/image030.png)

Selecione o processo com o nome do Alias que você deu no passo 2.2

![image031.png](images/4/image031.png)

**3.3** Vamos fazer o mapeamento dos campos do formulário com os campos da chamada. Para isso clique em **Assign**

![image032.png](images/4/image032.png)

Faça o mapeamento dos campos conforme imagens abaixo:

![image033.png](images/4/image033.png)

![image034.png](images/4/image034.png)

**3.4** Crie mais uma ação chamada **Fire Action** e coloque as informações necessárias conforme imagem abaixo:

![image035.png](images/4/image035.png)

### Passo 4

**4.1** Para realizarmos o teste da aplicação, clique no ícone de teste e depois prencha os dados. Conforme images abaixo:

![image036.png](images/4/image036.png)


Clique em **Save**

![image037.png](images/4/image037.png)

Você deverá receber uma mensagem parecida como esta:

![image038.png](images/4/image038.png)

**4.2** Vá até a o integration e pesquisa na **Monitoring** -> **Tracking** (Confome lab 1, passo 4.7) para ver se sua chamada fio feita com sucesso.

![image039.png](images/4/image039.png)

**4.3** Agora volte até a tela do Visual Builder e clique em **All Applications** encontre sua aplicação `Workshop VBCS XX` selecione as opções e clique em **Stage**

![image040.png](images/4/image040.png)

![image041.png](images/4/image041.png)

Depois clique em **Publish**

![image042.png](images/4/image042.png)

Agora clique em **Live -> Opportunity** e faça os testes de sua aplicação

![image042.png](images/4/image042.png)

Com o término deste passo você poderá observar todo o fluxo acontecendo, o VBCS chamando o Process Cloud que chama o Integration Cloud. Navegue por toda a ferramenta para aprender e visualizar tudo funcionando em uma única ferramenta.