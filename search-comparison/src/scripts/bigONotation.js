/**
 * 1. O(1)
 *    O(n)
 */


/**
 * 2. O(1)
 *    There is only one operation done on the given value
 *    which makes this function have constant runtime.
 * @param {number} value 
 */
function isEven(value) {
  if (value % 2 === 0) {
    return true;
  }
  else return false;
}

/**
 * 3. O(m*n) where m is the size of arr1 and n is the size of arr2
 *    The outer for loop runs m (arr1.length) times, and the nested
 *    for loop runs n (arr2.length) times, which gives O(m*n) operations.
 * @param {array} arr1 
 * @param {array} arr2 
 */
function areYouHere(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    const el1 = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      const el2 = arr2[j];
      if (el1 === el2) return true;
    }
  }
  return false;
}

/**
 * 4. O(n) where n is the length of the array
 * @param {array} array 
 */
function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2;
  }
  return array;
}

/**
 * 5. O(n) where n is the length of the array
 * @param {array} array 
 * @param {*} item 
 */
function naiveSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
}

/**
 * 6. O(n^2) where n is the length of the array
 * @param {array} arr 
 */
function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i] + ', ' + arr[j]);
    }
  }
}

/**
 * 7. O(n) where n is equal to num
 * @param {number} num 
 */
function compute(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {

    if (i === 1) {
      result.push(0);
    }
    else if (i == 2) {
      result.push(1);
    }
    else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  return result;
}

/**
 * 8. O(log2(n))
 *    This is a binary search, which means each time the result is not found,
 *    half of the given array is excluded from the next iteration.
 *    Since the size of the array is cut in half each iteration, we obtain
 *    log2(n) iterations which gives O(log2(n)) runtime.
 * @param {array} array 
 * @param {*} item 
 */
function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = array[currentIndex];

    if (currentElement < item) {
      minIndex = currentIndex + 1;
    }
    else if (currentElement > item) {
      maxIndex = currentIndex - 1;
    }
    else {
      return currentIndex;
    }
  }
  return -1;
}

/**
 * 9. O(1) assuming Math.random and Math.floor have constant runtime
 *    there are a constant number of operations which make this function
 *    have O(1) runtime.
 * @param {array} arr 
 */
function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}


/**
 * 
 */

function toh(n, src, temp, dest) {
  if (n === 1) {
    console.log(`${src} -> ${dest}`);
    return;
  }

  toh(n - 1, src, dest, temp);
  console.log(`${src} -> ${dest}`);
  toh(n - 1, temp, src, dest);
}

toh(3, 'src', 'temp', 'dest');