import React from 'react';
import logo from './logo.svg';
import './App.css';
import Queue from './scripts/queue';
import LinkedList from './scripts/LinkedList';

const data = '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5';

const stonks = [128, 97, 121, 123, 98, 97, 105];

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      dataArray: data.split(' '),
      binaryValue: null,
      linearValue: null,
      binaryCounter: 0,
      linearCounter: 0,
      searchValue: null,
      notFound: false
    };
  }

  indexOf(array, value) {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
      counter++;

      if (array[i] == value) {
        this.setState({
          linearCounter: counter,
          linearValue: i
        });
        return i;
      }
    }

    this.setState({
      linearCounter: counter,
      notFound: true,
      linearValue: -1
    });
    return -1;
  };

  binarySearch(array, value, start, end, counter = 0) {
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;

    if (start > end) {
      this.setState({
        notFound: true
      })
      return -1;
    }
    this.setState({ binaryCounter: counter });

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    console.log(start, end);
    if (item == value) {
      return index;
    }
    else if (item < value) {
      return this.binarySearch(array, value, index + 1, end, counter + 1);
    }
    else if (item > value) {
      return this.binarySearch(array, value, start, index - 1, counter + 1);
    }
  };

  bfs = (tree) => {
    const values = [];
    const queue = new Queue();
    let node = tree.root;
    queue.enqueue(node);

    while (queue.length) {
      node = queue.dequeue();
      values.push(node.value);
      if (node.left) {
        queue.enqueue(node.left)
      }
      if (node.right) {
        queue.enqueue()
      }
    }

    return values;
  }

  maxProfit = (arr) => {
    const positiveTrend = new Array(arr.length);
    let currentHolding = false;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < arr[i + 1]) {
        if (currentHolding) {
          positiveTrend[i] = 'wait';
        }
        else {
          positiveTrend[i] = 'buy';
          currentHolding = true;
        }
      }
      else {
        if (currentHolding) {
          positiveTrend[i] = 'sell';
          currentHolding = false;
        }
        else {
          positiveTrend[i] = 'wait';
        }
      }
    }

    return positiveTrend;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const sortedDataArray = [...this.state.dataArray].sort();
    const searchValue = document.getElementById('inputValue');
    const binaryResult = this.binarySearch(sortedDataArray, searchValue.value);
    const linearResult = this.indexOf(this.state.dataArray, searchValue.value);
    searchValue.value = '';
  }

  eggDrop = (floors = 100) => {
    // const floors = 100;
    const eggs = 2;
    let intervals = [];
    let tries = 1;
    let solution = [];

    let sum = 0;
    while (sum < floors) {
      sum += tries;
      intervals.push(tries);
      tries++;
    }

    sum = 0;
    for (let i = intervals.length - 1; sum < floors; i--) {
      sum += intervals[i];
      solution.push(sum < floors ? sum : floors);
    }

    return solution;
  }

  mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const middle = Math.floor(arr.length / 2);
    let left = this.mergeSort(arr.slice(0, middle));
    let right = this.mergeSort(arr.slice(middle, arr.length));

    return this.merge(left, right, arr);
  }

  merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        array[outputIndex++] = left[leftIndex++];
      }
      else {
        array[outputIndex++] = right[rightIndex++];
      }
    }

    for (let i = leftIndex; i < left.length; i++) {
      array[outputIndex++] = left[i];
    }

    for (let i = rightIndex; i < right.length; i++) {
      array[outputIndex++] = right[i];
    }

    return array;
  }

  middleOfList(list) {
    let single = list.head;
    let double = list.head;

    while (double !== null) {
      if (double.next === null) {
        return single;
      }
      single = single.next;
      double = double.next.next;
    }
    return single;
  }

  mergeSortLinkedList(list) {
    if (list.head === null || list.head.next === null) return list;

    let middle = this.middleOfList(list);
    let left = new LinkedList();
    let right = new LinkedList();

    let node = list.head;
    while (node !== middle) {
      left.insert(node.value);
      node = node.next;
    }
    while (middle !== null) {
      right.insert(middle.value);
      middle = middle.next;
    }

    left = this.mergeSortLinkedList(left);
    right = this.mergeSortLinkedList(right);

    return
  }

  mergeLinkedList(left, right) {
    let leftNode = left.head;
    let rightNode = right.head;
    const mergedLinkedList = new LinkedList();

    while (leftNode !== null && rightNode !== null) {
      if (leftNode.value < rightNode.value) {
        mergedLinkedList.insert(leftNode.value);
        leftNode = leftNode.next;
      }
      else {
        mergedLinkedList.insert(rightNode.value);
        rightNode = rightNode.next;
      }
    }

    while (leftNode !== null) {
      mergedLinkedList.insert(leftNode.value);
      leftNode = leftNode.next;
    }
    while(rightNode !== null) {
      mergedLinkedList.insert(rightNode.value);
      rightNode = rightNode.value;
    }

      return mergedLinkedList;
  }

  qSort(array, start = 0, end = array.length) {
    if (start >= end) return array;

    const middle = this.partition(array, start, end);
    array = this.qSort(array, start, middle);
    array = this.qSort(array, middle + 1, end);

    return array;
  }

  partition(array, start, end) {
    const pivot = array[end - 1];
    let j = start;

    for (let i = start; i < end; i++) {
      if (array[i] < pivot) {
        this.swap(array, i, j);
        j++;
      }
    }
    this.swap(array, end - 1, j);
    return j;
  }

  swap(arr, i, j) {
    let first = arr[i];
    arr[i] = arr[j];
    arr[j] = first;
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input id='inputValue' name='inputValue' type='number' placeholder='10'></input>
          <input type='submit'></input>
        </form>
        <p id='binary'>Binary: {this.state.binaryCounter}</p>
        <p id='linear'>Linear: {this.state.linearCounter}</p>
        <p>{this.state.notFound ? 'item not found' : ''}</p>

        <p>{stonks.join(', ')}</p>
        <p>{this.maxProfit(stonks).join(', ')}</p>

        <p id='eggdrop'>{this.eggDrop(100).join(', ')}</p>

        <p>
          mergeSort: <br />
          {this.mergeSort([...this.state.dataArray]).join(', ')}
        </p>

        <p>qSort: <br />
          {this.qSort([...this.state.dataArray]).join(', ')}
        </p>
      </div>
    );
  }
}

export default App;
