# Desafio Nox Bitcoin

Nosso desafio será tanto uma avaliação técnica, quanto a sua capacidade de entender um domínio de problema.

## Domínio do problema

Como somos uma empresa que negocia bitcoins, então pediremos para você criar um sistema de arbitragem entre um contrato perpétuo e um contrato futuro na BitMex. 

Nossa estratégia de arbitragem será baseada no modelo passivo-ativo, ou seja, você cria ordem e colocar no livro de ofertas (ordem passiva). Quando ela for executada, você precisa executar uma ordem à mercado ativa, garantindo que essa operação tenha um *spread*, que será o lucro da operação.

É isso!

Confundiu tudo? Não se preocupe, nós explicamos para você.

**Arbitragem:** É um tipo de negociação muito comum no mercado financeiro, onde basicamente você *compra mais barato* um ativo em um mercado/exchange e *vende mais caro* esse ativo em outro mercado/exchange.

Por exemplo:

Suponhamos que na Nox Bitcoin o preço de compra do bitcoin esteja R$ 30.000,00 e no Mercado Bitcoin o preço de venda do bitcoin esteja R$ 30.900,00. Caso você tenha saldo nas duas exchanges, você pode realizar a operação de comprar na Nox Bitcoin e vender no MB, conseguindo um lucro de R$ 900,00 nessa operação.

**Livro de Ofertas:** Na exchange que vamos usar no desafio, existe o conceito de livro de ofertas. Um livro de ofertas mostra a intenção de compra e venda do mercado para um determinado ativo. Utilizando a figura abaixo, podemos perceber que o mercado está com a intenção de venda há U$ 9745.50, enquanto a intenção de compra de compra está há U$ 9745.0, um diferença de U$ 0.50 entre os dois lados do livro de ofertas. Caso a **intenção de compra seja maior que a intenção de venda, ocorre uma compra do ativo.**

![Exemplo de orderbook](/orderbook.PNG)





**Ordem passiva vs Ordem ativa:** No livro de ofertas, quando uma order é enviada para ser executada em um determinado preço, fora do preço de mercado, chamamo chamamos essa ordem de *passiva*, pois ela está aguardando o mercado "chegar" no preço-alvo. Já quando a ordem é enviada ao mercado igual ou acima do valor do topo do livro de ofertas, chamamos ela de ativa, pois ela está executando a intenção de compra ou de venda de acordo com o preço determinado no mercado.

**Spread:** A diferência entre o preço de compra imediato e o preço de venda imediato.

**Ticker:** É nome único de um ativo em um mercado/exchange. Geralmente o ticker é utilizado como identificador único de um tick, que é um conjunto de informações sobre as negociações de um ativo, em um determinado intervá-lo de tempo (geralmente em milisegundos).

Ex: 
https://www.bitmex.com/api/v1/instrument?symbol=XBT&count=1&reverse=TRUE

**Bitmex:** Umas das maiores exchanges de negociação do mundo, que possui um ambiente de testnet, com bitcoin de mentira. Por isso selecionamos ela para nossos testes.

## Desafio

Vamos dividir o sistema em duas partes:

A primeira parte é construir uma API, que possui os seguintes endpoints:

- Histórico das suas ordens
- Lucro Total das suas operações
- Cria uma ordem passiva de compra (XBTUSD)
- Cancelar uma ordem passiva de compra (XBTUSD) 

Utilize a api de rest da Bitmex: https://www.bitmex.com/app/restAPI

A segunda parte você precisa criar um módulo que cria uma **ordem passiva de compra** de bitcoin perpétuo (XBTUSD). Quando sua ordem for executada, você precisa criar um **ordem ativa de venda**, do mesmo valor, de bitcoin futuro (XBTZ19).

Para fazer a segunda parte, você precisa seguir alguns passos:

- Obter as informações do ticker XBTUSD
- Obter as informações do ticker XBTZ19
- Conectar ao websocket da BitMex e "escutar" o canal de trades
- Quando a sua ordem passiva (XBTUSD) executar, você deve executar a mesma quantidade como ordem ativa (XBTZ19)


Utilize a api de websocket da Bitmex: https://www.bitmex.com/app/wsAPI

## Requisitos

- Ser escrito em C#
- Criar uma conta testnet na Bitmex (https://testnet.bitmex.com/)
- Usar Docker ou Kubernetes
- Banco de dados pode ser PostgreSQL, SQLite ou MySQL
- Ter testes automatizados
- Forkar esse desafio e criar o seu projeto (ou workspace) usando a sua versão desse repositório, tão logo acabe o desafio, submeta um _pull request_. 

## Critério de avaliação

-   **Organização do código**: Separação de módulos, view e model, back-end e front-end
-   **Clareza**: O README explica de forma resumida qual é o problema e como pode rodar a aplicação?
-   **Assertividade**: A aplicação está fazendo o que é esperado? Se tem algo faltando, o README explica o porquê?
-   **Legibilidade do código** (incluindo comentários)
-   **Cobertura de testes** (Não esperamos cobertura completa)
-   **Histórico de commits** (estrutura e qualidade)
-   **Usabilidade**: A API é intuitiva?
-   **Escolhas técnicas**: A escolha das bibliotecas, banco de dados, arquitetura, etc, é a melhor escolha para a aplicação?

## Dúvidas

Quaisquer dúvidas que você venha a ter, consulte as [_issues_](https://github.com/jpso/noxbitcoin-challenge/issues) para ver se alguém já não a fez e caso você não ache sua resposta, abra você mesmo uma nova issue!
