/**
 * 
 * @param {number} n 
 */
function sheep(n) {
  if (n <= 0) {
    console.log('All sheep jumped over the fence.');
  }
  else {
    console.log(`${n}: Another sheep jumped over the fence.`);
    return sheep(n - 1);
  }
};
sheep(3);


function powerCalc(num, exp) {
  if (exp < 0) console.log('exp must be >= 0');
  else if (exp === 0) return 1;
  else return num * powerCalc(num, exp - 1);
}
console.log(powerCalc(10, 5));


function reverseString([first, ...str]) {
  if (!first) return '';
  else return reverseString(str) + first;
}
console.log(reverseString('string'));


function stringSplitter([first, ...str], sep) {
  if (!first) return '';
  else if (first === sep) return stringSplitter(str, sep);
  else return first + stringSplitter(str, sep);
}
console.log(stringSplitter('test/test2/test3', '/'));


function fibonacci(n) {
  // console.log(p1);
  if (n === 1) return [0, 1];
  else {
    const s = fibonacci(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
}
console.log(fibonacci(7));


function factorial(n) {
  if (n <= 1) return 1;
  else return n * factorial(n - 1);
}
console.log(factorial(5));


function checkValidMove(move) {
  const wall = '*';
  const passed = 'p';

  return (move !== wall && move !== passed);
}

function mazeSolver(m, row = 0, col = 0) {
  const curr = m[row][col];
  const up = row - 1;
  const right = col + 1;
  const down = row + 1;
  const left = col - 1;

  if (curr === 'e') return '';
  else if (right <= m[row].length - 1 && checkValidMove(m[row][right])) {
    m[row][col] = 'p';
    return 'R' + mazeSolver(m, row, right);
  }
  else if (down <= m.length - 1 && checkValidMove(m[down][col])) {
    m[row][col] = 'p';
    return 'D' + mazeSolver(m, down, col);
  }
  else if (left >= 0 && checkValidMove(m[row][left])) {
    m[row][col] = 'p';
    return 'L' + mazeSolver(m, row, left);
  }
  else if (up >= 0 && checkValidMove(m[up][col])) {
    m[row][col] = 'p';
    return 'U' + mazeSolver(m, up, col);
  }
  else return 'X';
}


function processMaze(m) {
  let graph = {};
  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < m[i].length; j++) {
      if (m[i][j] !== '*') {

        const validMoves = {};

        if (i - 1 >= 0 && checkValidMove(m[i - 1][j])) {
          validMoves[`${i - 1}-${j}`] = 'U';
        }
        if (i + 1 < m.length && checkValidMove(m[i + 1][j])) {
          validMoves[`${i + 1}-${j}`] = 'D';
        }
        if (j - 1 >= 0 && checkValidMove(m[i][j - 1])) {
          validMoves[`${i}-${j - 1}`] = 'L';
        }
        if (j + 1 < m[i].length && checkValidMove(m[i][j + 1])) {
          validMoves[`${i}-${j + 1}`] = 'R';
        }

        graph[`${i}-${j}`] = {
          end: m[i][j] === 'e',
          children: validMoves
        };
      }
    }
  }

  return graph;
}


function mazeSolverAll(graph, curr = '0-0', prev = [], path = '') {
  if (graph[curr].end) console.log(path);

  const children = Object.keys(graph[curr].children);

  if (children.length) {
    children.forEach(child => {
      if (!prev.includes(child)) {
        mazeSolverAll(graph, child, [curr, ...prev], path + graph[curr].children[child]);
      }
    });
  }
}


let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

const graph = processMaze(maze);
console.log(mazeSolver(maze));
mazeSolverAll(graph);


function anagrams(prefix, words = []) {
  if (!word) return '';
}
