[Read this page in English](https://github.com/I-Lima/Data-Structure-JS/blob/main/Arrays/README.md)

# Arrays

**Sumário**

- [Arrays](#arrays)
  - [Introdução](#introdução)
  - [Por que devemos usar Arrays ?](#por-que-devemos-usar-arrays-)
  - [Criando e Inicializando Arrays](#criando-e-inicializando-arrays)
  - [Acrescentando Elementos](#acrescentando-elementos)
    - [Inserindo ao final - push](#inserindo-ao-final---push)
  - [Inserindo na primeira posição - unshift](#inserindo-na-primeira-posição---unshift)
  - [Removendo Elementos](#removendo-elementos)
    - [Removendo um elemento final - pop](#removendo-um-elemento-final---pop)
    - [Removendo um elemento da primeira posição - shift](#removendo-um-elemento-da-primeira-posição---shift)
  - [Adicionando e Removendo de uma Posição Específica - splice](#adicionando-e-removendo-de-uma-posição-específica---splice)
  - [Iterando Arrays Bidimensionais](#iterando-arrays-bidimensionais)
  - [Arrays Multidimensionais](#arrays-multidimensionais)
  - [Métodos de Arrays](#métodos-de-arrays)
    - [Junção - concat](#junção---concat)
    - [Iteração](#iteração)
      - [Every](#every)
      - [Some](#some)
      - [ForEach](#foreach)
      - [Map](#map)
      - [Filter](#filter)
      - [Reduce](#reduce)
    - [Ordenando Elementos](#ordenando-elementos)
      - [Reverse](#reverse)
      - [Sort](#sort)
      - [Personalizada](#personalizada)
    - [Pesquisa - index, indexOf](#pesquisa---index-indexof)
    - [Convertendo Array em uma String - toString, join](#convertendo-array-em-uma-string---tostring-join)
  - [Classe TypedArray](#classe-typedarray)

## Introdução

Um Array é uma estrutura de dados mais simples possível em memória. Esse array armazena valores que são todos do mesmo tipo, sequencialmente.Embora o JavaScript nos permita criar arrays com valores de tipos distintos, não podemos fazer isso.

## Por que devemos usar Arrays ?

Os arrays são úteis por diversos motivos:

- Armazenamento de múltiplos valores
- Acesso a elementos
- Iteração simplificada
- Flexibilidade
- Manipulação de dados
- Eficiência de memória
  
## Criando e Inicializando Arrays

```
let daysOfWeek = new Array();
daysOfWeek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');

let daysOfWeek = [];
daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
```

## Acrescentando Elementos

Acrescentar elementos de um array não é tão difícil; contudo, essas operações podem ter suas sutilezas.

### Inserindo ao final - push

Se quisermos acrescentar um novo elemento nesse array tudo que precisamos fazer é referenciar a última posição livre
do array e atribuir-lhe um valor.

> Em JavaScript, um array é um objeto mutável. Podemos facilmente lhe acrescentar novos elementos. O objeto crescerá dinamicamente à medida que novos elementos forem adicionados.

A API de JavaScript também tem um método chamado **push**, que nos permite acrescentar novos elementos no final de um array

 ```
  numbers.push(11);
  numbers.push(12, 13);
 ```

## Inserindo na primeira posição - unshift

Para isso, inicialmente devemos deixar a primeira posição livre, deslocando todos os elementos para a direita.

A classe de JavaScript também tem um método chamado **unshift**,
array que insere no início do array os valores passados como argumentos para o método.

```
  numbers.unshift(-2);
  numbers.unshift(-4, -3);
```

## Removendo Elementos

Remover elementos de um array não é tão difícil; contudo, essas operações podem ter suas sutilezas.

### Removendo um elemento final - pop

O método **pop** remove o último elemento de um array e retorna aquele elemento.

```
  numbers.pop();
```

>Os métodos **push** e **pop** permitem que um array emule uma pilha básica.

### Removendo um elemento da primeira posição - shift

O método **shift** remove o primeiro elemento de um array e retorna esse elemento.

```
  numbers.shift();
```

> Os métodos e permitem que um array emule uma estrutura **shift** e **unshift** de dados básica de fila.

## Adicionando e Removendo de uma Posição Específica - splice

O método **splice** pode ser usado para remover um elemento de um array, simplesmente especificando a posição/índice a partir do qual queremos fazer a remoção e a quantidade de elementos que gostaríamos de remover

```
  numbers.splice(5,3);
```

Esse código removerá três elementos a partir do índice 5 de nosso array. Isso significa que numbers[5], numbers[6] e numbers[7] serão removidos do array numbers.

> O operador **delete** também pode ser usado para remover um elemento de um array. No entanto, a posição do array terá o valor undefined, ou seja, será o mesmo que executar numbers[0] = undefined, e teríamos  de reindexar o array. Por esse motivo, devemos sempre usar os métodos **splice**, **pop** ou **shift** para remover elementos.
 ---

 Também podemos usar o método **splice** para inserir elementos no array:

 ```
 numbers.splice(5, 0, 2, 3, 4);
 ```

 O primeiro argumento do método é o índice a partir do qual queremos inserir elementos. O segundo argumento é a quantidade de elementos que queremos remover (nesse caso, não queremos remover nenhum, portanto passamos o valor 0 (zero)). Do terceiro argumento em diante, temos os valores que gostaríamos de inserir no array (os elementos
2, 3 e 4).

## Iterando Arrays Bidimensionais

É necessário percorrer todas as linhas e colunas com um laço. Para isso, devemos usar um laço **for** aninhado, em que a variável  **i** representa as linhas e **j** representa as colunas.

> Para exibir um array bidimensional no console do navegador, podemos usar  a instrução **console.table(bidiArray)**. Com ela, teremos  uma saída mais elegante para o usuário.

> Os arrays bidimensionais são os mais comuns.

## Arrays Multidimensionais

Utilizamos a mesma lógica para array bidimensional. Só vamos precisar acrescentar um laço **for** para a variável **z**, que representa a profundidade da matriz.

## Métodos de Arrays

Os arrays em JavaScript são bem interessantes, pois são muito eficazes e têm mais recursos disponíveis que os arrays primitivos em outras linguagens.

|  Método  |                             Descrição                             |
|:--------:|-------------------------------------------------------------------|
|concat    |Junta vários arrays e devolve uma cópia dos arrays concatenados.   |
|every     |Itera por todos os elementos do array, verificando uma condição desejada (função) até que false seja devolvido. |
|filter    |Cria um array com todos os elementos avaliados com true pela função especificada. |
|forEach   |Executa uma função específica em cada elemento do array.           |
|join      | Reúne todos os elementos do array em uma string.                  |
|indexOf   | Pesquisa o array em busca de elementos específicos e devolve a sua posição. |
|lastIndexOf| Devolve a posição do último item do array que corresponda ao  critério de pesquisa.|
|map       | Cria outro array a partir de uma função que contém o critério/condição e devolve os elementos do array que correspondam ao critério. |
|reverse   | Inverte o array, de modo que o último item se torne o primeiro, e vice-versa. |
|slice     | Devolve um novo array a partir do índice especificado.            |
|some      |Itera por todos os elementos do array, verificando a condição desejada (função) até que true seja devolvido.|
|sort      | Organiza o array em ordem alfabética ou de acordo com a função especificada. |
|toString  | Devolve o array na forma de uma string.                           |
|valueOf   | É semelhante ao método toString e devolve o array na forma de uma string. |

### Junção - concat

Considere um cenário em que você tenha arrays diferentes e precise juntar
todos eles em um único array. Felizmente, a linguagem JavaScript já tem um método chamado **concat** capaz de fazer isso para nós.

Podemos passar quantos arrays e objetos/elementos quisermos para esse
array. Os arrays serão concatenados no array especificado na ordem em
que os argumentos forem passados para o método

### Iteração

A linguagem JavaScript tem alguns métodos de iteração embutidos, que
podem ser usados com arrays

#### Every

o método every, itera os elementos do array até que a função devolva false.

#### Some

o método some itera os elementos do array até que a função devolva true.

#### ForEach

Se precisarmos fazer a iteração em todo o array, independentemente de tudo mais, podemos usar a função forEach. O resultado será o mesmo que usar um laço **for**.

#### Map

O método map, criar uma nova matriz com base nos elementos da matriz original, aplicando uma função a cada um deles. Ele não altera a matriz original, mas cria e retorna uma nova matriz com os resultados da função aplicada a cada elemento.

#### Filter

O método filter, devolve um novo array com os elementos para os quais a função devolveu true.

#### Reduce

O método reduce, recebe uma função com os seguintes parâmetros: previousValue, currentValue, index e array. Os parâmetros index e array são opcionais, portanto não é necessário passálos caso não sejam usados.

> Pode ser muito útil se quisermos somar todos os valores de um array.

### Ordenando Elementos

#### Reverse

O método reverse inverte os itens de um array. O primeiro elemento do array se torna o último e o último torna-se o primeiro.

#### Sort

O método sort ordena os elementos do próprio array e retorna o array.

> Isso ocorre porque o método deixa os elementos em ordem sort lexicográfica e pressupõe que todos os elementos são strings.

#### Personalizada

Podemos ordenar um array que contenha qualquer tipo de objeto, e podemos também criar uma função para comparar os elementos de acordo com o que for necessário. Por exemplo, suponha que haja um objeto Person com name e age e queremos ordenar o array de acordo com a idade (age) da pessoa.

### Pesquisa - index, indexOf

Temos duas opções para pesquisa: o método **indexOf**, que devolve o índice do primeiro elemento correspondente ao argumento passado, e **lastIndexOf**, que devolve o índice do último elemento encontrado

### Convertendo Array em uma String - toString, join

Se quisermos exibir todos os elementos do array em uma única string,
podemos usar o método **toString**.

Se quisermos separar os elementos com um separador diferente, por exemplo, -, o método poderá ser usado **join**.

>Isso pode ser útil se precisarmos enviar o conteúdo do array para um servidor ou se esse conteúdo tiver de ser decodificado.

## Classe TypedArray

Podemos armazenar qualquer tipo de dado em arrays JavaScript. Isso se
deve ao fato de os arrays JavaScript não serem fortemente tipados como em
outras linguagens. TypedArray foi criado para que pudéssemos trabalhar com arrays contendo um único tipo de dado.

| TypedArray       | Descrição                                                 |
|:---------------: | --------------------------------------------------------- |
|Int8Array         |Inteiro de 8 bits com sinal, usando complemento de dois.   |
|Uint8Array        |Inteiro de 8 bits sem sinal.                               |
|Uint8ClampedArray |Inteiro de 8 bits sem sinal.                               |
|Int16Array        |Inteiro de 16-bits com sinal, usando complemento de dois.  |
|Uint16Array       |Inteiro de 16 bits sem sinal.                              |
|Int32Array        |Inteiro de 32-bits com sinal, usando complemento de dois.  |
|Uint32Array       |Inteiro de 32 bits sem sinal.                              |
|Float32Array      |Número de ponto flutuante padrão IEEE com 32 bits.         |
|Float64Array      |Número de ponto flutuante padrão IEEE com 64 bits.         |

> Arrays tipados são ótimos para trabalhar com APIs WebGL, manipular bits e lidar com arquivos e imagens. Esses arrays funcionam exatamente como os arrays simples.
