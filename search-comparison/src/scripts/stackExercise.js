const Stack = require('./stack');


function displayStack(stack) {
  let node = stack.top;

  console.log('-- Top --');
  while (node !== null) {
    console.log(node.value);
    node = node.next;
  }
  console.log('-- Bottom --');
}

function peekTop(stack) {
  console.log(`Top: ${stack.top ? stack.top.value : null}`);
}

function isEmpty(stack) {
  return stack.top === null;
}

function remove(stack, value) {
  const tempStack = new Stack();

  while (stack.peek() !== null) {
    stack.top.value === value ? stack.pop() : tempStack.push(stack.pop());
  }

  while (tempStack.peek() !== null) stack.push(tempStack.pop());
}

function isPalidrome(str) {
  const stack = new Stack();
  // ignore case and remove all non-alphanumeric characters
  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

  for (let c of str) stack.push(c);
  let reverseString = '';
  while (stack.top !== null) reverseString += stack.pop();

  return str === reverseString;
}

function matchingParentheses(str) {
  str = str.replace(/[^()]/g, '');

  const stack = new Stack();

  for (let char of str) {
    if (char === '(') stack.push('(');
    else if (stack.peek() === null) {
      console.log('missing (');
      return;
    }
    else stack.pop();
  }

  stack.peek() !== null ? console.log('missing )') : console.log('no errors');
}

function sortStack(stack) {
  const tempStack = new Stack();
  let node;

  tempStack.push(stack.pop());

  while (stack.peek() !== null) {
    node = stack.pop();
    // console.log(tempStack.top.value, node);

    while ((tempStack.peek() !== null)
      && (node < tempStack.peek()))
      stack.push(tempStack.pop());

    tempStack.push(node);
  }

  // return tempStack;
  while (tempStack.peek() !== null) stack.push(tempStack.pop());
}


function starTrek() {
  const enterprise = new Stack();

  peekTop(enterprise);
  console.log(isEmpty(enterprise));

  enterprise.push('kirk');
  enterprise.push('spock');
  enterprise.push('mccoy');
  enterprise.push('scotty');

  displayStack(enterprise);

  remove(enterprise, 'mccoy');

  displayStack(enterprise);

  peekTop(enterprise);
  console.log(isEmpty(enterprise));

}
// starTrek();


function palidromeTest() {
  console.log(isPalidrome('dad'));
  console.log(isPalidrome('A man, a plan, a canal: Panama'));
  console.log(isPalidrome('1001'));
  console.log(isPalidrome('Tauhida'));
}
// palidromeTest();


function parenthesesTest() {
  matchingParentheses('()()()()()()(((())))');
  matchingParentheses('(())())(');
  matchingParentheses('(((()');

}
// matchingParenthesesTest();


function sortStackTest() {
  const stack = new Stack();
  const sample = [1, 3, 6, 5, 2, 4];

  for (let i = 0; i < sample.length; i++) {
    stack.push(sample[i]);
  }

  displayStack(stack);

  sortStack(stack);

  displayStack(stack);
}
// sortStackTest();

