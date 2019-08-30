class _Node {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}


class Queue {
  constructor() {
    this.top = null;
    this.bottom = null;
  }

  enqueue(value) {
    if (this.top === null) {
      this.top = new _Node(value);
      this.bottom = this.top;
    }
    else {
      this.bottom.next = new _Node(value, this.bottom);
      this.bottom = this.bottom.next;
    }
  }

  dequeue() {
    const top = this.top;
    this.top = this.top.next;

    return top.value;
  }
}

module.exports = Queue;