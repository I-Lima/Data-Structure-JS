[Read this page in English](./README-en.md)

# Conjunto

**Sumário**

- [Conjunto](#conjunto)
  - [Introdução](#introdução)
  - [Métodos](#métodos)
  - [Aplicações](#aplicações)

## Introdução

Um conjunto (set) é uma coleção não ordenada de itens, composta de elementos únicos. Essa estrutura de dados usa o mesmo conceito matemático dos conjuntos finitos. Em matemática, um conjunto também apresenta algumas operações básicas como união, intersecção e diferença.

> Você também pode pensar em um conjunto como um array sem elementos repetidos e sem o conceito de ordem.

A estrutura de dados de conjunto não permite elementos duplicados. Entretanto, em matemática, tem um conceito chamado multiconjunto, que permite que o mesmo elemento seja inserido no conjunto, mesmo que ele já tenha sido inserido antes. Os multiconjuntos (ou bags) podem ser muito úteis para contar quantos vezes o elemento está presente em um conjunto. Eles são frequentemente aplicados em sistemas de banco de dados.

## Métodos

- add: Adiciona um elemento ao conjunto.
- delete: remove um elemento do conjunto.
- has: devolve um true se o elemento estiver no conjunto, e false case contrário.
- clear: remove todos os elementos do conjunto.
- size: devolve o tamanho do conjunto.
- values: devolve um array com todos os valores que estão no conjunto.
- insert: dados dois conjuntos, devolve um novo conjunto com os elementos presentes em ambos os conjuntos.
- union: dados dois conjuntos, devolve um novo conjunto com elementos dos dois conjuntos especificados.
- difference: dados dois conjuntos, devolve um novo conjunto com todos os elementos presentes no primeiro conjunto, mas não no segundo.
- isSubsetOf: confirma se um dado conjunto é um subconjunto de outro.

> Vamos usar um objeto para representar o nosso conjunto, em vez de utilizar um array. No entanto, poderíamos também ter usado um array nessa implementação.

## Aplicações

Uma das principais aplicações em ciência da computação se dá em bancos de dados, que estão na base da maioria das aplicações. Os conjuntos são usados no design e no processamento de consultas (queries). Ao criar uma consulta para obter um conjunto de dados em um banco de dados relacional (Oracle, Microsoft SQL Server, MySQL e assim por diante), fazemos o design da consulta usando a notação de conjunto, e o banco de dados também devolverá um conjunto de dados.

Quando criamos uma consulta SQL, podemos especificar se queremos ler todos os dados de uma tabela ou apenas um subconjunto deles. Também podemos obter dados que são comuns a duas tabelas, os quais estão  presentes apenas em uma tabela (e não na outra) ou nas duas. Essas operações são conhecidas no mundo SQL como junções (joins), e a base das junções SQL são as operações em conjuntos.
