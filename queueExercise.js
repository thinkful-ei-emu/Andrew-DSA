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