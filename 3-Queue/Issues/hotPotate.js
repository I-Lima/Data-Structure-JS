const Queue = require('../Queue');

function hotPotato(elementsList, num) {
  const queue = new Queue();
  const elimitatedList = [];
  for (let i = 0; i < elementsList.length; i++) {
   queue.enqueue(elementsList[i]);
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }

    elimitatedList.push(queue.dequeue());
  }

  return {
    eliminated: elimitatedList,
    winner: queue.dequeue()
  };
}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
const result = hotPotato(names, 4);

result.eliminated.forEach((name) => {
  console.log(`${name} was eliminated from the Hot Potato game.`);
});

console.log(`The winner is: ${result.winner}`);