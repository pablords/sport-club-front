
## Resumo

### Ciclo de vida

Uma configuração raiz de spa único , que renderiza a página HTML e o JavaScript que registra os aplicativos. Cada aplicativo é registrado com três coisas:

1. Um nome
2. Uma função para carregar o código do aplicativo
3. Uma função que determina quando o aplicativo está ativo/inativo

Funçoes 

`bootstrap, mount, e unmount`

Cada aplicativo deve saber como inicializar, montar e desmontar a si mesmo do DOM. A principal diferença entre um SPA tradicional e os aplicativos de spa único é que eles devem poder coexistir com outros aplicativos, pois cada um deles não possui sua própria página HTML.

Por exemplo, seus SPAs React ou Angular são aplicativos. Quando ativo, eles podem ouvir eventos de roteamento de URL e colocar conteúdo no DOM. Quando inativos, eles não escutam os eventos de roteamento de url e são totalmente removidos do DOM.


### Recursos Principais
1. aplicativos de spa único : Microfrontends que renderizam componentes para um conjunto de rotas específicas.
2. pacotes single-spa : Microfrontends que renderizam componentes sem controlar rotas.
3. módulos utilitários : Microfrontends que exportam a lógica JavaScript compartilhada sem renderizar componentes.

### Root 
1. O arquivo HTML raiz que é compartilhado por todos os aplicativos de spa único.
2. O JavaScript que chama singleSpa.registerApplication().

Sua configuração raiz existe apenas para iniciar os aplicativos de spa único.

### Módulos utilitários
Módulos utilitários são um ótimo lugar para compartilhar lógica comum. Em vez de cada aplicativo criar sua própria implementação de lógica comum, você pode usar um objeto JavaScript simples (utilitário de spa único) para compartilhar essa lógica. 

1. Serviço de notificação
2. Guia de estilo/biblioteca de componentes
3. Serviço de rastreamento de erros
4. Serviço de autorização
5. Busca de dados

### Beneficios 
1. As bibliotecas comuns são fáceis de gerenciar e são baixadas apenas uma vez. Se você estiver usando o SystemJS, também poderá pré-carregá-los para aumentar a velocidade.
2. Compartilhar código/funções/variáveis ​​é tão fácil quanto importar/exportar, assim como em uma configuração monolítica
3. Aplicativos de carregamento lento são fáceis, o que permite acelerar os tempos de carregamento iniciais
4. Cada aplicativo (microsserviço AKA, módulo AKA ES) pode ser desenvolvido e implantado de forma independente. As equipes podem trabalhar em sua própria velocidade, experimentar (dentro da razão definida pela organização), controle de qualidade e implantar em seus próprios cronogramas. Isso geralmente também significa que os ciclos de lançamento podem ser reduzidos para dias em vez de semanas ou meses
5. Uma ótima experiência de desenvolvedor (DX): acesse seu ambiente dev e adicione um mapa de importação que aponte a url do aplicativo para seu localhost. Consulte as seções abaixo para obter detalhes