// Import code file
const { Node, treeSum } = require("./tree-sum.js");

// Define your test case function
function testTreeSum1() {
  const a = new Node(3);
  const b = new Node(11);
  const c = new Node(4);
  const d = new Node(4);
  const e = new Node(-2);
  const f = new Node(1);

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;

  //       3
  //    /    \
  //   11     4
  //  / \      \
  // 4   -2     1

  const expectedResult1 = 21;
  const result1 = treeSum(a);

  // Check if result matches expected result
  if (JSON.stringify(result1) === JSON.stringify(expectedResult1)) {
    console.log("Test 1 passed!");
  } else {
    console.error("Test 1 failed!");
  }
}

// Call your test case function
testTreeSum1();

// Define your test case function
function testTreeSum2() {
  const a = new Node(1);
  const b = new Node(6);
  const c = new Node(0);
  const d = new Node(3);
  const e = new Node(-6);
  const f = new Node(2);
  const g = new Node(2);
  const h = new Node(2);

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;
  e.left = g;
  f.right = h;

  //      1
  //    /   \
  //   6     0
  //  / \     \
  // 3   -6    2
  //    /       \
  //   2         2

  const expectedResult3 = 10;
  const result2 = treeSum(a);

  // Check if result matches expected result
  if (JSON.stringify(result2) === JSON.stringify(expectedResult3)) {
    console.log("Test 2 passed!");
  } else {
    console.error("Test 2 failed!");
  }
}

// Call your test case function
testTreeSum2();

// Define your test case function
function testTreeSum3() {
  const expectedResult3 = 0;
  const result3 = treeSum(null);

  // Check if result matches expected result
  if (JSON.stringify(result3) === JSON.stringify(expectedResult3)) {
    console.log("Test 3 passed!");
  } else {
    console.error("Test 3 failed!");
  }
}

// Call your test case function
testTreeSum3();
