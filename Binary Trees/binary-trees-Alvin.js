class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// depth first values

// solve iteratively first
// const depthFirstValues = (root) => {
//   if (root === null) return [];
//   const result = [];
//   const stack = [root]; // [null]
//   while (stack.length > 0) {
//     const current = stack.pop();
//     result.push(current.val);

//     if (current.right) stack.push(current.right);
//     if (current.left) stack.push(current.left);
//   }
//   return result;
// };

// then solve recursively

const depthFirstValues = (root) => {
  if (root === null) return [];
  const leftValues = depthFirstValues(root.left);
  const rightValues = depthFirstValues(root.right);
  return [root.val, ...leftValues, ...rightValues];
};

module.exports = {
  Node,
  depthFirstValues,
};
