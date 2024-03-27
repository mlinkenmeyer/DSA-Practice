class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// //recursion
// const treeSum = (root) => {
//   // start with base case
//   if (root === null) return 0;

//   // now compute answer given children results
//   return root.val + treeSum(root.left) + treeSum(root.right);
// };

//iterative

const treeSum = (root) => {
  if (root === null) return 0;

  let totalSum = 0;

  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();
    totalSum += current.val; // This is equivalent to: totalSum = totalSum + current.val;

    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  }
  return totalSum;
};

module.exports = {
  Node,
  treeSum,
};
