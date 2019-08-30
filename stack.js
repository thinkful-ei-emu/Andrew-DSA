class _Node {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  peek() {
    return this.top ? this.top.value : null;
  }

  push(value) {
    if (this.top === null) {
      this.top = new _Node(value);
    }
    else {
      this.top = new _Node(value, this.top);
    }
  }

  pop() {
    const top = this.top;
    if (this.top !== null) {
      this.top = this.top.next;
    }
    return top.value;
  }
}

module.exports = Stack;