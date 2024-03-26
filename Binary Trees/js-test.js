// Import your code file
const { Node, depthFirstValues } = require("./binary-trees-Alvin.js");

// Define your test case function
function testDepthFirstValues1() {
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

  const expectedResult1 = ["a", "b", "d", "e", "c", "f"];
  const result1 = depthFirstValues(a);

  if (JSON.stringify(result1) === JSON.stringify(expectedResult1)) {
    console.log("Test 1 passed!");
  } else {
    console.error("Test 1 failed!");
  }
}

// Call your test case function
testDepthFirstValues1();

function testDepthFirstValues2() {
  const a = new Node("a");
  const b = new Node("b");
  const c = new Node("c");
  const d = new Node("d");
  const e = new Node("e");
  const f = new Node("f");
  const g = new Node("g");

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;
  e.left = g;

  const expectedResult2 = ["a", "b", "d", "e", "g", "c", "f"];
  const result2 = depthFirstValues(a);

  if (JSON.stringify(result2) === JSON.stringify(expectedResult2)) {
    console.log("Test 2 passed!");
  } else {
    console.error("Test 2 failed!");
  }
}

// Call your test case function
testDepthFirstValues2();

function testDepthFirstValues3() {
  const a = new Node("a");

  const expectedResult3 = ["a"];
  const result3 = depthFirstValues(a);

  if (JSON.stringify(result3) === JSON.stringify(expectedResult3)) {
    console.log("Test 3 passed!");
  } else {
    console.error("Test 3 failed!");
  }
}

// Call your test case function
testDepthFirstValues3();

function testDepthFirstValues4() {
  const a = new Node("a");
  const b = new Node("b");
  const c = new Node("c");
  const d = new Node("d");
  const e = new Node("e");

  a.right = b;
  b.left = c;
  c.right = d;
  d.right = e;

  const expectedResult4 = ["a", "b", "c", "d", "e"];
  const result4 = depthFirstValues(a);

  if (JSON.stringify(result4) === JSON.stringify(expectedResult4)) {
    console.log("Test 4 passed!");
  } else {
    console.error("Test 4 failed!");
  }
}

// Call your test case function
testDepthFirstValues4();

// test 5
function testDepthFirstValues5() {
  const expectedResult5 = [];
  const result5 = depthFirstValues(null);

  if (JSON.stringify(result5) === JSON.stringify(expectedResult5)) {
    console.log("Test 5 passed!");
  } else {
    console.error("Test 5 failed!");
  }
}

// Call your test case function
testDepthFirstValues5();
