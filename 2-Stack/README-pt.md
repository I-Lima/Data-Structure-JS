# Pilhas

**Sumário**

- [Pilhas](#pilhas)
  - [Introdução](#introdução)
  - [Métodos](#métodos)
  - [Aplicações](#aplicações)
  - [Análise de Complexidade](#análise-de-complexidade)

<img src="assets/is_a_stack_filo_or_lifo.png" width=80% />

## Introdução

Uma pilha é uma coleção ordenada de itens que obedece ao princípio LIFO (Last In First Out). Sua idéia fundamental é que todo o acesso a seus elementos seja feito a partir do topo. Assim, quando um elemento novo é introduzido na pilha, ele passa a ser o elemento do topo. O único elemento que pode ser removido da pilha é o do topo.

Para entender o funcionamento de uma estrutura de pilha, podemos fazer uma analogia com uma pilha de prato. Para pegar um prato da pilha, retiramos o do topo. Assim, temos de retirar o prato do topo para ter acesso ao próximo. A estrutura de pilha funciona de maneira análoga, onde a adição de novos itens ou a remoção de itens existentes ocorrem na mesma extremidade.

> Uma pilha também é usada pelos compiladores em linguagens de programação, pela memória do computador para armazenar variáveis e chamadas de métodos, e também pelo histórico do navegador.

## Métodos

Ela possui as seguintes operações fundamentais:

- Push: Adiciona um elemento ao topo da pilha.
- Pop: Remove o elemento do topo da pilha.
- Peek (Top): Obtém o elemento no topo da pilha sem removê-lo.
- isEmpty: Verifica se a pilha está vazia.
- Size: Retorna a quantidade de elementos na pilha.
- Clear: Remove todos os elementos da pilha, deixando-a vazia.

## Aplicações

- Gerenciamento de chamadas de funções (Call Stack).
- Navegação de histórico.
- Análise de expressões matemáticas.
- Gerenciamento de memória.
- Solução de problemas recursivos.
  
## Análise de Complexidade

A operação de inserção e remoção na pilha sempre realiza operações básicas. Logo, são operações de tempo constante e gastam tempo O(1).

Já a operação de consultar toda a pilha percorre todos os elementos armazenados nela. Considerando que uma pilha contém *n* elementos, o tempo de execução será O(n).

A operação de esvaziamento de pilha consiste em remover todos os elementos dela. O tempo gasto nessa operação depende da linguagem de programação que está sendo utilizada.
