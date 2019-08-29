const LinkedList = require('./LinkedList');

function main() {
  const SLL = new LinkedList();

  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');

  console.log(SLL.print());

  SLL.insertBefore('Test', 'Helo');
  SLL.insertAfter('Boo','Boomer');
  SLL.insertAt('TestAT',0);

  // console.log(SLL);
  console.log(SLL.print());
}

main();