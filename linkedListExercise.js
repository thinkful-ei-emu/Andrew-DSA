const LinkedList = require('./LinkedList');

function display(linkedList) {
  let list = '';
  let currNode = linkedList.head;
  while (currNode !== null) {
    list +=
      currNode.next !== null ? `${currNode.value} -> ` : `${currNode.value}`;

    currNode = currNode.next;
  }

  return list;
}

function size(linkedList) {
  let counter = 0;
  let currNode = linkedList.head;

  while (currNode !== null) {
    counter++;
    currNode = currNode.next;
  }

  return counter;
}

function isEmpty(linkedList) {
  if (linkedList.head === null) { return true; }
  else { return false; }
}

function main() {
  const SLL = new LinkedList();

  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');

  console.log(display(SLL));

  SLL.insertBefore('Test', 'Helo');
  SLL.insertAfter('Boo', 'Boomer');
  SLL.insertAt('TestAT', 0);

  // console.log(SLL);
  console.log(display(SLL));
  console.log(size(SLL));
  console.log('SLL', isEmpty(SLL));
  console.log('New', isEmpty(new LinkedList()));
}

main();