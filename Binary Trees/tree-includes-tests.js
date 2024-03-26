// Import your code file
const { Node, treeIncludes } = require("./tree-includes.js");

// Define your test case function
function testTreeIncludes1() {
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

  //      a
  //    /   \
  //   b     c
  //  / \     \
  // d   e     f

  const expectedResult1 = true;
  const result1 = treeIncludes(a, "e");

  // Check if result matches expected result
  if (JSON.stringify(result1) === JSON.stringify(expectedResult1)) {
    console.log("Test 1 passed!");
  } else {
    console.error("Test 1 failed!");
  }
}

// Call your test case function
testTreeIncludes1();

// test 2
function testTreeIncludes2() {
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

  //      a
  //    /   \
  //   b     c
  //  / \     \
  // d   e     f

  const expectedResult2 = true;
  const result2 = treeIncludes(a, "a");

  // Check if result matches expected result
  if (JSON.stringify(result2) === JSON.stringify(expectedResult2)) {
    console.log("Test 2 passed!");
  } else {
    console.error("Test 2 failed!");
  }
}

// Call your test case function
testTreeIncludes2();

// test 3
function testTreeIncludes3() {
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

  //      a
  //    /   \
  //   b     c
  //  / \     \
  // d   e     f

  const expectedResult3 = false;
  const result3 = treeIncludes(a, "n");

  // Check if result matches expected result
  if (JSON.stringify(result3) === JSON.stringify(expectedResult3)) {
    console.log("Test 3 passed!");
  } else {
    console.error("Test 3 failed!");
  }
}

// Call your test case function
testTreeIncludes3();

// test 4
function testTreeIncludes4() {
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

  //      a
  //    /   \
  //   b     c
  //  / \     \
  // d   e     f
  //    /       \
  //   g         h

  const expectedResult4 = true;
  const result4 = treeIncludes(a, "f");

  // Check if result matches expected result
  if (JSON.stringify(result4) === JSON.stringify(expectedResult4)) {
    console.log("Test 4 passed!");
  } else {
    console.error("Test 4 failed!");
  }
}

// Call your test case function
testTreeIncludes4();

// test 5
function testTreeIncludes5() {
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

  //      a
  //    /   \
  //   b     c
  //  / \     \
  // d   e     f
  //    /       \
  //   g         h

  const expectedResult5 = false;
  const result5 = treeIncludes(a, "p");

  // Check if result matches expected result
  if (JSON.stringify(result5) === JSON.stringify(expectedResult5)) {
    console.log("Test 5 passed!");
  } else {
    console.error("Test 5 failed!");
  }
}

// Call your test case function
testTreeIncludes5();

// test 6
function testTreeIncludes6() {
  const expectedResult6 = false;
  const result6 = treeIncludes(null, "b");

  // Check if result matches expected result
  if (JSON.stringify(result6) === JSON.stringify(expectedResult6)) {
    console.log("Test 6 passed!");
  } else {
    console.error("Test 6 failed!");
  }
}

// Call your test case function
testTreeIncludes6();
