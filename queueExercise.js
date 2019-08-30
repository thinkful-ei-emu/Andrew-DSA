let Queue = require('./queue');

function displayQueue(q) {
  let top = q.top;
  console.log('-- Top --');
  while (top !== null) {
    console.log(top.value);
    top = top.next;
  }
  console.log('-- Bottom --');
}

function starTrek() {
  const enterprise = new Queue();

  enterprise.enqueue('kirk');
  enterprise.enqueue('spock');
  enterprise.enqueue('uhura');
  enterprise.enqueue('sulu');
  enterprise.enqueue('chekov');

  displayQueue(enterprise);
}
// starTrek();


function queueStack(values) {
  const stack = new Stack();
  const queue = new Stack();

  for (let value of values) stack.push(value);
  while (stack.peek() !== null) queue.push(stack.pop());

  return queue;
}

function squareDancePair(dancers) {
  const maleDancers = new Queue();
  const femaleDancers = new Queue();
  for (let dancer of dancers) {
    if (dancer[0] === 'F') {
      if (maleDancers.peek() !== null) console.log(`${maleDancers.dequeue()} / ${dancer}`);
      else femaleDancers.enqueue(dancer);
    }
    else {
      if (femaleDancers.peek() !== null) console.log(`${dancer} / ${femaleDancers.dequeue()}`);
      else maleDancers.enqueue(dancer);
    }
  }
}

const dancers = [
  'F Jane',
  'M Frank',
  'M John',
  'M Sherlock',
  'F Madonna',
  'M David',
  'M Christopher',
  'F Beyonce'
];

// squareDancePair(dancers);


/**
 * the line continuously gets longer
 * assuming each time a person is helped
 * a new person joins the queue
 */
function ophidanBank() {
  const queue = new Queue();

  queue.enqueue(0);

  for (let i = 1; i < 200; i++) {
    displayQueue(queue);
    const customer = queue.dequeue();
    if (Math.floor((Math.random() * 100) + 1) <= 25) {
      // console.log('requeue');
      queue.enqueue(customer);
    }
    queue.enqueue(i);
  }
}
// ophidanBank();