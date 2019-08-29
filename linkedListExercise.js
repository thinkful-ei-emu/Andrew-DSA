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

function findPrevious(item,linkedList){
  let currNode=linkedList.head;
  while(currNode!==null){
   
    if(!currNode.next){
      return null;}
    if(currNode.next.value===item){
      return currNode.value;
    }
    currNode=currNode.next;
    
    
  }
}

function findLast(list){
  let currNode=list.head;

  while(currNode!==null){
    if(!currNode.next){
      return currNode.value;
    }
    currNode=currNode.next;
  
  }
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
  console.log('Previous Item',findPrevious('Boo',SLL));
  console.log('Last Item',findLast(SLL));
}

main();