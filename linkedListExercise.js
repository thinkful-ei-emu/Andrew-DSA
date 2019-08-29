const LinkedList = require("./LinkedList");

function display(linkedList) {
  let list = "";
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
  if (linkedList.head === null) {
    return true;
  } else {
    return false;
  }
}

function findPrevious(item, linkedList) {
  let currNode = linkedList.head;
  while (currNode !== null) {
    if (!currNode.next) {
      return null;
    }

    if (currNode.next.value === item) {
      return currNode.value;
    }

    currNode = currNode.next;
  }
}

function findLast(list) {
  let currNode = list.head;

  while (currNode !== null) {
    if (!currNode.next) {
      return currNode.value;
    }
    currNode = currNode.next;
  }
}

function reverse(list) {
  let prev = null;
  let next = null;
  let curr = list.head;

  while (curr !== null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    

    if (next === null) list.head = curr;
    curr = next;
  }
}

function thirdFromEnd(list) {
  let curr = list.head;
  while (curr !== null) {
    if (curr.next.next.next === null) {
      return curr.value;
    } else {
      curr = curr.next;
    }
  }
}

function middleOfList(list){
  let single=list.head;
  let double=list.head;

  while(double!==null){
    if(double.next===null){
      return single.value;
    }
    single=single.next;
    double=double.next.next;
   console.log(single);
  
    
  }
  return single.value;

}




function main() {
  const SLL = new LinkedList();

  SLL.insertFirst("Apollo");
  SLL.insertLast("Boomer");
  SLL.insertLast("Helo");
  SLL.insertLast("Husker");
  SLL.insertLast("Starbuck");
  SLL.insertLast("Last")

  console.log(display(SLL));

  console.log(display(SLL));

   reverse(SLL);

  console.log(display(SLL));
  console.log(thirdFromEnd(SLL));
  console.log(middleOfList(SLL));

  // SLL.insertBefore('Test', 'Helo');
  // SLL.insertAfter('Boo', 'Boomer');
  // SLL.insertAt('TestAT', 0);

  // console.log(SLL);
  // console.log(display(SLL));
  // console.log(size(SLL));
  // console.log('SLL', isEmpty(SLL));
  // console.log('New', isEmpty(new LinkedList()));
  // console.log('Previous Item', findPrevious('Boo', SLL));
  // console.log('Last Item', findLast(SLL));
}

main();

/**
 * 4. Mystery Program
 *  Removes duplicates from linked list
 *  O(n^2) nested while
 */
