// Import your code file
const { Node, breadthFirstValues } = require("./breadth-first-values.js");

// Define your test case function
function testBreadthFirstValues1() {
  const a = new Node("a");
  const b = new Node("b");
  const c = new Node("c");
  const d = new Node("d");
  const e = new Node("e");
  const f = new Node("f");

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;

  const expectedResult1 = ["a", "b", "c", "d", "e", "f"];
  const result1 = breadthFirstValues(a);

  // Check if result matches expected result
  if (JSON.stringify(result1) === JSON.stringify(expectedResult1)) {
    console.log("Test 1 passed!");
  } else {
    console.error("Test 1 failed!");
  }
}

// Call your test case function
testBreadthFirstValues1();

function testBreadthFirstValues2() {
  const a = new Node("a");
  const b = new Node("b");
  const c = new Node("c");
  const d = new Node("d");
  const e = new Node("e");
  const f = new Node("f");
  const g = new Node("g");
  const h = new Node("h");

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;
  e.left = g;
  f.right = h;

  const expectedResult2 = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const result2 = breadthFirstValues(a);

  // Check if result matches expected result
  if (JSON.stringify(result2) === JSON.stringify(expectedResult2)) {
    console.log("Test 2 passed!");
  } else {
    console.error("Test 2 failed!");
  }
}

// Call your test case function
testBreadthFirstValues2();

function testBreadthFirstValues3() {
  const a = new Node("a");

  const expectedResult3 = ["a"];
  const result3 = breadthFirstValues(a);

  // Check if result matches expected result
  if (JSON.stringify(result3) === JSON.stringify(expectedResult3)) {
    console.log("Test 3 passed!");
  } else {
    console.error("Test 3 failed!");
  }
}

// Call your test case function
testBreadthFirstValues3();

function testBreadthFirstValues4() {
  const a = new Node("a");
  const b = new Node("b");
  const c = new Node("c");
  const d = new Node("d");
  const e = new Node("e");
  const x = new Node("x");

  a.right = b;
  b.left = c;
  c.left = x;
  c.right = d;
  d.right = e;

  const expectedResult4 = ["a", "b", "c", "x", "d", "e"];
  const result4 = breadthFirstValues(a);

  // Check if result matches expected result
  if (JSON.stringify(result4) === JSON.stringify(expectedResult4)) {
    console.log("Test 4 passed!");
  } else {
    console.error("Test 4 failed!");
  }
}

// Call your test case function
testBreadthFirstValues4();

function testBreadthFirstValues5() {
  const expectedResult5 = [];
  const result5 = breadthFirstValues(null);

  // Check if result matches expected result
  if (JSON.stringify(result5) === JSON.stringify(expectedResult5)) {
    console.log("Test 5 passed!");
  } else {
    console.error("Test 5 failed!");
  }
}

// Call your test case function
testBreadthFirstValues5();
