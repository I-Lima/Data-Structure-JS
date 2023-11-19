[Read this page in English](./README.md)

**Sumário**

- [Fila](#fila)
  - [Introdução](#introdução)
  - [Métodos](#métodos)
  - [Aplicações](#aplicações)
  - [Análise de Complexidade](#análise-de-complexidade)
- [Fila Dupla (Deque)](#fila-dupla-deque)
  - [Introdução](#introdução-1)
  - [Métodos](#métodos-1)
  - [Aplicações](#aplicações-1)
  - [Análise de Complexidade](#análise-de-complexidade-1)

<img src="./Assets/GraphicsQueues-V2_3_051122.webp" width="100%" />

# Fila

## Introdução

O que diferencia da pilha é a ordem de saída dos elementos: enquanto na pilha "o último é o primeiro que sai", na fila "o primeiro que entra é o primeiro que sai" (FIFO - First In First Out). Sua ideia fundamental é que só podemos inserir um novo elemento no final da fila e só podemos retirar o elemento do início.

A estrutura de fila é uma analogia natural com o conceito de fila que usamos no nosso dia-a-dia: quem primeiro entra numa fila é o primeiro a ser atendido.

Um exemplo muito conhecido em ciência da computação é a fila de impressão. Suponha que precisamos imprimir cinco documentos. Abrimos cada um dos documentos e clicamos no botão para imprimir. Cada um será enviado para a fila da impressora. O primeiro documento para o qual solicitamos a  impressão será impresso antes, e assim por diante, até que todos tenham sido impressos.

## Métodos

- Enqueue: Adiciona um elemento ao final da fila.
- Dequeue: Removeo primeiro elemento da fila. Também devolve o elemento removido.
- Peek: Devolve o primeiro elemento da fila, sem remover o elemento da fila.
- isEmpty: Verifica se a fila está vazia.
- Size: Retorna a quantidade de elementos na fila.
- Clear: Remove todos os elementos da fila, deixando-a vazia.

## Aplicações

- Sistemas de filas em tempo real.
- Redes de computadores.
- Sistemas de impressão.
- Processamento de tarefas em servidores.
- Sistemas de gerenciamento de pedidos.

## Análise de Complexidade

A operação de inserção e remoção na fila sempre realiza operações básicas. Logo, são operações de tempo constante e gastam tempo O(1).

Já a operação de consultar toda a fila percorre todos os elementos armazenados nela. Considerando que uma pilha contém *n* elementos, o tempo de execução será O(n).

A operação de esvaziamento da fila consiste em remover todos os elementos dela. O tempo gasto nessa operação depende da linguagem de programação que está sendo utilizada.

# Fila Dupla (Deque)

## Introdução

A fila dupla ou deque é uma fila especial que nos permite inserir e remover elementos do final ou da frente da fila.

Em ciência da computação, uma aplicação comum de um deque é na armazenagem de uma lista de operações para desfazer ações (undo). Sempre que um usuário executar uma operação no software, um push dessa operação será feito no deque. Quando o usuário clicar no botão Undo (Desfazer), uma operação de pop será efetuada no deque, o que significa que essa operação será removida do final.

## Métodos

- addFront: Adiciona um elemento no fim do deque.
- AddBack: Adiciona um elemento no início do deque.
- removeFront: Remove o primeiro elemento do deque.
- removeBack: Remove o último elemento do deque.
- peekFront: Devolve o primeiro elemento do deque, sem remover.
- peekBack: Devolve o último elemento do deque, sem remover.
- isEmpty: Verifica se a fila está vazia.
- Size: Retorna a quantidade de elementos na fila.
- Clear: Remove todos os elementos da fila, deixando-a vazia.

## Aplicações

- Algoritmos de fila de prioridade.
- Implementação de caches.
- Processamento de buffers em comunicação de rede.

## Análise de Complexidade

A operação de inserção e remoção no deque sempre realiza operações básicas. Logo, são operações de tempo constante e gastam tempo O(1).

Já a operação de consultar toda o deque percorre todos os elementos armazenados nela. Considerando que uma pilha contém *n* elementos, o tempo de execução será O(n).

A operação de esvaziamento do deque consiste em remover todos os elementos dela. O tempo gasto nessa operação depende da linguagem de programação que está sendo utilizada.
