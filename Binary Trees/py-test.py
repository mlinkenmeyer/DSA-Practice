from binarypy import Node, depthFirstValues

def testDepthFirstValues1():
    a = Node("a")
    b = Node("b")
    c = Node("c")
    d = Node("d")
    e = Node("e")
    f = Node("f")

    a.left = b
    a.right = c
    b.left = d
    b.right = e
    c.right = f

    expectedResult1 = ["a", "b", "d", "e", "c", "f"]
    result1 = depthFirstValues(a)

    if result1 == expectedResult1:
        print("Test 1 passed!")
    else:
        print("Test 1 failed!")

testDepthFirstValues1()

def testDepthFirstValues2():
    a = Node("a")
    b = Node("b")
    c = Node("c")
    d = Node("d")
    e = Node("e")
    f = Node("f")
    g = Node("g")

    a.left = b
    a.right = c
    b.left = d
    b.right = e
    c.right = f
    e.left = g

    expectedResult2 = ["a", "b", "d", "e", "g", "c", "f"]
    result2 = depthFirstValues(a)

    if result2 == expectedResult2:
        print("Test 2 passed!")
    else:
        print("Test 2 failed!")

testDepthFirstValues2()

def testDepthFirstValues3():
    a = Node("a")

    expectedResult3 = ["a"]
    result3 = depthFirstValues(a)

    if result3 == expectedResult3:
        print("Test 3 passed!")
    else:
        print("Test 3 failed!")

testDepthFirstValues3()

def testDepthFirstValues4():
    a = Node("a")
    b = Node("b")
    c = Node("c")
    d = Node("d")
    e = Node("e")

    a.right = b
    b.left = c
    c.right = d
    d.right = e

    expectedResult4 = ["a", "b", "c", "d", "e"]
    result4 = depthFirstValues(a)

    if result4 == expectedResult4:
        print("Test 4 passed!")
    else:
        print("Test 4 failed!")

testDepthFirstValues4()

def testDepthFirstValues5():
    expectedResult5 = []
    result5 = depthFirstValues(None)

    if result5 == expectedResult5:
        print("Test 5 passed!")
    else:
        print("Test 5 failed!")

testDepthFirstValues5()
