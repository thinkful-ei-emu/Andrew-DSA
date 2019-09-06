const BinarySearchTree = require('./binaryTree');

/**
 * sums up the values of the tree
 * @param {tree} t 
 */
function tree(t) {
  if (!t) {
    return 0;
  }
  return tree(t.left) + t.value + tree(t.right);
}

/**
 * find the depths of left and right subtrees at each node
 * then recursively sum the heights, returning only the larger
 * of the two
 * 
 * @param {BinaryTree} tree 
 */
function maxDepth(tree) {
  if (tree === null) return 0;

  const leftDepth = maxDepth(tree.left);
  const rightDepth = maxDepth(tree.right);

  return (leftDepth > rightDepth) ? leftDepth + 1 : rightDepth + 1;
}

function minDepth(tree) {
  if (tree === null) return 0;

  const leftDepth = minDepth(tree.left);
  const rightDepth = minDepth(tree.right);

  return (leftDepth < rightDepth) ? leftDepth + 1 : rightDepth + 1;
}

function thirdLargest(tree, moves = 0) {
  if (!tree) return null;
}

// function thirdLargest(tree, arr = []) {
//   // if (!tree) return arr[arr.length - 3];

//   tree.left && thirdLargest(tree.left, arr);
//   arr.push(tree.value);
//   tree.right && thirdLargest(tree.right, arr);

//   return arr.length < 3 ? null : arr[arr.length - 3];
// }

/**
 * traverse tree, checking that each left child is less than
 * its parent and each right child is greater than its parent
 * return logical product of each subtree
 * 
 * @param {BinaryTree} tree
 */
function isBinarySearchTree(tree) {
  let isLeft = true;
  let isRight = true;

  if (!tree) return true;

  if (tree.left) {
    isLeft = isBinarySearchTree(tree.left)
      && (tree.left.value < tree.value);
  }
  if (tree.right) {
    isRight = isBinarySearchTree(tree.right)
      && (tree.value < tree.right.value);
  }

  return isLeft && isRight;
}

function balancedBST(tree) {
  return (maxDepth(tree) - minDepth(tree)) < 2;
}


function preorderTraversalArray(arr) {
  if (arr.length === 0) return [];

  const root = arr[0];
  const leftSubtree = [];
  const rightSubtree = [];

  for (let i = 1; i < arr.length; i++) {
    const element = arr[i];
    element < root
      ? leftSubtree.push(element)
      : rightSubtree.push(element);
  };

  return [root, ...preorderTraversalArray(leftSubtree), ...preorderTraversalArray(rightSubtree)];
}

/**
 * do a preorder traversal of array
 */
function sameBST(arr1, arr2) {

  if (arr1.length !== arr2.length) return false;
  if (!arr1.length && !arr2.length) return true;

  const left1 = [];
  const left2 = [];
  const right1 = [];
  const right2 = [];
  const root1 = arr1[0];
  const root2 = arr2[0];

  if (root1 !== root2) return false;

  for (let i = 1; i < arr1.length; i++) {
    arr1[i] < root1 ? left1.push(arr1[i]) : right1.push(arr1[i]);
    arr2[i] < root2 ? left2.push(arr2[i]) : right2.push(arr2[i]);
  }

  return sameBST(left1, left2) && sameBST(right1, right2);
}



function printTree(tree) {
  if (tree) {
    console.log(tree.value);
    printTree(tree.left);
    printTree(tree.right);
  }
}

function main() {
  const binaryTree = new BinarySearchTree();

  const arr1 = [
    3, 5, 4, 6, 1, 0, 2
  ];
  const arr2 = [
    3, 1, 5, 2, 4, 6, 0
  ];

  // binaryTree.insert(3);
  // binaryTree.insert(1);
  // binaryTree.insert(4);
  // binaryTree.insert(6);
  // binaryTree.insert(9);
  // binaryTree.insert(2);
  // binaryTree.insert(5);
  // binaryTree.insert(7);

  // console.log(maxDepth(binaryTree));
  // console.log(minDepth(binaryTree));
  // printTree(binaryTree);
  // console.log(isBinarySearchTree(binaryTree));
  // console.log(thirdLargest(binaryTree));
  // console.log(balancedBST(binaryTree));

  console.log(sameBST(arr1, arr2));
}
main();